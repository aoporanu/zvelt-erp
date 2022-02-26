<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Http\Requests\LocationStoreRequest;
use App\Models\Location;
use Yajra\Datatables\Datatables;
use App\Http\Requests\LocationUpdateRequest;
use \DB;

class LocationController extends BaseController
{
  use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
  public function index()
  {
    $pageTitle = 'Locations';
    if (request()->ajax()) {
      $model = Location::with('warehouse')->select(['id', 'name', 'type', 'warehouse_id']);
      return Datatables::of($model)
        ->addIndexColumn()
        ->addColumn('action', function ($row) {
          $btn = '<a href="javascript:void(0)" class="view btn btn-primary btn-sm">View</a>';
          $btn .= '<a href="' . route('locations.edit', $row->id) . '" class="edit btn btn-sm btn-warning">Edit</a>';
          $btn .= '<form method="post" action="' . route('locations.destroy', $row->id) . '">' . method_field('delete') . '<button class="btn btn-sm btn-danger">Delete</button></form>';
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

  public function edit(Location $location)
  {
    $pageTitle = __('locations.update.title');
    return view('locations.create', compact('location', 'pageTitle'));
  }

  public function update(Location $location, LocationUpdateRequest $locationUpdateRequest)
  {
    $location->update($locationUpdateRequest->validated());
  }
}//end class
