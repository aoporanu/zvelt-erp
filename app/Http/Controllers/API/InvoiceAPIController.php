<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Invoice;
use App\Order;
use App\OrderItem;
use App\Http\Requests\InvoiceStoreRequest;
use App\Http\Requests\InvoiceUpdateRequest;
use App\Http\Resources\InvoiceCollection;
use App\Http\Resources\InvoiceResource;
use Illuminate\Http\Request;

class InvoiceAPIController extends Controller
{
    public function index()
    {
        return new InvoiceCollection(Invoice::paginate());
    }

    public function show(Invoice $invoice)
    {
        return new InvoiceResource($invoice->load(['invoiceItems', 'invoiceClient']));
    }

    public function store(InvoiceStoreRequest $request)
    {
        // mefinks this should go inside the InvoiceStoreRequest
        $order = Order::where('id', $request->order_id);
        switch ($order->status) {
            case 'processed':
                return response()->json(['success' => false, 'message' => 'The order has already been processed']);
                break;
            case 'rejected':
                return response()->json(['success' => false, 'message' => 'The order has been rejected by someone at the office']);
                break;
            case 'cancelled':
                return response()->json(['success' => false, 'message' => 'The order has been cancelled by the client']);
                break;
        }
        return new InvoiceResource(Invoice::create($request->all()));
    }

    public function update(InvoiceUpdateRequest $request, Invoice $invoice)
    {
        $invoice->update($request->all());

        return new InvoiceResource($invoice);
    }

    public function destroy(Request $request, Invoice $invoice)
    {
        $invoice->delete();

        return response()->noContent();
    }
}
