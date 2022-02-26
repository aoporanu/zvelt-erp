<?php

namespace App\Services;

use App\Models\Item;
use Illuminate\Support\Facades\DB;
use Yajra\Datatables\Datatables;

class ItemService
{


    public function index()
    {
        $model = Item::with('category', 'brand', 'purchases')->get();

        return Datatables::of($model)->addIndexColumn()->addColumn(
            'action',
            function ($row) {
                $btn = '<a href="javascript:void(0)" class="edit btn btn-primary btn-sm">View</a>';

                return $btn;
            }
        )->rawColumns(['action'])->make(true);

    }//end index()


}//end class
