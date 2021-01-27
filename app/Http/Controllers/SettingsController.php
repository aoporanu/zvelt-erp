<?php

namespace App\Http\Controllers;

use App\Http\Resources\SettingsCollection;
use App\Http\Resources\SettingsResource;
use App\Setting;
use Illuminate\Http\Request;

class SettingsController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new SettingsCollection(Setting::paginate(10));

    }//end index()


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return new SettingsResource(Setting::create($request->all()));

    }//end store()


    /**
     * Display the specified resource.
     *
     * @param  \App\Setting $setting
     * @return \Illuminate\Http\Response
     */
    public function show(Setting $setting)
    {
        return new SettingsResource($setting);

    }//end show()


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Setting             $setting
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Setting $setting)
    {
        $setting->update($request->all());

        return new SettingsResource($setting);

    }//end update()


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Setting $setting
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Setting $setting)
    {
        $setting->delete();

        return response()->noContent();

    }//end destroy()


}//end class
