<?php

namespace App;

use Dompdf\Dompdf;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;
use Exception;

/**
 * @method static paginate(int $int)
 * @method static findOrFail(int $id)
 * @method static select(string $string)
 * @method static insert(array $validated)
 * @method static create(array $all)
 */
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

    /**
     * @return BelongsToMany
     */
    public function items(): BelongsToMany
    {
        return $this->belongsToMany(Item::class)->withPivot('purchase_id', 'item_id', 'purchase_cost', 'selling_cost', 'lot', 'location_id', 'qty', 'warehouse_id');
    }

    /**
     * @return HasMany
     */
    public function purchasedItems(): HasMany
    {
        return $this->hasMany(PurchasedItems::class);
    }

    /**
     * @return BelongsTo
     */
    public function supplier(): BelongsTo
    {
        return $this->belongsTo(Supplier::class, 'supplier_id', 'id');
    }

    /**
     * @param Request $request
     *
     * @return bool
     */
    public static function storeOrder(Request $request): bool
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

    /**
     * @param Purchase $purchase
     * @return JsonResponse
     */
    public function generateNir(Purchase $purchase): JsonResponse
    {
        if ($purchase->printed) {
            return response()->json(['success' => false, 'message' => 'This NIR has already been generated']);
        }
        try {
            $purchase->load('purchasedItems');
            $pdf = PDF::loadView('pdf.invoice', compact('purchase'))->setPaper('a4', 'landscape');
            if (!file_exists('nir')) {
                mkdir('nir');
            }
            $purchase->printed = true;
            $purchase->save();
            $pdf->save('nir/nir_' . $purchase->id . '.pdf');
            return response()->json(['success' => true]);
        } catch (Exception $ex) {
            return response()->json(['success' => false, 'message' => 'There was an error ' . $ex->getMessage()], 400);
        }

    }

    function transfer(Warehouse $where, Location $location)
    {
        // if ()
    }
}
