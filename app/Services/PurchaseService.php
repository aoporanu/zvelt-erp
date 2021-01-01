<?php


namespace App\Services;

use Illuminate\Support\Facades\DB;
use App\Purchase;


class PurchaseService
{
    /**
     * @param array $array
     */
    public function create(array $array)
    {
        // insert purchase
//        dd($array);
        DB::beginTransaction();
        try {
            $purchase = Purchase::create([
                'purchase_id' => $array['purchase_id'],
                'for_invoice' => $array['for_invoice'],
                'supplier_id' => $array['supplier_id'],
                'value' => $array['value'],
                'total' => $array['total'],
                'discount' => $array['discount']
            ]);

            foreach ($array['item'] as $item) {
                $purchase->purchasedItems->attach($item);
            }

            DB::commit();
        } catch(Exception $ex) {
            DB::rollback();
            throw $ex;
        }

        // insert purchased items
    }
}
