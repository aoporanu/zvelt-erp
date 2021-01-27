<?php

namespace App\Http\Controllers\API;

use App\Receipt;
use App\Http\Resources\ReceiptCollection;
use App\Http\Resources\ReceiptResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ReceiptStoreRequest;

class ReceiptAPIController extends Controller
{


    public function index()
    {
        return new ReceiptCollection(Receipt::paginate());

    }//end index()


    public function show(Receipt $receipt)
    {
        return new ReceiptResource($receipt->load(['ledger']));

    }//end show()


    public function store(ReceiptStoreRequest $request)
    {
        return new ReceiptResource(Receipt::create($request->all()));

    }//end store()


    public function update(Request $request, Receipt $receipt)
    {
        $receipt->update($request->all());

        return new ReceiptResource($receipt);

    }//end update()


    public function destroy(Request $request, Receipt $receipt)
    {
        $receipt->delete();

        return response()->noContent();

    }//end destroy()


}//end class
