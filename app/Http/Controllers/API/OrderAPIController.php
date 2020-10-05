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
use Illuminate\Support\Carbon;

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

    public function store(OrderStoreRequest $request)
    {
        // 1. get user+client invoices
        $invoices = Invoice::where('client_id', $request->client_id)
            ->where('agent_id', $request->agent_id)
            ->get();
        if ($invoices->count() > 0) {
            $collection = $invoices->firstWhere('due_date', Carbon::now());
            // 2. check if the user has any invoice for this client, and the invoice's
            //      due_date field is less than or equal to the one set in the config table
            if ($collection->count() > 0) {
                
                //      * if true, automatically send an email to the powers-that-be informing them
                //          of the infringement.

            }

            return response()->json(['success' => false, 'message' => 'You exceed the number of allowed invoices for this client. An Email has been sent to your superiors. Let\'s just pray they will allow your order to be processed. It will not appear in the order list UNLESS it\'s allowed']);
        }
        $invoices = Invoice::where('client_id', $request->client_id)
            ->get();
        if ($invoices->count() > 0) {
            $collection = $invoices->firstWhere('due_date', Carbon::now());

            if ($collection->count() > 0) {
                //      * else if another user has an invoice that has a due_date which cannpt safely
                //          go through the powers-that-be configs, inform the user
            }
        }
        
        // 3. if all's good, then proceed to ...
        return new OrderResource(Order::create($request->all()));
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
}