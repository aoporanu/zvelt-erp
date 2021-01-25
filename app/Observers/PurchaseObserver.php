<?php

namespace App\Observers;

use App\Models\Purchase;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use stdClass;

class PurchaseObserver
{
    /**
     * Handle the Purchase "created" event.
     *
     * @param Purchase $purchase The purchase model
     * 
     * @return void
     */
    public function created(Purchase $purchase)
    {
        $purchase->doNir();
    }

    /**
     * Handle the Purchase "updated" event.
     *
     * @param Purchase $purchase The purchase model
     * 
     * @return void
     */
    public function updated(Purchase $purchase)
    {
        //
    }

    /**
     * Handle the Purchase "deleted" event.
     *
     * @param Purchase $purchase The purchase model
     * 
     * @return void
     */
    public function deleted(Purchase $purchase)
    {
        $user = auth()->user();
        DB::insert(
            'insert into logs 
                (level, message, created_at, updated_at) 
            values(
                ?, 
                ?,
                ?, 
                ?)',
            [
                'pur_deleted',
                "Purchase $purchase->id was deleted by $user->id ($user->name)", 
                Carbon::now(),
                Carbon::now()
            ]
        );
    }

    /**
     * Handle the Purchase "restored" event.
     *
     * @param Purchase $purchase The purchase model
     * 
     * @return void
     */
    public function restored(Purchase $purchase)
    {
        //
    }

    /**
     * Handle the Purchase "force deleted" event.
     *
     * @param Purchase $purchase The purchase model
     * 
     * @return void
     */
    public function forceDeleted(Purchase $purchase)
    {
        //
    }
}
