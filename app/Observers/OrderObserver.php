<?php

namespace App\Observers;

use App\Models\Invoice;
use App\Models\Order;
use Carbon\Carbon;

class OrderObserver
{
    public function creating(Order $order)
    {
        $invoices = Invoice::where('client_id', $order->client_id)
            ->where('agent_id', $order->agent_id)
            ->where('created_at', Carbon::now()->subDays(3))
            ->get();
//        dump($order);
        if (count($invoices) > 0 && $order->payment_due > 0 && $order->client->ceil < $order->total) {
            echo 'Order cannot be created';
            return false;
        }

        return true;
    }

    /**
     * Handle the Order "created" event.
     *
     * @param Order $order
     *
     * @return void
     */
    public function created(Order $order)
    {

    }

    /**
     * Handle the Order "updated" event.
     *
     * @param Order $order
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
     * @param Order  $order
     *
     * @return void
     */
    public function deleted(Order $order)
    {
        //
    }

    /**
     * Handle the Order "restored" event.
     *
     * @param  Order  $order
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
     * @param  Order  $order
     *
     * @return void
     */
    public function forceDeleted(Order $order)
    {
        //
    }
}
