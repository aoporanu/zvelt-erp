<?php

namespace App\Http\Controllers\API;

use App\Order;
use App\Http\Resources\OrderCollection;
use App\Http\Resources\OrderResource;
use App\Http\Requests\OrderStoreRequest;
use App\Http\Requests\OrderUpdateRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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
        return Order::storeOrder($request);
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

    public function process(Order $order)
    {
        if ($order->state !== 'processable') {
            return response()
                ->json(['success' => false, 'message' => 'The order is not processable'], 400);
        }
        return response()->json(['order' => new OrderResource($order), 'extra' => '/api/orders/save/' . $order->id], 200);
    }

    /**
     * This method should be used only when the order has been
     * processed by the warehouse.
     * 
     * @author Adi Oporanu
     */
    public function save(Order $order)
    {
        if ($order->state !== 'processable') {
            return response()
                ->json(['success' => false, 'message' => 'The order is not processable'], 400);
        }

        $order->state = 'invoiceable';
        $order->save();

        return response()
            ->json(['success' => true, 'message' => 'The order is invoiceable now', 'order' => new OrderResource($order)]);
    }
}
