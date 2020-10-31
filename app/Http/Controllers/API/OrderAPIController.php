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
        // 1. get user+client invoices
        // check if the user has a right to store the order for the client
        // $route = Visitation::where([['shop_id', $request->shop_id], ['user_id', $request->user_id]])->first();
        // // dump($route);
        // if (!$route) {
        //     return response()->json(['success' => false, 'message' => 'Not able to create an order for this client']);
        // }
        // $invoices = Invoice::where('client_id', $request->client_id)
        //     ->where('agent_id', $request->agent_id)
        //     ->get();
        // if ($invoices->count() > 0 && Setting::blocksOnDue()) {
        //     $collection = $invoices->firstWhere('due_date', Carbon::now());
        //     // 2. check if the user has any invoice for this client, and the invoice's
        //     //      due_date field is less than or equal to the one set in the config table
        //     if ($collection->count() > 0) {

        //         //      * if true, automatically send an email to the powers-that-be informing them
        //         //          of the infringement.

        //     }

        //     return response()->json(['success' => false, 'message' => 'You exceed the number of allowed invoices for this client. An Email has been sent to your superiors. Let\'s just pray they will allow your order to be processed. It will not appear in the order list UNLESS it\'s allowed'], 500);
        // }
        // $invoices = Invoice::where('client_id', $request->client_id)
        //     ->get();
        // if ($invoices->count() > 0 && Setting::blocksOnDue()) {
        //     $collection = $invoices->firstWhere('due_date', Carbon::now());

        //     if ($collection->count() > 0) {
        //         //      * else if another user has an invoice that has a due_date which cannpt safely
        //         //          go through the powers-that-be configs, inform the user
        //     }
        // }

        // $ceil = Visitation::where([['shop_id', $request->get('shop_id')], ['user_id', $request->get('user_id')]])->get('ceil'); // we'll get the ceil from the routes table
        // $invoices = Invoice::where([['shop_id', $request->get('shop_id')], ['agent_id', $request->get('user_id')]])->get();

        // if (count($invoices) && $invoices->amount_left >= $ceil) {
        //     return response()->json(['success' => false, 'message' => 'The ceil has been overflown'], 500);
        // }
        DB::beginTransaction();
        try {
            $request->state = 'unprocessed';
            if (empty($request->get('items'))) {
                return response()->json(['success' => false, 'message' => 'The order doersn\'t have any items, it will be deleted', 500]);
            }
            $shop = Shop::find($request->get('shop_id'));
            foreach ($request->get('items') as $item) {
                $purchasedItem = DB::select('select id from item_purchase where item_id=? and location_id=? and warehouse_id=?', [$item['item_id'], $item['location_id'], $request->get('warehouse_id')]);
                if (!$purchasedItem) {
                    return response()->json(['success' => false, 'message' => 'There wasn\'t any purchase for this item', 'purchased_item' => $item]);
                } else {
                    $purchItem = PurchasedItems::find($purchasedItem[0]->id);
                    $purchItem->qty = 1;
                    if ($item['qty'] > $purchItem->qty && $purchItem !== 0) {
                        return response()->json(['status' => false, 'message' => 'Unable to add the current item to your order. The quantity on stock is less than what you\'re ordering'], 402);
                    }
                    if ($purchItem->qty === 0) {
                        return response()->json(['status' => false, 'message' => 'Unable to add the current item to your order, it\'s out of stock']);
                    }
                    $purchItem->qty -= $item['qty'];
                    $purchItem->save();
                    // fire event to notify the frontend to update
                    // the stocks for the current item
                    if ($shop->discounts->applicableTo($purchItem, $shop)) {
                        if (sizeof($shop->discounts) < 2) {
                            $item['sale_price'] = $item['sale_price'] * ((100 - $shop->discounts->value) / 100);
                        } else {
                            foreach ($shop->discounts as $discount) {
                                $item['sale_price'] = $item['sale_price'] * ((100 - $discount->value) / 100);
                            }
                        }
                    }
                }
                OrderItem::create($item);
            }
            DB::commit();
            // 3. if all's good, then proceed to ...
            return new OrderResource(Order::create($request->all())->orderItems()->create($request->get('items')));
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
