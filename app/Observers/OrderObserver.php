<?php

namespace App\Observers;

use Carbon\Carbon;
use App\Models\Order;
use App\Models\Invoice;
use Illuminate\Support\Facades\DB;

class OrderObserver
{
    /**
     * Handle the Order "creating" event.
     *
     * @param Order $order The order object
     *
     * @return void
     */
    public function creating(Order $order)
    {
        $invoice = (new Invoice)
            ->where('client_id', $order->client_id)
            ->where('agent_id', $order->agent_id)
            ->where('created_at', Carbon::now()->subDays(3))
            ->first();
        if (!is_null($invoice) 
            && $order->payment_due > 0 
            && $order->client->ceil < $order->total 
            && is_null($order->derrogated)
        ) {
            return false;
        }
        $order->status = 'pending';

        return true;
    }

    /**
     * Handle the Order "created" event.
     *
     * @param Order $order The order object
     *
     * @return void
     */
    public function created(Order $order)
    {

    }

    /**
     * Handle the Order "updated" event.
     *
     * @param Order $order The order object
     *
     * @return void
     */
    public function updated(Order $order)
    {
        //
    }

    /**
     * Handle the Order "deleted" event.
     *
     * @param Order $order The order object
     *
     * @return void
     */
    public function deleted(Order $order)
    {
        DB::insert(
            'insert into logs(level, message, created_at, updated_at) 
            values (?, ?, ?, ?)', 
            ["warning", "Order $order->uid has been deleted by user $order->user_id at " . Carbon::now(), Carbon::now(), Carbon::now()]
        );
    }

    /**
     * Handle the Order "restored" event.
     *
     * @param Order $order The order object
     *
     * @return void
     */
    public function restored(Order $order)
    {
        //
    }

    /**
     * Handle the Order "force deleted" event.
     *
     * @param Order $order The order object
     *
     * @return void
     */
    public function forceDeleted(Order $order)
    {
        DB::insert(
            'insert into logs(level, message, created_at, updated_at) 
            values (?, ?, ?, ?)', 
            ["highrisk", 
            "Order $order->uid has been permadeleted by user $order->user_id at " . 
            Carbon::now(), 
            Carbon::now(), 
            Carbon::now()
            ]
        );
    }
}
