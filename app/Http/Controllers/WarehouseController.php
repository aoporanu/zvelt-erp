<?php

namespace App\Http\Controllers;

use App\Warehouse;
use App\Http\Requests\WarehouseStoreRequest;
use App\Http\Requests\WarehouseUpdateRequest;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Datatables;

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
        return view('warehouses.edit', compact('warehouse'));

    }//end edit()


    public function update(WarehouseUpdateRequest $request, Warehouse $warehouse)
    {

    }//end update()


    public function create()
    {
        return view('warehouses.create');

    }//end create()


    public function store(WarehouseStoreRequest $request)
    {
        // code...

    }//end store()


    public function delete(Warehouse $warehouse)
    {
        // code...

    }//end delete()


}//end class
