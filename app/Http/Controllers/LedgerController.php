<?php

namespace App\Http\Controllers;

use App\Models\Ledger;
use App\Http\Requests\LedgerStoreRequest;
use App\Http\Requests\LedgerDeleteRequest;
use App\Http\Requests\LedgerUpdateRequest;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class LedgerController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    public function __construct()
    {
        parent::__construct();

    }//end __construct()


    public function index()
    {
        return view('ledgers.index');

    }//end index()


    public function show(Ledger $ledger)
    {
        return view('ledgers.show', compact('ledger'));

    }//end show()


    public function create()
    {
        return view('ledgers.create');

    }//end create()


    public function store(LedgerStoreRequest $request)
    {
        // code...

    }//end store()


    public function edit(Ledger $ledger)
    {
        return view('ledgers.edit', compact('ledger'));

    }//end edit()


    public function update(Ledger $ledger, LedgerUpdateRequest $request)
    {

    }//end update()


    public function destroy(Ledger $ledger, LedgerDeleteRequest $request)
    {
        if ($ledger->user->role != 'admin' || $ledger->user->role != 'operator') {
            return false;
        }

        $ledger->delete();

    }//end destroy()


}//end class
