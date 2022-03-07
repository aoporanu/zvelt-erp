<?php

/**
 * Asd
 * php version ^8.0
 *
 * @category ERP
 * @package  SapKiller
 * @author   Squiz Pty Ltd <products@squiz.net>
 * @license  http://opensource.org/licenses/gpl-license.php  GNU Public License
 * @link     http://zvelt-erp.com
 */

namespace App\Services;

use App\Models\Item;
use Exception;
use App\Models\Location;
use App\Models\Purchase;
use App\Models\Supplier;
use App\Models\Warehouse;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use App\Exceptions\UnavailableQtyOnLocation;

/**
 * PurchaseService class
 * php version ^8.0
 *
 * @category ERP
 * @package  SapKiller
 * @author   Adi Oporanu <aoporanu@gmail.com>
 * @license  http://opensource.org/licenses/gpl-license.php  GNU Public License
 * @link     http://zvelt-erp.com
 */
class PurchaseService
{


  /**
   * Create purchase model from validated
   * request array
   *
   * @param array $array validated array for creating the
   *                     purchase model
   *
   * @return void
   */
  public function create(array $array)
  {
    DB::beginTransaction();
    try {
      $purchase = (new Purchase)->create(
        [
          'purchase_id' => $array['purchase_id'],
          'for_invoice' => $array['for_invoice'],
          'supplier_id' => $array['supplier_id'],
          'value'       => $array['value'],
          'total'       => $array['total'],
          'discount'    => $array['discount'],
        ]
      );

      $itemsToInsert = [];

      foreach ($array['item'] as $item) {
        $itemsToInsert[] = [
          'purchase_id'     => $purchase->id,
          'item_id'         => $item['item_name'],
          'qty'             => $item['item_qty'],
          'lot'             => $item['lot'],
          'expiration_date' => Carbon::make(
            $item['expiration_date']
          ),
          'location_id'     => $item['location_id'],
          'warehouse_id'    => $item['warehouse_id'],
          'supplier_id'     => $array['supplier_id'],
          'upc'             => $item['upc'],
          'ean'             => $item['ean'],
          'purchase_cost'   => $item['purchase_price'],
          'selling_cost'    => $item['purchase_price'],
          'vat'             => $item['vat'],
          'created_at'      => Carbon::now(),
          'updated_at'      => Carbon::now(),
        ];
      }

      DB::table('purchased_items')->insert($itemsToInsert);
      DB::commit();
    } catch (Exception $ex) {
      DB::rollback();
      throw $ex;
    } //end try

  } //end create()
  public function addItems($validated)
  {
    if (DB::insert('insert into b_invoices(serial_no, qty, price, batch_id) values (?, ?, ?, ?)', [$validated['id'], $validated['qty'], $validated['price'], $validated['batch_id']])) {
      return true;
    }
    return false;
  }

  /**
   * View array for the PurchasesController@index method
   *
   * @return array
   */
  public function loadViewArray()
  {
    $suppliers  = (new Supplier)->get(['id', 'name']);
    $items      = Item::get(['id', 'name']);
    $warehouses = Warehouse::get(['id', 'name']);
    $locations  = Location::get(['id', 'name']);
    return [
      'suppliers'  => $suppliers,
      'items'      => $items,
      'warehouses' => $warehouses,
      'locations'  => $locations,
    ];
  } //end loadViewArray()


  /**
   * Loads the datatable json for PurchasesController@index method
   *
   * @return JsonResponse
   */
  public function loadIndex()
  {
    $model = \DB::table('purchases')->join('suppliers', 'purchases.supplier_id', '=', 'suppliers.id')->join(
      'purchased_items as pi',
      'purchases.id',
      '=',
      'pi.purchase_id',
      'left'
    )->join('items', 'items.id', '=', 'pi.item_id', 'left')->join('brands', 'items.brand_id', '=', 'brands.id', 'left')->get(
      [
        'purchases.id',
        'purchases.purchase_id',
        'purchases.discount',
        'purchases.created_at',
        'purchases.for_invoice',
        'suppliers.id as supplier_id',
        'suppliers.name as supplier_name',
        'purchases.value',
        'purchases.total',
        'purchase_cost',
        'selling_cost',
        'qty',
        'items.id as item_id',
        'items.name as item_name',
        'suppliers.name as supplier_name',
        'brands.name as brand_name',
      ]
    );
    return \datatables()->of($model)->addColumn(
      'action',
      function ($row) {
        $html  = '<a href="' . route('purchase.show', [$row->id]) . '" class="btn btn-xs btn-success">
                    <i class="fa fa-eye" aria-hidden="true"></i>
                </a>';
        $html .= '<a href="' . route('purchase.edit', [$row->id]) . '" class="btn btn-xs btn-warning">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </a>';
        $html .= '<a href="' . route('purchase.destroy', [$row->id]) . '" class="btn btn-xs btn-danger">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </a>';
        return $html;
      }
    )->addIndexColumn()->make(true);
  } //end loadIndex()


  /**
   * Loads the datatables json for the PurchasesController@stocks method
   *
   * @return JsonResponse
   */
  public function loadStocks()
  {
    $model = \DB::table('purchased_items')->join('items', 'items.id', '=', 'purchased_items.item_id')->join('suppliers', 'suppliers.id', '=', 'purchased_items.supplier_id')->get(
      [
        'purchased_items.*',
        'items.name as item_name',
        'suppliers.name as supplier_name',
      ]
    );
    return \datatables()->of($model)->addColumn(
      'action',
      function ($row) {
        $html = '<a href="' . route('purchase.transfer', [$row->id]) . '" class="btn btn-xs btn-success">
                         <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>';
        return $html;
      }
    )->addIndexColumn()->make(true);
  } //end loadStocks()


