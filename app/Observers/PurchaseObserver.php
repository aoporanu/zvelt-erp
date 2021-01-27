<?php

namespace App\Observers;

use App\Models\Purchase;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class PurchaseObserver
{


    /**
     * Handle the Purchase "creating" event.
     *
     * @param Purchase $purchase The purchase model
     *
     * @return void
     */
    public function creating(Purchase $purchase)
    {
        DB::insert(
            'insert into logs
            (level, message, created_at, updated_at)
             values (?, ?, ?, ?)',
            [
                'pur-created_'.$purchase->purchase_id,
                'A new purchase was created',
                Carbon::now(),
                Carbon::now(),
            ]
        );

    }//end creating()


    /**
     * Handle the Purchase "created" event.
     *
     * @param Purchase $purchase The purchase model
     *
     * @return void
     */
    public function created(Purchase $purchase)
    {
        DB::insert(
            'insert into logs
            (level, message, created_at, updated_at)
             values (?, ?, ?, ?)',
            [
                'pur-nir_'.$purchase->id,
                'The nir is being generated',
                Carbon::now(),
                Carbon::now(),
            ]
        );
        $purchase->generateNir($purchase);
        DB::insert(
            'insert into logs
            (level, message, created_at, updated_at)
             values (?, ?, ?, ?)',
            [
                'pur-saved_'.$purchase->id,
                'The purchase was saved',
                Carbon::now(),
                Carbon::now(),
            ]
        );

    }//end created()


    /**
     * Handle the Purchase "updated" event.
     *
     * @param Purchase $purchase The purchase model
     *
     * @return void
     */
    public function updated(Purchase $purchase)
    {

    }//end updated()


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
                Carbon::now(),
            ]
        );

    }//end deleted()


    /**
     * Handle the Purchase "restored" event.
     *
     * @param Purchase $purchase The purchase model
     *
     * @return void
     */
    public function restored(Purchase $purchase)
    {

    }//end restored()


    /**
     * Handle the Purchase "force deleted" event.
     *
     * @param Purchase $purchase The purchase model
     *
     * @return void
     */
    public function forceDeleted(Purchase $purchase)
    {

    }//end forceDeleted()


}//end class
