<?php

namespace App\Http\Controllers\API;

use App\Order;
use App\Invoice;
use App\Http\Resources\OrderCollection;
use App\Http\Resources\OrderResource;
use App\Http\Requests\OrderStoreRequest;
use App\Http\Requests\OrderUpdateRequest;
use App\Services\OrderService;
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
    private $orderService;

    /**
     * OrderAPIController constructor.
     * @param OrderService $orderService
     */
    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }

    public function index(): OrderCollection
    {
        return new OrderCollection(Order::paginate());
    }

    public function show(Order $order): OrderResource
    {
        return new OrderResource($order->load(['orderItems']));
    }

    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        return Order::storeOrder($request);
    }

    public function update(OrderUpdateRequest $request, Order $order): OrderResource
    {
        $order->update($request->all());

        return new OrderResource($order);
    }

    public function destroy(Request $request, Order $order): \Illuminate\Http\Response
    {
        $order->delete();

        return response()->noContent();
    }

    public function latest(): \Illuminate\Http\JsonResponse
    {
        return response()->json(['status' => true, 'order' => Order::latest()->first()]);
    }
}
