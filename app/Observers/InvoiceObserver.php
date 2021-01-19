<?php

namespace App\Observers;

use App\Models\Client;
use App\Models\Invoice;
use Illuminate\Support\Facades\DB;

class InvoiceObserver
{
    /**
     * Handle the Invoice "created" event.
     *
     * @param Invoice $invoice
     *
     * @return void
     */
    public function created(Invoice $invoice)
    {
        $invoice->client->ceil -= $invoice->total;
        $invoice->save();
    }

    /**
     * Handle the Invoice "updated" event.
     *
     * @param Invoice $invoice
     *
     * @return void
     */
    public function updated(Invoice $invoice)
    {
        //
    }

    /**
     * Handle the Invoice "deleted" event.
     *
     * @param Invoice  $invoice
     *
     * @return void
     */
    public function deleted(Invoice $invoice)
    {
        //
    }

    /**
     * Handle the Invoice "restored" event.
     *
     * @param  Invoice  $invoice
     *
     * @return void
     */
    public function restored(Invoice $invoice)
    {
        //
    }

    /**
     * Handle the Invoice "force deleted" event.
     *
     * @param  Invoice  $invoice
     *
     * @return void
     */
    public function forceDeleted(Invoice $invoice)
    {
        //
    }
}
