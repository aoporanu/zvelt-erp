<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\PackagingStoreRequest;
use App\Http\Resources\PackagingCollection;
use App\Http\Resources\PackagingResource;
use App\Packaging;
use Illuminate\Http\Request;

class PackagingAPIController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new PackagingCollection(Packaging::paginate(10));

    }//end index()


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(PackagingStoreRequest $request)
    {
        return new PackagingResource(Packaging::create($request->all()));

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
