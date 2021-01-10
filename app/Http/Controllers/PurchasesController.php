<?php

namespace App\Http\Controllers;

use Exception;
use App\Purchase;
use Illuminate\View\View;
use App\Services\PurchaseService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Contracts\View\Factory;
use App\Http\Requests\PurchaseStoreRequest;
use App\Http\Requests\PurchaseUpdateRequest;
use Illuminate\Contracts\Foundation\Application;
use App\Http\Controllers\Controller as Controller;

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
            return $this->service->loadIndex();
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
        $arrayForView = $this->service->loadViewArray();
        $pageTitle = 'Create purchase';
        $lastPurchaseId = (int)Purchase::latest()->first()->purchase_id;
        return view('purchases.create',
            [
                'suppliers'         => $arrayForView['suppliers'],
                'items'             => $arrayForView['items'],
                'pageTitle'         => $pageTitle,
                'warehouses'        => $arrayForView['warehouses'],
                'locations'         => $arrayForView['locations'],
                'lastPurchaseId'    => $lastPurchaseId ? $lastPurchaseId+=1 : '1'
            ]
        );
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
        if ($purchase->update($request->validated())) {
            return redirect()->back()->with('message', 'The Purchase has been updated');
        }

        return redirect()->back()->with('message', 'Could not update the model');
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
}
