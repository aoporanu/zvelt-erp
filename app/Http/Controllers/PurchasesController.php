<?php

namespace App\Http\Controllers;

use App\Item;
use Exception;
use App\Location;
use App\Purchase;
use App\Supplier;
use App\Warehouse;
use Illuminate\View\View;
use App\Services\PurchaseService;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller as Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Contracts\View\Factory;
use App\Http\Requests\PurchaseStoreRequest;
use App\Http\Requests\PurchaseUpdateRequest;
use Illuminate\Contracts\Foundation\Application;

class PurchasesController extends Controller
{
    protected $service;

    /**
     * PurchasesController constructor.
     */
    public function __construct(PurchaseService $service)
    {
        $this->middleware('auth');
        $this->service = $service;
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse|View
     * @throws Exception
     */
    public function index()
    {
        if (request()->ajax()) {
            $model = Purchase::with('supplier');
            return \datatables()->of($model)
                ->addColumn('supplier', function(Purchase $purchase) {
                    return $purchase->supplier->name ? $purchase->supplier->name : '';
                })
                ->addColumn('action', 'action')
                ->addIndexColumn()
                ->make(true);
        }
        $pageTitle = 'Purchases index';
        return view('purchases.index',
            compact('pageTitle'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return View
     */
    public function create(): View
    {
        $suppliers = Supplier::all();
        $items = Item::get('name');
        $warehouses = Warehouse::get(['id', 'name']);
        $locations = Location::get(['id', 'name']);
        $pageTitle = 'Create purchase';
        return view('purchases.create',
            compact('suppliers', 'pageTitle', 'items', 'warehouses', 'locations'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param PurchaseStoreRequest $request
     * @return RedirectResponse
     */
    public function store(PurchaseStoreRequest $request): RedirectResponse
    {
        $this->service->create($request->validated());
    }

    /**
     * Display the specified resource.
     *
     * @param Purchase $purchase
     * @return Application|Factory|View
     */
    public function show(Purchase $purchase)
    {
        return view('purchases.show', compact('purchase'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Purchase $purchase
     * @return View
     */
    public function edit(Purchase $purchase): View
    {
        return view('purchase.edit', compact('purchase'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param PurchaseUpdateRequest $request
     * @param  Purchase $purchase
     * @return RedirectResponse
     */
    public function update(PurchaseUpdateRequest $request, Purchase $purchase): RedirectResponse
    {
        return redirect()->back()->with('message', 'The Purchase has been updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Purchase $purchase
     * @return JsonResponse
     */
    public function destroy(Purchase $purchase): JsonResponse
    {
        if (Purchase::destroy($purchase)) {
            return response()->json(['success' => true,
                'message' => 'The purchase was deleted']);
        }
    }

    /**
     * @return JsonResponse
     */
    public function list(): JsonResponse
    {
        $purchases = Purchase::with('items')->all();

        if ($purchases->count() < 1) {
            return response()->json(['success' => false,
                'message' => 'There are no products on stock']);
        }
        return response()->json(['success' => true,
            'purchases' => $purchases]);
    }
}
