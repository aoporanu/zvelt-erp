<?php

namespace App\Http\Controllers\API;

use App\Batch;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BatchesAPIController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }//end index()


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    }//end store()


    /**
     * Display the specified resource.
     *
     * @param  \App\Batch $batch
     * @return \Illuminate\Http\Response
     */
    public function show(Batch $batch)
    {

    }//end show()


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Batch               $batch
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Batch $batch)
    {

    }//end update()


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Batch $batch
     * @return \Illuminate\Http\Response
     */
    public function destroy(Batch $batch)
    {
        $batch->delete();

        return response()->noContent();

    }//end destroy()


}//end class
