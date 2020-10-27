<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\PurchaseStoreRequest;
use App\Purchase;
use App\Http\Resources\PurchaseCollection;
use App\Http\Resources\PurchaseResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\PurchasedItems;
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
        // DB::beginTransaction();
        $purchase = Purchase::create($request->all());
        if ($purchase) {
            $total = 0;
            foreach ($request->get('purchase_items') as $item) {
                if ($purchase->discount != 0) {
                    $item['selling_cost'] = $item['selling_cost'] * ((100 - $purchase->discount) / 100);
                    $item['purchase_cost'] = $item['purchase_cost'] * ((100 - $purchase->discount) / 100);
                    
                }
                $total += (double)$item['selling_cost'] * $item['qty'];
                $purchasedItems[] = $item;
            }
            $purchase->total = $total;
            $purchase->save();
            $purchase->purchasedItems()->create($purchasedItems);
        } else {
            return response()->json(['success' => false, 'message' => 'Could not commit the purchase']);
        }
        return response()->json([
            'success' => true, 
            'message' => 'Purchase successfully stored', 
            'purchase' => [
                 'object' => new PurchaseResource($purchase)
            ]
        ]);
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
