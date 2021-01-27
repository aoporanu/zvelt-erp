<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ShopStoreRequest;
use App\Http\Resources\ShopCollection;
use App\Http\Resources\ShopResource;
use App\Shop;
use Illuminate\Http\Request;

class ShopsAPIController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new ShopCollection(Shop::paginate());

    }//end index()


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(ShopStoreRequest $request)
    {
        return new ShopResource(Shop::create($request->all()));

    }//end store()


    /**
     * Display the specified resource.
     *
     * @param  \App\Shop $shop
     * @return \Illuminate\Http\Response
     */
    public function show(Shop $shop)
    {
        return new ShopResource($shop->load(['client']));

    }//end show()


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Shop                $shop
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Shop $shop)
    {
        $shop->update($request->all());

        return new ShopResource($shop);

    }//end update()


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Shop $shop
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Shop $shop)
    {
        $shop->delete();

        return response()->noContent();

    }//end destroy()


}//end class
