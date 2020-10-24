<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\PurchaseStoreRequest;
use App\Purchase;
use App\Http\Resources\PurchaseCollection;
use App\Http\Resources\PurchaseResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class PurchaseAPIController extends Controller
{
    public function index()
    {
        return new PurchaseCollection(Purchase::paginate(10));
    }

    public function show(Purchase $purchase)
    {
        return new PurchaseResource($purchase);
    }

    public function store(PurchaseStoreRequest $request)
    {
        DB::beginTransaction();
        Purchase::create($request->all());
        if (!DB::commit()) {
            DB::rollBack();
            return new PurchaseResource(Purchase::create($request->all()));
        }

        return response()->json(['success' => false, 'message' => 'Could not commit the purchase']);
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
