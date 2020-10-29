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
            $total = 0;
            $purchase = Purchase::create($request->all());
            foreach ($request->get('purchase_items') as $item) {
                $batch = Batch::firstOrNew($item['lot']);
                if ($purchase->discount != 0) {
                    $item['selling_cost'] = $item['selling_cost'] * ((100 - $purchase->discount) / 100);
                    $item['purchase_cost'] = $item['purchase_cost'] * ((100 - $purchase->discount) / 100);
                }
                $total += (float)$item['selling_cost'] * $item['qty'];
                // compute total from the PurchasedItems total + purchased_item quantity
                $purchasedItem = new PurchasedItems(
                    [
                        'purchase_id' => $item['purchase_id'],
                        'item_id' => $item['item_id'],
                        'purchase_cost' => $item['purchase_cost'],
                        'selling_cost' => $item['selling_cost'],
                        'qty' => $item['qty'],
                        'total' => $item['selling_cost'] * $item['qty'],
                        'lot' => $batch->name,
                        'location_id' => $item['location_id'],
                        'warehouse_id' => $item['warehouse_id']
                    ]
                );
                $purchase->purchasedItems()->save($purchasedItem);
            }
            $purchase->total = $total;
            $purchase->save();
            DB::commit();
            return response()->json([
                'success' => true,
                'message' => 'Purchase successfully stored',
                'purchase' => [
                    'object' => new PurchaseResource($purchase)
                ]
            ]);
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
}
