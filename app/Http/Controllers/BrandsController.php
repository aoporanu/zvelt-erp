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
            return response()->json(['success' => false, 'message' => 'There are no brands. You won\'t be able to save items']);
        }

        return response()->json(['success' => true, 'brands' => $brands], 200);

    }//end index()


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }//end create()


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $brand = Brand::create(
            [
                'name'    => $request->get('name'),
                'address' => $request->get('address'),
                'cui'     => $request->get('cui'),
            ]
        );
        if (!$brand) {
            return response()->json(['success' => false, 'message' => 'Could not save brand']);
        }

        return response()->json(['success' => true, 'message' => 'Brand saved succesfully']);

    }//end store()


    /**
     * Display the specified resource.
     *
     * @param  integer $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }//end show()


    /**
     * Show the form for editing the specified resource.
     *
     * @param  integer $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

    }//end edit()


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  integer                  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $brand = Brand::find($id);

        $brand->update();

    }//end update()


    /**
     * Remove the specified resource from storage.
     *
     * @param  integer $id
     * @return JsonResponse
     */
    public function destroy($id)
    {
        if (Brand::destroy($id)) {
            return response()->json(['success' => true, 'message' => 'Brand was deleted']);
        }

        return response()->json(['success' => false, 'message' => 'Could not delete brand']);

    }//end destroy()


}//end class
