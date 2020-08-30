<?php

namespace App\Http\Controllers\API;

use App\Ledger;
use App\Http\Resources\LedgerCollection;
use App\Http\Resources\LedgerResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LedgerAPIController extends Controller
{
    public function index()
    {
        return new LedgerCollection(Ledger::paginate());
    }
 
    public function show(Ledger $ledger)
    {
        return new LedgerResource($ledger->load(['receipts']));
    }

    public function store(Request $request)
    {
        return new LedgerResource(Ledger::create($request->all()));
    }

    public function update(Request $request, Ledger $ledger)
    {
        $ledger->update($request->all());

        return new LedgerResource($ledger);
    }

    public function destroy(Request $request, Ledger $ledger)
    {
        $ledger->delete();

        return response()->noContent();
    }
}
