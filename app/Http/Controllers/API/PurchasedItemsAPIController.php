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

    }//end index()


    public function show(PurchasedItems $purchasedItems)
    {
        return new PurchasedItemsResource($purchasedItems->load([]));

    }//end show()


    public function store(Request $request)
    {
        return new PurchasedItemsResource(PurchasedItems::create($request->all()));

    }//end store()


    public function update(Request $request, PurchasedItems $purchasedItems)
    {
        $purchasedItems->update($request->all());

        return new PurchasedItemsResource($purchasedItems);

    }//end update()


    public function destroy(Request $request, PurchasedItems $purchasedItems)
    {
        $purchasedItems->delete();

        return response()->noContent();

    }//end destroy()


}//end class
