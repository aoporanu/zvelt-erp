<?php

namespace App\Http\Controllers;

use App\Models\Warehouse;
use App\Http\Requests\WarehouseStoreRequest;
use App\Http\Requests\WarehouseUpdateRequest;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Datatables;
use Brian2694\Toastr\Facades\Toastr;

class WarehouseController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    public function __construct()
    {

    }//end __construct()


    public function index()
    {
        $pageTitle = 'Warehouses';
        if (request()->ajax()) {
            $model = Warehouse::select('*');
            return Datatables::of($model)->addIndexColumn()->addColumn(
                'action',
                function ($row) {
                    $btn = '<a href="javascript:void(0)" class="edit btn btn-primary btn-sm">View</a>';

                    return $btn;
                }
            )->rawColumns(['action'])->make(true);
        }

        return view('warehouses.index', compact('pageTitle'));

    }//end index()


    public function show(Warehouse $warehouse)
    {
        return view('warehouses.show', compact('warehouse'));

    }//end show()


    public function edit(Warehouse $warehouse)
    {
      $pageTitle = __('Edit warehouse');
        return view('warehouses.edit', compact('warehouse'));

    }//end edit()


    public function update(WarehouseUpdateRequest $request, Warehouse $warehouse)
    {
      $warehouseValidated = $request->validated();
      if ($warehouse->update($warehouseValidated)) {
        Toastr::success(__('warehouses.updated.success'), 'info', ['positionClass' => 'toast-top-center']);
        return redirect()->route('warehouses.index');
      }
      Toastr::error(__('warehouses.updated.failed'), 'info', ['positionClass' => 'toast-top-center']);
      return redirect()->route('warehouses.index');
    }//end update()


    public function create()
    {
      $pageTitle = 'Create warehouse(s)';
      return view('warehouses.create', compact('pageTitle'));
    }//end create()


    public function store(WarehouseStoreRequest $warehouseStoreRequest)
    {
      $warehouse = $warehouseStoreRequest->validated();
      $warehouse['created_at'] = now();
      $warehouse['updated_at'] = now();
      if (Warehouse::create($warehouse)) {
        Toastr::success(__('warehouses.store.success'), 'info');
        return redirect()->route('warehouse.index');
      }
      Toastr::error(__('warehouses.store.error'), 'info');
      return redirect()->route('warehouse.index');
    }//end store()


    public function delete(Warehouse $warehouse)
    {
      if ($warehouse->delete()) {
        // Toastr::success('The warehouse has been deleted', 'info');
        return redirect()->route('warehouse.index');
      }
      // Toastr::error('Could not delete warehouse', 'info');
      return redirect()->back('warehouse.index');
    }//end delete()


}//end class
