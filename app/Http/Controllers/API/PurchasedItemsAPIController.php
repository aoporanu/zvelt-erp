<?php

namespace App\Http\Controllers\API;

use App\PurchasedItems;
use App\Http\Resources\PurchasedItemsCollection;
use App\Http\Resources\PurchasedItemsResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PurchasedItemsAPIController extends Controller
{
    public function index()
    {
        return new PurchasedItemsCollection(PurchasedItems::paginate());
    }
 
    public function show(PurchasedItems $purchasedItems)
    {
        return new PurchasedItemsResource($purchasedItems->load([]));
    }

    public function store(Request $request)
    {
        return new PurchasedItemsResource(PurchasedItems::create($request->all()));
    }

    public function update(Request $request, PurchasedItems $purchasedItems)
    {
        $purchasedItems->update($request->all());

        return new PurchasedItemsResource($purchasedItems);
    }

    public function destroy(Request $request, PurchasedItems $purchasedItems)
    {
        $purchasedItems->delete();

        return response()->noContent();
    }
}
