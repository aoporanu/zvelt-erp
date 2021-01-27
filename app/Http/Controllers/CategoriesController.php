<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $categories = Category::get(['id', 'name']);

        if ($categories->count() < 1) {
            return response()->json(
                [
                    'success' => false,
                    'message' => 'Categories aren\'t present, you will not be able to save items.',
                ]
            );
        }

        return response()->json(['success' => true, 'categories' => $categories]);

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
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $category = Category::create(
            [
                'name'        => $request->get('name'),
                'description' => $request->get('description'),
            ]
        );

        if (!$category) {
            return response()->json(
                [
                    'success' => false,
                    'message' => 'Category creation failed',
                ],
                500
            );
        }

        return response()->json(
            [
                'success' => true,
                'message' => 'Category creation OK',
            ]
        );

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

    }//end update()


    /**
     * Remove the specified resource from storage.
     *
     * @param  integer $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

    }//end destroy()


}//end class
