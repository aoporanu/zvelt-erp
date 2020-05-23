<?php

namespace App\Http\Controllers;

use App\Http\Requests\ItemStoreRequest;
use http\Env\Response;
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
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        dd(Item::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View
     */
    public function create()
    {
        return view('items.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ItemStoreRequest $request
     * @return JsonResponse
     */
    public function store(ItemStoreRequest $request)
    {
        $sku = Item::latest()->get('sku')->first();
        if (!$sku) {
            $sku = '0000100000000';
        } else {
            (int)$sku++;
        }

        $item = Item::create([
            'sku' => $sku,
            'name' => $request->get('name'),
            'vat' => $request->get('vat'),
            'price' => $request->get('price'),
            'category_id' => $request->get('category_id')
        ]);

        if (!$item) {
            return response()->json(['success'=>false, 'message'=>'Item creation failed'], 500);
        }

        return response()->json(['success'=>true, 'message' => 'Item creation OK']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function show($id)
    {
        $item = Item::where('id', $id)->with('category')->get();

        if (!$item) {
            return \response()->json(['success' => false, 'message' => 'No such item on inventory'], 500);
        }

        return response()->json(['success' => true, 'item' => $item]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
