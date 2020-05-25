<?php

namespace App\Http\Controllers;

use App\Brand;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BrandsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $brands = Brand::get(['id', 'name']);

        if ($brands->count() < 1) {
            return response()->json(['success'=>false, 'message'=>'There are no brands. You won\'t be able to save items']);
        }

        return response()->json(['success' => true, 'brands' => $brands], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $brand = Brand::create([
            'name' => $request->get('name'),
            'address' => $request->get('address'),
            'cui' => $request->get('cui')
        ]);
        if (!$brand) {
            return response()->json(['success' => false, 'message' => 'Could not save brand']);
        }

        return response()->json(['success' => true, 'message' => 'Brand saved succesfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $brand = Brand::find($id);

        $brand->update();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function destroy($id)
    {
        if (Brand::destroy($id)) {
            return response()->json(['success' => true, 'message' => 'Brand was deleted']);
        }
        return response()->json(['success' => false, 'message' => 'Could not delete brand']);
    }
}
