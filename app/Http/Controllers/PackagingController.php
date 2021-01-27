<?php

namespace App\Http\Controllers;

use App\Packaging;
use Illuminate\Http\Request;

class PackagingController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $packagings = Packaging::get(['id', 'name']);

        if ($packagings->count() < 1) {
            return response()->json(['success' => false, 'message' => 'Packagings are missing']);
        }

        return response()->json(['success' => true, 'message' => 'Loading your packagings', 'packagings' => $packagings]);

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
        $packaging = Packaging::create(
            [
                'name' => $request->get('name'),
            ]
        );

        if (!$packaging) {
            return response()->json(['success' => false, 'message' => 'Package creation failed'], 500);
        }

        return response()->json(['success' => true, 'message' => 'Package creation succeeded'], 200);

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
