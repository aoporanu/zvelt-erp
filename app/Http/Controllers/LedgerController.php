<?php

namespace App\Http\Controllers;

use App\Models\Ledger;
use App\Http\Requests\LedgerStoreRequest;
use App\Http\Requests\LedgerDeleteRequest;
use App\Http\Requests\LedgerUpdateRequest;
use App\Services\LedgerService;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class LedgerController extends BaseController
{
  use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

  private LedgerService $ledgerService;


  public function __construct(LedgerService $ledgerService)
  {
    parent::__construct();
    $this->ledgerService = $ledgerService;
  } //end __construct()


  public function index()
  {
    $pageTitle = __('ledgers.pages.index.title');
    return view('ledgers.index', compact('pageTitle'));
  } //end index()


  public function show(Ledger $ledger)
  {
    $pageTitle = __('ledgers.pages.show.title');
    return view('ledgers.show', compact('ledger', 'pageTitle'));
  } //end show()


  public function create()
  {
    $pageTitle = __('ledgers.pages.create.title');
    return view('ledgers.create', compact('pageTitle'));
  } //end create()


  public function store(LedgerStoreRequest $request)
  {
    (new Ledger)->create($request->validated());
  } //end store()


  public function edit(Ledger $ledger)
  {
    $pageTitle = __('ledgers.pages.edit.title');
    return view('ledgers.edit', compact('ledger', 'pageTitle'));
  } //end edit()


  public function update(Ledger $ledger, LedgerUpdateRequest $request)
  {
    $ledger->update($request->validated());
  } //end update()


  public function destroy(Ledger $ledger, LedgerDeleteRequest $request)
  {
    if ($ledger->user->role != 'admin' || $ledger->user->role != 'operator') {
      return false;
    }

    $ledger->delete();
  } //end destroy()


}//end class
