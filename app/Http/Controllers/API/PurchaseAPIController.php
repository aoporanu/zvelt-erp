<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\PurchaseStoreRequest;
use App\Purchase;
use App\Http\Resources\PurchaseCollection;
use App\Http\Resources\PurchaseResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PurchaseAPIController extends Controller
{
    public function index()
    {
        return new PurchaseCollection(Purchase::paginate());
    }
 
    public function show(Purchase $purchase)
    {
        return new PurchaseResource($purchase->load([]));
    }

    public function store(PurchaseStoreRequest $request)
    {
        return new PurchaseResource(Purchase::create($request->all()));
    }

    public function update(Request $request, Purchase $purchase)
    {
        $purchase->update($request->all());

        return new PurchaseResource($purchase);
    }

    public function destroy(Request $request, Purchase $purchase)
    {
        $purchase->delete();

        return response()->noContent();
    }
}
