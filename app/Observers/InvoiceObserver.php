<?php

namespace App\Observers;

use App\Models\Invoice;
use Illuminate\Support\Facades\DB;

class InvoiceObserver
{


    /**
     * Handle the Invoice "creating" event.
     *
     * @param Invoice $invoice The invoice model
     *
     * @return void
     */
    public function creating(Invoice $invoice)
    {

    }//end creating()


    /**
     * Handle the Invoice "created" event.
     *
     * @param Invoice $invoice The invoice model
     *
     * @return void
     */
    public function created(Invoice $invoice)
    {
        DB::update(
            'update clients set ceil = ceil - ? where id = ?',
            [
                $invoice->total,
                $invoice->client->id,
            ]
        );

    }//end created()


    /**
     * Handle the Invoice "updated" event.
     *
     * @param Invoice $invoice The invoice model
     *
     * @return void
     */
    public function updated(Invoice $invoice)
    {

    }//end updated()


    /**
     * Handle the Invoice "deleted" event.
     *
     * @param Invoice $invoice The invoice model
     *
     * @return void
     */
    public function deleted(Invoice $invoice)
    {

    }//end deleted()


    /**
     * Handle the Invoice "restored" event.
     *
     * @param Invoice $invoice The invoice model
     *
     * @return void
     */
    public function restored(Invoice $invoice)
    {

    }//end restored()


    /**
     * Handle the Invoice "force deleted" event.
     *
     * @param Invoice $invoice The invoice model
     *
     * @return void
     */
    public function forceDeleted(Invoice $invoice)
    {

    }//end forceDeleted()


}//end class
