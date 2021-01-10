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
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $pageTitle = 'Create visitation';

        return view('visitations.create', compact('pageTitle'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(VisitationStoreRequest $request)
    {
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Visitation  $visitation
     * @return \Illuminate\Http\Response
     */
    public function show(Visitation $visitation)
    {
        return view('visitations.show', compact('visitation'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Visitation  $visitation
     * @return \Illuminate\Http\Response
     */
    public function edit(Visitation $visitation)
    {
        return view('visitations.edit', compact('visitation'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Visitation  $visitation
     * @return \Illuminate\Http\Response
     */
    public function update(VisitationUpdateRequest $request, Visitation $visitation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Visitation  $visitation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Visitation $visitation)
    {
        $visitation->delete();

        return response()->noContent();
    }
}
