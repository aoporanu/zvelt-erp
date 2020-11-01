<?php

namespace App;

use Dompdf\Dompdf;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;

class Purchase extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'purchase_id', 'value', 'total', 'discount', 'for_invoice'
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['created_at', 'updated_at'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        //
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        //
    ];

    public function items()
    {
        return $this->belongsToMany(Item::class)->withPivot('purchase_id', 'item_id', 'purchase_cost', 'selling_cost', 'lot', 'location_id', 'qty', 'warehouse_id');
    }

    public function purchasedItems()
    {
        return $this->hasMany(PurchasedItems::class);
    }

    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }

    /**
     * @param $request object
     * 
     * @return bool
     */
    public static function storeOrder(Request $request)
    {
        $total = 0;
        $purchase = Purchase::create($request->all());
        foreach ($request->get('purchase_items') as $item) {
            $batch = Batch::firstOrNew($item['lot']);
            $batch->qty = $item['qty'];
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
            $inventory = PurchasedItems::where('item_id', $item['item_id'])->first();
            if ($inventory) {
                // get original qty
                $batch->from_qty = $inventory->qty;
                $inventory->qty += $item['qty'];
                // set last inserted qty
                $batch->to_qty = $inventory->qty;
                $inventory->save();
                $batch->save();
            } else {
                $purchase->purchasedItems()->save($purchasedItem);
            }
        }
        $purchase->total = $total;
        if ($purchase->save()) {
            // (new self)::generateNir();
            return true;
        }
        return false;
    }

    public function generateNir(Purchase $purchase)
    {
        $purchase->load('purchasedItems');
        // dump($purchase);
        $pdf = PDF::loadView('pdf.invoice', compact('purchase'))->setPaper('a4', 'landscape');
        // $pdf->loadHTML($htmlString)->setPaper('a4', 'landscape');
        if (!file_exists('nir')) {
            mkdir('nir');
        }
        return $pdf->save('nir/nir_' . $purchase->id . '.pdf');
    }
}
