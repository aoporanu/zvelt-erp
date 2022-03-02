<?php

/**
 * Asd
 * php version ^8.0
 *
 * @category ERP
 * @package  SapKiller
 * @author   Squiz Pty Ltd <products@squiz.net>
 * @license  http://opensource.org/licenses/gpl-license.php  GNU Public License
 * @link     http://zvelt-erp.com
 */

namespace App\Http\Controllers;

use Exception;
use App\Models\Purchase;
use Illuminate\Contracts\View\View as IlluminateView;
use Illuminate\View\View;
use App\Models\PurchasedItems;
use App\Services\PurchaseService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Contracts\View\Factory;
use App\Http\Requests\AddItemsRequest;
use App\Http\Requests\IncomingInvoiceScanRequest;
use App\Http\Requests\PurchaseStoreRequest;
use App\Http\Requests\PurchaseUpdateRequest;
use App\Http\Requests\ReturnStoreRequest;
use Illuminate\Contracts\Foundation\Application;
use App\Http\Controllers\Controller as Controller;
use App\Http\Requests\TransferPurchaseRequest;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
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
  protected $_service;


  /**
   * PurchasesController constructor.
   *
   * @param PurchaseService $_service the _service which
   *                                  implements the
   *                                  methods that
   *                                  operate on the Purchase model
   */
  public function __construct(PurchaseService $_service)
  {
    $this->middleware('auth');
    $this->_service = $_service;
  } //end __construct()


  /**
   * Display a listing of the resource.
   *
   * @return \App\Services\JsonResponse|Application|Factory|\Illuminate\Contracts\View\View|JsonResponse|View
   * @throws Exception
   */
  public function index()
  {
    if (request()->ajax()) {
      return $this->_service->loadIndex();
    }

    $pageTitle = 'Purchases index';
    return view(
      'purchases.index',
      compact('pageTitle')
    );
  } //end index()

  /**
   * Show the form for creating a new resource.
   *
   * @return Application|Factory|\Illuminate\Contracts\View\View
   */
  public function create()
  {
    $arrayForView   = $this->_service->loadViewArray();
    $pageTitle      = 'Create purchase';
    $purchaseCount = Purchase::count();
    if ($purchaseCount) {
      $lastPurchaseId = (int) Purchase::latest()->first()->purchase_id;
    } else {
      $lastPurchaseId = 1;
    }
    return view(
      'purchases.create',
      [
        'suppliers'      => $arrayForView['suppliers'],
        'items'          => $arrayForView['items'],
        'pageTitle'      => $pageTitle,
        'warehouses'     => $arrayForView['warehouses'],
        'locations'      => $arrayForView['locations'],
        'lastPurchaseId' => $lastPurchaseId,
      ]
    );
  } //end create()

  /**
   * Store a newly created resource in storage.
   *
   * @param PurchaseStoreRequest $request the request object
   *
   * @throws Exception
   */
  public function store(PurchaseStoreRequest $request): RedirectResponse
  {
    $this->_service->create($request->validated());
    return redirect()->back()->with('message', 'The purchase has been created');
  } //end store()

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
  } //end show()

  /**
   * Show the form for editing the specified resource.
   *
   * @param Purchase $purchase the Purchase object
   *
   * @return Application|Factory|\Illuminate\Contracts\View\View
   */
  public function edit(Purchase $purchase): Application|Factory|IlluminateView
  {
    return view('purchases.edit', compact('purchase'));
  } //end edit()

  /**
   * Update the specified resource in storage.
   *
   * @param PurchaseUpdateRequest $request  request sent to the update method
   * @param Purchase              $purchase the Purchase object
   *
   * @return RedirectResponse
   */
  public function update(PurchaseUpdateRequest $request, Purchase $purchase): RedirectResponse
  {
    if ($purchase->update($request->validated())) {
      return redirect()->back()->with(
        'message',
        'The Purchase has been updated'
      );
    }

    return redirect()->back()->with('message', 'Could not update the model');
  } //end update()

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
        [
          'success' => true,
          'message' => 'The purchase was deleted',
        ]
      );
    }
  } //end destroy()

  /**
   * Load the stocks for a given product
   *
   */
  public function stocks(): JsonResponse|Application|Factory|IlluminateView
  {
    if (request()->ajax()) {
      return $this->_service->loadStocks();
    }

    $pageTitle = 'Company stocks';

    return view('purchases.stocks', compact('pageTitle'));
  } //end stocks()

  /**
   * Move stock between locations
   *
   * @param PurchasedItems $purchasedItem the item which will be transferred
   */
  public function transfer(PurchasedItems $purchasedItem): Application|Factory|IlluminateView
  {
    $pageTitle = 'Transfer stocks';
    $purchasedItem->load('location', 'warehouse');
    $items      = DB::select('select id, name from items');
    $warehouses = DB::select('select id, name from warehouses');
    $locations  = DB::select('select id, name from locations');

    return view(
      'purchases.transfer',
      [
        'items'      => json_encode($items),
        'warehouses' => $warehouses,
        'locations'  => $locations,
        'pageTitle'  => $pageTitle,
      ]
    );
  } //end transfer()

  /**
   * Do the actual transfer
   *
   * @param TransferPurchaseRequest $request The form request that needs to be validated
   */
  public function doTransfer(Request $request): bool
  {
    $validation = $request->validate([
      'item_id' => 'required|integer|exists:items,id',
      'from_warehouse' => 'required|integer|exists:warehouses,id',
      'from_location' => 'required|integer|exists:locations,id',
      'to_warehouse' => 'required|integer|exists:warehouses,id|different:from_warehouse',
      'to_location' => 'required|integer|exists:locations,id|different:from_location',
      'qty' => 'required|digits_between:1,10'
    ]);
    return $this->_service->transfer($validation);
  } //end doTransfer()

  public function addItems(AddItemsRequest $addItemsRequest)
  {
    if ($this->_service->addItems($addItemsRequest->validated())) {
      return response()->noContent(Response::HTTP_CREATED);
    }
  }

  public function scan(IncomingInvoiceScanRequest $incomingInvoiceScanRequest)
  {
    if ($this->_service->scan($incomingInvoiceScanRequest->validated())) {
      return response()->noContent(Response::HTTP_CREATED);
    }

    return response()->noContent(Response::HTTP_FOUND);
  }

  public function returnCreate()
  {
    return view('purchases.return.create');
  }

  public function returnStore(ReturnStoreRequest $returnStoreRequest)
  {
    if ($this->_service->returnCreate($returnStoreRequest->validated())) {
      // create a bom for the return
      // do a Toastr::success and return 
      // the user to the index

      // with Toastr::error
    }
  }
}//end class
