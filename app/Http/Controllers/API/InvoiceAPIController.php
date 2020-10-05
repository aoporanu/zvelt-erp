<?php

namespace App\Http\Controllers\API;

use App\Invoice;
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
        return new InvoiceResource($invoice->load(['invoiceItems','invoiceClient']));
    }

    public function store(InvoiceStoreRequest $request)
    {
        return new InvoiceResource(Invoice::create($request->all()));
    }

    public function update(InvoiceUpdateRequest $request)
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
