<?php

namespace App\Providers;

use App\Providers\InvoiceCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CheckInvoiceCanBeCreated
{


    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {

    }//end __construct()


    /**
     * Handle the event.
     *
     * @param  InvoiceCreated $event
     * @return void
     */
    public function handle(InvoiceCreated $event)
    {

    }//end handle()


}//end class
