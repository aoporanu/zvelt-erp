<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\PurchaseStoreRequest;
use App\Purchase;
use App\Http\Resources\PurchaseCollection;
use App\Http\Resources\PurchaseResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Exception;
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
        try {
            $purchase = Purchase::storeOrder($request);
            DB::commit();
            return response()->json([
                'success' => true,
                'message' => 'Purchase successfully stored',
                'purchase' => [
                    'object' => new PurchaseResource($purchase)
                ]
                ], 200);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json(['success' => false, 'message' => 'could not commit the purchase ' . $e->getMessage()], 500);
        }
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

    public function generateNir(Purchase $purchase)
    {
        if (!$purchase) {
            return response()->json(['success' => false, 'message' => 'No purchase found for your query'], 404);
        }

        $purchase->generateNir($purchase);

        return response()->json(['success' => true, 'message' => 'The NIR for this purhcase has been generated'], 200);
    }
}