  /**
   * @param  $request
   * @return boolean
   */
  public function transfer($request): bool
  {
    try {
      // we need a quantity to transfer in the request array
      $exception = DB::transaction(function () use ($request) {
        // 1 . remove qty of items from from_location items
        $qty = DB::select('select qty from location_items where location_id=? and item_id=? and deleted_at=?', [$request['from_location'], $request['item_id'],  null]);
        if (!$qty || empty($qty)) {
          // throw new UnavailableQtyOnLocation('Unavailable qty for item on the selected location');
          DB::table('location_items')
            ->insert($request);
          $items = DB::table('location_items')
            ->get();
          dump(__METHOD__);
          dump($items);
        }
        // 2 . add qty of items to to_location items
      }, 5);
      if (is_null($exception)) {
        return true;
      } else {
        throw new Exception;
      }
    } catch (Exception $e) {
      info($e->getMessage());
      return false;
    }
    return true;
  } //end transfer()

  /**
   * Scans an invoice that came our way in order to be able to sell and transfer the products
   */
  public function scan(array $request): bool
  {
    // construct the items array over here and 
    // do one DB::insert instead of inserting
    // in the foreach loop
    $invoice = [];
    foreach ($request['items'] as $incoming) {
      $invoice[] = [
        'serial_no' => $request['serial_no'],
        'item_id' => $incoming['item_id'],
        'qty' => $incoming['qty'],
        'price' => $incoming['price'],
        'batch_id' => $incoming['batch_id'],
        'created_at' => now(),
        'updated_at' => now(),
        'created_by' => $request['created_by']
      ];
    }
    try {
      $exception = DB::transaction(function () use ($invoice) {
        // starting scanning, at this point we already have the validated request
        //
        DB::table('incoming_invoices')
          ->insert($invoice);
      }, 5);
      if (is_null($exception)) {
        return true;
      } else {
        throw new Exception();
      }
    } catch (Exception $ex) {
      info($ex->getMessage());
      return false;
    }
    return true;
  }

  public function returnCreate(array $request)
  {
    $items = [];
    foreach ($request['items'] as $item) {
      $items[] = [
        'bom_serial' => $request['bom_serial'],
        'item_id' => $item['item_id'],
        'qty' => $item['qty'],
        'price' => $item['price'],
        'location_id' => $item['location_id'],
        'created_at' => now(),
        'updated_at' => now()
      ];
    }
    try {
      $exception = DB::transaction(function () use ($request, $items) {
        foreach ($request['items'] as $item) {
          $locationItems = DB::table('location_items')
          ->where([
            ['location_id', $item['location_id']],
            ['item_id', $item['item_id']]
          ])
            ->count();
          info($locationItems);
          if ($locationItems === 0) {
            DB::table('location_items')
              ->insert($items);
            $items = DB::table('location_items')
            ->get();
            dump($items);
          }
        }
        // $locationItems = DB::table('location_items')
        //   ->where('location_id', $items[0]['location_id'])
        //   ->andWhere('item_id', current(array_filter($items), static function (array $item) {
        //     return $item['item_id'];
        //   })['item_id'])
        //   ->get();
        // if (!$locationItems || empty($locationItems)) {
        //   // insert items into db, even though we should never run into this 
        //   DB::table('location_items')
        //     ->insert($items);
        // }
        // foreach ($items as $item) {
        //   DB::table('location_items')
        //     ->where('location_id', $items[0]['location_id'])
        //     ->andWhere('item_id', current(array_filter($items), static function (array $item) {
        //       return $item['item_id'];
        //     })['item_id'])
        //     ->update('qty', DB::raw('qty + ?', [$item['qty']]));
        // }
      }, 5);
      if (is_null($exception)) {
        return true;
      } else {
        throw new Exception;
      }
    } catch (Exception $ex) {
      info($ex->getMessage());
      return false;
    }
    // if the number of items matches the number of items
    // on the return request, then the return order can be 
    // marked as scanned
    return true;
  }

  public function returnScan(array $request)
  {
    $items = [];
    foreach ($request['items'] as $item) {
      $items[] = [
        'bom_serial' => $request['bom_serial'],
        'item_id' => $item['item_id'],
        'qty' => $item['qty'],
        'price' => $item['price'],
        'location_id' => $request['location_id']
      ];
    }
    try {
      $exception = DB::transaction(function () use ($items) {
        $locationItems = DB::table('location_items')
          ->where('location_id', $items[0]['location_id'])
          ->andWhere('item_id', current(array_filter($items), static function (array $item) {
            return $item['item_id'];
          })['item_id'])
          ->get();
        if (!$locationItems || empty($locationItems)) {
          // insert items into db, even though we should never run into this 
          DB::table('location_items')
            ->insert($items);
        }
        foreach ($items as $item) {
          DB::table('location_items')
            ->where('location_id', $items[0]['location_id'])
            ->andWhere('item_id', current(array_filter($items), static function (array $item) {
              return $item['item_id'];
            })['item_id'])
            ->update('qty', DB::raw('qty + ?', [$item['qty']]));
        }
      }, 5);
      if (is_null($exception)) {
        return true;
      } else {
        throw new Exception;
      }
    } catch (Exception $ex) {
      info($ex->getMessage());
      return false;
    }
    // if the number of items matches the number of items
    // on the return request, then the return order can be 
    // marked as scanned
    return true;
  }
}//end class
