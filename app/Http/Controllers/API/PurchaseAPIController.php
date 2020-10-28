<?php

namespace App\Http\Controllers\API;

use App\Batch;
use App\Http\Requests\PurchaseStoreRequest;
use App\Purchase;
use App\Http\Resources\PurchaseCollection;
use App\Http\Resources\PurchaseResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\PurchasedItems;

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
            $batch = '';
            foreach ($request->get('purchase_items') as $item) {
                dd($item);
                if ($purchase->discount != 0) {
                    $item['selling_cost'] = $item['selling_cost'] * ((100 - $purchase->discount) / 100);
                    $item['purchase_cost'] = $item['purchase_cost'] * ((100 - $purchase->discount) / 100);
                }
                $total += (double)$item['selling_cost'] * $item['qty'];
                $purchasedItem = new PurchasedItems(
                    [
                        'purchase_id' => $item['purchase_id'],
                        'item_id' => $item['item_id'],
                        'value' => $item['value'],
                        'location' => $item['location'],
                        'total' => $item['total'],
                        'vat' => $item['vat'],
                        'type_id' => $item['type_id'],
                    ]);
                $purchase->purchasedItems()->save($purchasedItem);
                $purchase->purchasedItems->batch->create($item['lot']);
            }
            $purchase->total = $total;
            $purchase->save();
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
