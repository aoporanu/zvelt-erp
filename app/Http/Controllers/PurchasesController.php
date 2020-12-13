<?php

namespace App\Http\Controllers;

use App\Http\Requests\PurchaseStoreRequest;
use App\Http\Requests\PurchaseUpdateRequest;
use App\Purchase;
use App\Supplier;
use Exception;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\View\View;

class PurchasesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse|View
     * @throws Exception
     */
    public function index()
    {
        if (request()->ajax()) {
            $model = Purchase::all();
            return \datatables()->of($model)
                ->addColumn('supplier', function(Purchase $purchase) {
                    return $purchase->supplier->name;
                })
                ->addColumn('action', 'action')
                ->addIndexColumn()
                ->make(true);
        }
//        $purchases = Purchase::paginate(10);
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
        $pageTitle = 'Create purchase';
        return view('purchases.create',
            compact('suppliers', 'pageTitle'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param PurchaseStoreRequest $request
     * @return RedirectResponse
     */
    public function store(PurchaseStoreRequest $request): RedirectResponse
    {
        dd($request->errors());
        Purchase::insert($request->validated());
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
