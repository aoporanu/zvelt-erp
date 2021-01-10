<?php


namespace App\Services;

use App\Item;
use Exception;
use App\Location;
use App\Purchase;
use App\Supplier;
use App\Warehouse;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;


class PurchaseService
{
    /**
     * @param array $array
     */
    public function create(array $array)
    {
        DB::beginTransaction();
        try {
            $purchase = (new Purchase)->create([
                'purchase_id'   => $array['purchase_id'],
                'for_invoice'   => $array['for_invoice'],
                'supplier_id'   => $array['supplier_id'],
                'value'         => $array['value'],
                'total'         => $array['total'],
                'discount'      => $array['discount']
            ]);

            foreach ($array['item'] as $item) {
                DB::table('purchased_items')
                ->insert(
                    [
                        'purchase_id'       => $array['purchase_id'],
                        'item_id'           => $item['item_name'],
                        'qty'               => $item['item_qty'],
                        'lot'               => $item['lot'],
                        'expiration_date'   => Carbon::make($item['expiration_date']),
                        'location_id'       => $item['location_id'],
                        'warehouse_id'      => $item['warehouse_id'],
                        'supplier_id'       => $array['supplier_id'],
                        'upc'               => $item['upc'],
                        'ean'               => $item['ean'],
                        'purchase_cost'     => $item['purchase_price'],
                        'selling_cost'      => $item['purchase_price'],
                        'vat'               => 9,
                        'created_at'        => Carbon::now(),
                        'updated_at'        => Carbon::now()
                    ]
                );
            }

            DB::commit();
        } catch(Exception $ex) {
            DB::rollback();
            dd($ex);
            throw $ex;
        }

        // insert purchased items
    }

    public function loadViewArray()
    {
        $suppliers = (new Supplier)->get(['id', 'name']);
        $items = Item::get(['id', 'name']);
        $warehouses = Warehouse::get(['id', 'name']);
        $locations = Location::get(['id', 'name']);
        return ['suppliers' => $suppliers, 'items' => $items, 'warehouses' => $warehouses, 'locations' => $locations];
    }

    public function loadIndex()
    {
        $model = \DB::table('purchases')
            ->join('suppliers', 'purchases.supplier_id', '=', 'suppliers.id')
            ->join('purchased_items as pi', 'purchases.id', '=', 'pi.purchase_id', 'left')
            ->join('items', 'items.id', '=', 'pi.item_id', 'left')
            ->join('brands', 'items.brand_id', '=', 'brands.id', 'left')
            ->get(['purchases.id', 'purchases.purchase_id', 'purchases.discount', 'purchases.for_invoice', 'suppliers.id', 'suppliers.name', 'purchases.value', 'purchases.total', 'purchase_cost', 'selling_cost', 'qty', 'items.id as item_id', 'items.name as item_name', 'suppliers.name as supplier_name', 'brands.name as brand_name']);
        return \datatables()->of($model)
            ->addColumn('action', function($row) {
                $html = '<a href="' . route('purchase.show', [$row->id]) . '" class="btn btn-xs btn-success"><i class="fa fa-eye" aria-hidden="true"></i>
                </a>';
                $html .= '<a href="' . route('purchase.edit', [$row->id]) . '" class="btn btn-xs btn-warning"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </a>';
                $html .= '<a href="' . route('purchase.destroy', [$row->id]) . '" class="btn btn-xs btn-danger"><i class="fa fa-times" aria-hidden="true"></i>
                </a>';
                return $html;
            })
            ->addIndexColumn()
            ->make(true);
    }
}
