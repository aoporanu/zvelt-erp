<?php

namespace App\Http\Controllers\API;

use App\Order;
use App\Http\Resources\OrderCollection;
use App\Http\Resources\OrderResource;
use App\Http\Requests\OrderStoreRequest;
use App\Http\Requests\OrderUpdateRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Barryvdh\DomPDF\Facade as PDF;


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

    private function checkIfOrderIsProcessable(Order $order) 
    {
        if ($order->state !== 'processable') {
            return response()
                ->json(['success' => false, 'message' => 'The order is not processable'], 400);
        }
        
        return true;
    }

    public function process(Order $order)
    {
        if (!$this->checkIfOrderIsProcessable($order)) {
            return $this->checkIfOrderIsProcessable($order);
        }

        $order->load('orderItems');
        $pdf = PDF::loadView('pdf.preorder', compact('order'))
            ->setPaper('a4', 'portrait');
        if (!file_exists('orders')) {
            mkdir('orders');
        }
        $pdf->save('orders/order_' . $order->id . '.pdf');
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
        if ($this->checkIfOrderIsProcessable($order)) {
            return $this->checkIfOrderIsProcessable($order);
        }
        $order->state = 'invoiceable';
        $order->save();

        return response()
            ->json(['success' => true, 'message' => 'The order is invoiceable now', 'order' => new OrderResource($order)]);
    }
}
