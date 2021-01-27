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

    }//end index()


    public function show(OrderItem $orderItem)
    {
        return new OrderItemResource($orderItem->load(['order']));

    }//end show()


    public function store(Request $request)
    {
        return new OrderItemResource(OrderItem::create($request->all()));

    }//end store()


    public function update(Request $request, OrderItem $orderItem)
    {
        $orderItem->update($request->all());

        return new OrderItemResource($orderItem);

    }//end update()


    public function destroy(Request $request, OrderItem $orderItem)
    {
        $orderItem->delete();

        return response()->noContent();

    }//end destroy()


}//end class
