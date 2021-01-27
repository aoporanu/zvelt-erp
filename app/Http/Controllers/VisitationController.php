<?php

namespace App\Http\Controllers;

use App\Http\Requests\VisitationStoreRequest;
use App\Http\Requests\VisitationUpdateRequest;
use App\Visitation;

class VisitationController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pageTitle = 'Visitation index';

        return view('visitations.index', compact('pageTitle'));

    }//end index()


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $pageTitle = 'Create visitation';

        return view('visitations.create', compact('pageTitle'));

    }//end create()


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(VisitationStoreRequest $request)
    {

    }//end store()


    /**
     * Display the specified resource.
     *
     * @param  \App\Visitation $visitation
     * @return \Illuminate\Http\Response
     */
    public function show(Visitation $visitation)
    {
        return view('visitations.show', compact('visitation'));

    }//end show()


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Visitation $visitation
     * @return \Illuminate\Http\Response
     */
    public function edit(Visitation $visitation)
    {
        return view('visitations.edit', compact('visitation'));

    }//end edit()


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Visitation          $visitation
     * @return \Illuminate\Http\Response
     */
    public function update(VisitationUpdateRequest $request, Visitation $visitation)
    {

    }//end update()


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Visitation $visitation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Visitation $visitation)
    {
        $visitation->delete();

        return response()->noContent();

    }//end destroy()


}//end class
