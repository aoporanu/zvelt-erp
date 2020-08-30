<?php

namespace App\Http\Controllers\API;

use App\Receipt;
use App\Http\Resources\ReceiptCollection;
use App\Http\Resources\ReceiptResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReceiptAPIController extends Controller
{
    public function index()
    {
        return new ReceiptCollection(Receipt::paginate());
    }
 
    public function show(Receipt $receipt)
    {
        return new ReceiptResource($receipt->load(['ledger']));
    }

    public function store(Request $request)
    {
        return new ReceiptResource(Receipt::create($request->all()));
    }

    public function update(Request $request, Receipt $receipt)
    {
        $receipt->update($request->all());

        return new ReceiptResource($receipt);
    }

    public function destroy(Request $request, Receipt $receipt)
    {
        $receipt->delete();

        return response()->noContent();
    }
}
