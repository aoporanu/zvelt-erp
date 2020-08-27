<?php

namespace App\Http\Controllers\API;

use App\Warehouse;
use App\Http\Resources\WarehouseCollection;
use App\Http\Resources\WarehouseResource;
use App\Http\Requests\WarehouseStoreRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class WarehouseAPIController extends Controller
{
    public function index()
    {
        return new WarehouseCollection(Warehouse::paginate());
    }
 
    public function show(Warehouse $warehouse)
    {
        return new WarehouseResource($warehouse->load(['locations']));
    }

    public function store(WarehouseStoreRequest $request)
    {
        return new WarehouseResource(Warehouse::create($request->all()));
    }

    public function update(Request $request, Warehouse $warehouse)
    {
        $warehouse->update($request->all());

        return new WarehouseResource($warehouse);
    }

    public function destroy(Request $request, Warehouse $warehouse)
    {
        $warehouse->delete();

        return response()->noContent();
    }
}
