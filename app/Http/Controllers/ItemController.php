<?php

namespace App\Http\Controllers;

use App\Http\Requests\ItemDeleteRequest;
use App\Item;
use App\Brand;
use App\Category;
use App\Packaging;
use Exception;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\View\View;
use App\Services\ItemService;
use Illuminate\Http\Response;
use App\Http\Resources\ItemResource;
use App\Http\Requests\ItemStoreRequest;
use App\Http\Requests\ItemUpdateRequest;

class ItemController extends Controller
{

    protected ItemService $service;


    /**
     * ItemController constructor.
     * @param ItemService $service
     */
    public function __construct(ItemService $service)
    {
        $this->service = $service;
        $this->middleware('auth');

    }//end __construct()


    /**
     * Display a listing of the resource.
     *
     * @throws Exception
     */
    public function index(): Factory | View
    {
        if (request()->ajax()) {
            return $this->service->index();
        }

        $pageTitle = 'Item index';
        return view('items.index', compact('pageTitle'));

    }//end index()


    /**
     * @return Application|Factory|\Illuminate\Contracts\View\View
     */
    public function create(): Factory|View
    {
        $categories = Category::get(['id', 'name']);
        $brands     = Brand::get(['id', 'name']);
        $packagings = Packaging::get(['id', 'name']);
        $pageTitle  = 'Create Item';

        return view(
            'items.create',
            compact(
                'categories',
                'brands',
                'pageTitle',
                'packagings'
            )
        );

    }//end create()


    /**
     * Store a newly created resource in storage.
     *
     * @param  ItemStoreRequest $request
     * @return ItemResource
     */
    public function store(ItemStoreRequest $request): ItemResource
    {
        return new ItemResource(
            Item::create($request->validated())
        );

    }//end store()


    /**
     * Display the specified resource.
     *
     * @param  Item $item
     * @return ItemResource
     */
    public function show(Item $item): ItemResource
    {
        return new ItemResource(
            $item->load(
                [
                    'categories',
                    'brands',
                ]
            )
        );

    }//end show()


    /**
     * Update the specified resource in storage.
     *
     * @param ItemUpdateRequest $request The validated request
     * @param Item $item The item model
     */
    public function update(ItemUpdateRequest $request, Item $item): ItemResource
    {
        $item->update($request->validated());

        return new ItemResource($item);

    }//end update()


    /**
     * Remove the specified resource from storage.
     *
     * @param  ItemDeleteRequest $request
     * @param  Item    $item
     * @return Response
     * @throws Exception
     */
    public function destroy(ItemDeleteRequest $request, Item $item): Response
    {
        $item->delete();

        return response()->noContent();

    }//end destroy()
}//end class
