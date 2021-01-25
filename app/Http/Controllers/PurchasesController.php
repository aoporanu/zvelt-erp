<?php
/**
 * Asd
 * php version ^8.0
 *
 * @category ERP
 * @package  SapKiller
 * @author   Adi Oporanu <aoporanu@gmail.com>
 * @license  http://opensource.org/licenses/gpl-license.php  GNU Public License
 * @link     http://zvelt-erp.com
 */
namespace App\Http\Controllers;

use Exception;
use App\Models\Purchase;
use Illuminate\View\View;
use App\Models\PurchasedItems;
use App\Services\PurchaseService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Contracts\View\Factory;
use App\Http\Requests\PurchaseStoreRequest;
use App\Http\Requests\PurchaseUpdateRequest;
use Illuminate\Contracts\Foundation\Application;
use App\Http\Controllers\Controller as Controller;
use App\Http\Requests\TransferPurchaseRequest;
use DB;

/**
 * Purchases Controller
 *
 * @category ERP
 * @package  SapKiller
 * @author   Adi Oporanu <aoporanu@gmail.com>
 * @license  http://opensource.org/licenses/gpl-license.php  GNU Public License
 * @link     http://zvelt-erp.com
 */
class PurchasesController extends Controller
{
    protected $service;

    /**
     * PurchasesController constructor.
     *
     * @param PurchaseService $service the service which
     *                                 implements the
     *                                 methods that
     *                                 operate on the Purchase model
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
        return view(
            'purchases.index',
            compact('pageTitle')
        );
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
        return view(
            'purchases.create',
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
     * @param PurchaseStoreRequest $request the request object
     *
     * @return RedirectResponse
     */
    public function store(PurchaseStoreRequest $request): RedirectResponse
    {
        $this->service->create($request->validated());
        return redirect()->back()->with('message', 'The purchase has been created');
    }

    /**
     * Display the specified resource.
     *
     * @param Purchase $purchase the Purchase object
     *
     * @return Application|Factory|View
     */
    public function show(Purchase $purchase)
    {
        $pageTitle = 'Showing purchased item';
        return view('purchases.show', compact('purchase', 'pageTitle'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Purchase $purchase the Purchase object
     *
     * @return View
     */
    public function edit(Purchase $purchase): View
    {
        return view('purchases.edit', compact('purchase'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param PurchaseUpdateRequest $request  request sent to the update method
     * @param Purchase              $purchase the Purchase object
     *
     * @return RedirectResponse
     */
    public function update(PurchaseUpdateRequest $request, Purchase $purchase)
    {
        if ($purchase->update($request->validated())) {
            return redirect()->back()
                ->with('message', 'The Purchase has been updated');
        }

        return redirect()->back()->with('message', 'Could not update the model');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Purchase $purchase the Purchase object
     *
     * @return JsonResponse
     */
    public function destroy(Purchase $purchase): JsonResponse
    {
        if (Purchase::destroy($purchase)) {
            return response()->json(
                ['success' => true,
                'message' => 'The purchase was deleted']
            );
        }
    }

    /**
     * Load the stocks for a given product
     *
     * @return View
     */
    public function stocks()
    {
        if (request()->ajax()) {
            return $this->service->loadStocks();
        }
        $pageTitle = 'Company stocks';

        return view('purchases.stocks', compact('pageTitle'));
    }

    /**
     * Move stock between locations
     *
     * @param PurchasedItem $purchasedItem the item which will be transferred
     *
     * @return View
     */
    public function transfer(PurchasedItems $purchasedItem)
    {
        $pageTitle = 'Transfer stocks';
        $purchasedItem->load('location', 'warehouse');
        $items = DB::select('select id, name from items');
        $warehouses = DB::select('select id, name from warehouses');
        $locations = DB::select('select id, name from locations');
        return view(
            'purchases.transfer', 
            [
                'items'         => $items,
                'warehouses'    => $warehouses,
                'locations'     => $locations,
                'pageTitle'     => $pageTitle
            ]
        );
    }

    /**
     * Do the actual transfer
     * 
     * @param TransferPurchaseRequest $request The form reqyest that needs to be validated
     * 
     * @return PurchaseService        The response from the service
     */
    public function doTransfer(TransferPurchaseRequest $request)
    {
        return $this->service->transfer($request->validated());
    }
}
