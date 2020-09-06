<?php

namespace App\Http\Controllers;

use App\Http\Requests\ItemStoreRequest;
use App\Http\Resources\ItemCollection;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Item;
use Illuminate\View\View;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return new ItemCollection(Item::paginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ItemStoreRequest $request
     * @return JsonResponse
     */
    public function store(ItemStoreRequest $request)
    {
        return new ItemCollection(Item::create($request->all()));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function show(Item $item)
    {
        return new ItemResource($item->load(['categories', 'brands']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  Item $item
     * @return JsonResponse
     */
    public function update(Request $request, Item $item)
    {
        $item->update($request->all());

        return new ItemResource($item);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param  Item  $id
     * @return JsonResponse
     */
    public function destroy(Request $request, Item $item)
    {
        $item->delete();

        return response()->noContent();
    }
}
