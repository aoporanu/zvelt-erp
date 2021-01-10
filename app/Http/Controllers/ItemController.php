<?php

namespace App\Http\Controllers;

use App\Item;
use App\Brand;
use App\Category;
use App\Packaging;
use Illuminate\View\View;
use Illuminate\Http\Request;
use App\Services\ItemService;
use Illuminate\Http\Response;
use App\Http\Resources\ItemResource;
use App\Http\Requests\ItemStoreRequest;
use App\Http\Requests\ItemUpdateRequest;

class ItemController extends Controller
{
    protected $service;
    /**
     * ItemController constructor.
     */
    public function __construct(ItemService $service)
    {
        $this->service = $service;
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return View
     * @throws \Exception
     */
    public function index()
    {
        if (request()->ajax()) {
            return $this->service->index();
        }

        $pageTitle = 'Item index';
        return view('items.index', compact('pageTitle'));
    }

    public function create()
    {
        $categories = Category::get(['id', 'name']);
        $brands = Brand::get(['id', 'name']);
        $packagings = Packaging::get(['id', 'name']);
        $pageTitle = 'Create Item';

        return view('items.create', compact('categories', 'brands', 'pageTitle', 'packagings'));
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
    public function update(ItemUpdateRequest $request, Item $item): ItemResource
    {
        $item->update($request->validated());

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
