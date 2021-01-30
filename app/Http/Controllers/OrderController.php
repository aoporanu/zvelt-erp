<?php

namespace App\Http\Controllers;

use App\Http\Requests\ItemDeleteRequest;
use App\Http\Requests\ItemStoreRequest;
use App\Http\Requests\ItemUpdateRequest;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Models\Item;

class OrderController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function index(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
    {
        return view('orders.index');
    }


    public function create(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
    {
        return view('items.create');
    }


    public function store(ItemStoreRequest $request)
    {

    }


    public function show(Item $item)
    {
        return view('items.show', compact('item'));
    }


    public function edit(Item $item)
    {
        return view('items.edit', compact('item'));
    }


    public function update(ItemUpdateRequest $request, Item $item)
    {

    }

    public function destroy(ItemDeleteRequest $request, Item $item)
    {
        $item->delete();

        return response()->noContent();
    }
}//end class
