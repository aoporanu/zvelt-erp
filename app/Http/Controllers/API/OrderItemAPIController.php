<?php

namespace App\Http\Controllers\API;

use App\OrderItem;
use App\Http\Resources\OrderItemCollection;
use App\Http\Resources\OrderItemResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderItemAPIController extends Controller
{
    public function index()
    {
        return new OrderItemCollection(OrderItem::paginate());
    }
 
    public function show(OrderItem $orderItem)
    {
        return new OrderItemResource($orderItem->load(['order']));
    }

    public function store(Request $request)
    {
        return new OrderItemResource(OrderItem::create($request->all()));
    }

    public function update(Request $request, OrderItem $orderItem)
    {
        $orderItem->update($request->all());

        return new OrderItemResource($orderItem);
    }

    public function destroy(Request $request, OrderItem $orderItem)
    {
        $orderItem->delete();

        return response()->noContent();
    }
}
