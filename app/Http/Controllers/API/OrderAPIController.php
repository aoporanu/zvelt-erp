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
