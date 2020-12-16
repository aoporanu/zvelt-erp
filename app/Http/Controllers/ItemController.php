<?php

namespace App\Http\Controllers;

use App\Http\Requests\ItemStoreRequest;
use App\Http\Resources\ItemCollection;
use App\Http\Resources\ItemResource;
use Illuminate\Http\Request;
use App\Item;
use Illuminate\Http\Response;
use Illuminate\View\View;

class ItemController extends Controller
{
    /**
     * ItemController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return View
     * @throws \Exception
     */
    public function index(): View
    {
        if (request()->ajax()) {
            $model = Item::with('category', 'brand', 'purchases');
            return \datatables()->of($model)
                ->addColumn('category', function(Item $purchase) {
                    return $purchase->category->name ? $purchase->category->name : '';
                })
                ->addColumn('brand', function (Item $item) {
                    return $item->brand->name ? $item->brand->name : '';
                })
                ->addColumn('purchases', function (Item $item) {
                    return $item->purchases->total ? $item->purchases->total : '';
                })
                ->addColumn('action', 'action')
                ->addIndexColumn()
                ->make(true);
        }

        $pageTitle = 'Item index';
        return view('items.index', compact('pageTitle'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ItemStoreRequest $request
     * @return ItemResource
     */
    public function store(ItemStoreRequest $request): ItemResource
    {
        return new ItemResource(Item::create($request->all()));
    }

    /**
     * Display the specified resource.
     *
     * @param Item $item
     * @return ItemResource
     */
    public function show(Item $item): ItemResource
    {
        return new ItemResource($item->load(['categories', 'brands']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  Item $item
     * @return ItemResource
     */
    public function update(Request $request, Item $item): ItemResource
    {
        $item->update($request->all());

        return new ItemResource($item);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param Item $item
     * @return Response
     * @throws \Exception
     */
    public function destroy(Request $request, Item $item): Response
    {
        $item->delete();

        return response()->noContent();
    }
}
