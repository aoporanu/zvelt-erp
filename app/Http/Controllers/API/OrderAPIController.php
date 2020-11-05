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
        return response()->json(['order' => new OrderResource($order)], 200);
    }
}
