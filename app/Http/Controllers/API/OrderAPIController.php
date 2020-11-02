<?php

namespace App\Http\Controllers\API;

use App\Order;
use App\Invoice;
use App\Http\Resources\OrderCollection;
use App\Http\Resources\OrderResource;
use App\Http\Requests\OrderStoreRequest;
use App\Http\Requests\OrderUpdateRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Item;
use App\OrderItem;
use App\PurchasedItems;
use App\Setting;
use App\Shop;
use App\Visitation;
use Exception;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class OrderAPIController extends Controller
{
    public function index()
    {
        return new OrderCollection(Order::paginate());
    }

    public function show(Order $order)
    {
        return new OrderResource($order->load(['orderItems']));
    }

    public function store(Request $request)
    {
        // dump($request->all());
        DB::beginTransaction();
        try {
            // $request->state = 'unprocessed';
            if (empty($request->get('items'))) {
                return response()->json(['success' => false, 'message' => 'The order doersn\'t have any items, it will be deleted', 500]);
            }
            $shop = Shop::find($request->get('shop_id'));
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
                }
                OrderItem::create($item);
                // dump($order);
            }
            $order = Order::create($request->all());
            DB::commit();
            // 3. if all's good, then proceed to ...
            return response()->json(['status' => true, 'order' => new OrderResource($order)], 201);
        } catch (Exception $ex) {
            DB::rollBack();
            return response()->json(['success' => false, 'Could not commit your transaction ' . $ex->getMessage()], 500);
        }
    }

    public function update(OrderUpdateRequest $request, Order $order)
    {
        $order->update($request->all());

        return new OrderResource($order);
    }

    public function destroy(Request $request, Order $order)
    {
        $order->delete();

        return response()->noContent();
    }

    public function latest()
    {
        return response()->json(['status' => true, 'order' => Order::latest()->first()]);
    }
}
