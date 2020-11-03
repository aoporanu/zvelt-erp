<?php

namespace App;

use App\Http\Resources\OrderResource;
use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Order extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'uid', 'user_id', 'client_id', 'shop_id', 'deliverer_id', 'total', 'weight', 'warehouse_id'
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['created_at', 'updated_at'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        //
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        //
    ];

    /**
     * Get the OrderItems for the Order.
     */
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    public static function storeOrder(Request $request)
    {
        DB::beginTransaction();
        try {
            // $request->state = 'unprocessed';
            if (empty($request->get('items'))) {
                return response()->json(['success' => false, 'message' => 'The order doersn\'t have any items, it will be deleted', 500]);
            }
            $shop = Shop::find($request->get('shop_id'));
            $invoice = Invoice::where('agent_id', $request->get('user_id'))->get(['id', 'amount_left'])->toArray();
            $visitation = Visitation::where(
                [
                    ['user_id', '=', $request->get('user_id')], 
                    ['shop_id', '=', $request->get('shop_id')]
                ])->first();
            if ($shop->invoices
                && $invoice 
                && $invoice[0]['amount_left']
                && $visitation 
                && $visitation->ceil > $invoice[0]['amount_left']) {
                return response()->json(['success' => false, 'message' => 'This client has already been invoiced by you. Please cash the invoice first'], 400);
            }
            $total = 0.0;
            foreach ($request->get('items') as $item) {
                $itemR = Item::find($item['item_id']);
                $purchasedItem = DB::select('select id, selling_cost from item_purchase where item_id=? and location_id=? and warehouse_id=?', [$item['item_id'], $item['location_id'], $request->get('warehouse_id')]);
                if (!$purchasedItem) {
                    return response()->json(['success' => false, 'message' => 'There wasn\'t any purchase for this item', 'purchased_item' => $item], 400);
                } else {
                    $purchItem = PurchasedItems::find($purchasedItem[0]->id);
                    if ($item['qty'] > $purchItem->qty) {
                        return response()->json(['status' => false, 'message' => 'Unable to add the current item to your order. The quantity on stock is less than what you\'re ordering', 'order' => $request->all()], 400);
                    }
                    if ($purchItem->qty === 0) {
                        return response()->json(['status' => false, 'message' => 'Unable to add the current item to your order, it\'s out of stock'], 400);
                    }
                    $purchItem->qty -= $item['qty'];
                    $purchItem->save();
                    // fire event to notify the frontend to update
                    // the stocks for the current item
                    if ($shop->hasDiscountFor($itemR)) {
                        if (sizeof($shop->discounts) < 2) {
                            $item['sale_price'] = $item['sale_price'] * ((100 - $shop->discounts->value) / 100);
                        } else {
                            foreach ($shop->discounts as $discount) {
                                $item['sale_price'] = $item['sale_price'] * ((100 - $discount->value) / 100);
                            }
                        }
                    } else {
                        $item['sale_cost'] = $purchasedItem[0]->selling_cost;
                    }
                    $total += $item['sale_cost'] * $item['qty'];
                }
                OrderItem::create($item);
            }
            $order = Order::create($request->all());
            $order->total = $total;
            // visit is not an object, neither is visitation

            $visit = Visitation::where(
                [
                    ['user_id', '=', $request->get('user_id')], 
                    ['shop_id', '=', $request->get('shop_id')]
                ])->first();
                var_dump($visit);
            $visit->ceil -= $order->total;
            $visitation->save();
            DB::commit();
            // 3. if all's good, then proceed to ...
            return response()->json(['status' => true, 'order' => new OrderResource($order)], 201);
        } catch (Exception $ex) {
            DB::rollBack();
            return response()->json(['success' => false, 'Could not commit your transaction ' . $ex->getMessage()], 500);
        }
    }
}
