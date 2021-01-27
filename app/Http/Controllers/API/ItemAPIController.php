<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ItemStoreRequest;
use App\Http\Resources\ItemCollection;
use App\Http\Resources\ItemResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Item;

class ItemAPIController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return new ItemCollection(Item::paginate());

    }//end index()


    /**
     * Store a newly created resource in storage.
     *
     * @param  ItemStoreRequest $request
     * @return JsonResponse
     */
    public function store(ItemStoreRequest $request)
    {
        return new ItemResource(Item::create($request->all()));

    }//end store()


    /**
     * Display the specified resource.
     *
     * @param  integer $id
     * @return JsonResponse
     */
    public function show(Item $item)
    {
        return new ItemResource($item->load(['categories', 'brands']));

    }//end show()


    /**
     * Update the specified resource in storage.
     *
     * @param  Request $request
     * @param  Item    $item
     * @return JsonResponse
     */
    public function update(Request $request, Item $item)
    {
        $item->update($request->all());

        return new ItemResource($item);

    }//end update()


    /**
     * Remove the specified resource from storage.
     *
     * @param  Request $request
     * @param  Item    $id
     * @return JsonResponse
     */
    public function destroy(Request $request, Item $item)
    {
        $item->delete();

        return response()->noContent();

    }//end destroy()


}//end class
