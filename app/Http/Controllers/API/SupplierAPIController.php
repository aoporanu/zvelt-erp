<?php

namespace App\Http\Controllers\API;

use App\Supplier;
use App\Http\Resources\SupplierCollection;
use App\Http\Resources\SupplierResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SupplierAPIController extends Controller
{
    public function index()
    {
        return new SupplierCollection(Supplier::paginate());
    }

    public function show(Supplier $supplier)
    {
        return new SupplierResource($supplier->load([]));
    }

    public function store(Request $request)
    {
        return new SupplierResource(Supplier::create($request->all()));
    }

    public function update(Request $request, Supplier $supplier)
    {
        $supplier->update($request->all());

        return new SupplierResource($supplier);
    }

    public function destroy(Request $request, Supplier $supplier)
    {
        $supplier->delete();

        return response()->noContent();
    }
}
