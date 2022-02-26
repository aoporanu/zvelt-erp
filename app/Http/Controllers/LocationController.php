<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Http\Requests\LocationStoreRequest;
use App\Models\Location;
use Yajra\Datatables\Datatables;
use \DB;
class LocationController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
  public function index()
  {
    $pageTitle = 'Locations';
    if (request()->ajax()) {
      $model = Location::select(['id', 'name', 'type', 'warehouse_id']);
      return Datatables::of($model)
        ->addIndexColumn()
        ->addColumn('action', function ($row) {
          $btn = '<a href="javascript:void(0)" class="view btn btn-primary btn-sm">View</a>';
          return $btn;
        })
        ->rawColumns(['action'])->make(true);
    }

    return view('locations.index', compact('pageTitle'));
  }

  public function create()
  {
    $warehouses = DB::select('select id, name from warehouses');
    $pageTitle = 'Create location(s)';
    return view('locations.create', compact('pageTitle', 'warehouses'));
  }

  public function store(LocationStoreRequest $locationStoreRequest)
  {
    $location = $locationStoreRequest->validated();

    Location::create($location);
  }
}//end class
