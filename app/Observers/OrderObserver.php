<?php

namespace App\Observers;

use App\Models\Receipt;
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
     * @return bool
     */
    public function creating(Order $order)
    {
        $invoice = (new Invoice)
            ->where('client_id', $order->client_id)
            ->where('agent_id', $order->agent_id)
            ->where('created_at', Carbon::now()->subDays(3))
            ->first();
        if ($invoice) {
            $receipt = (new Receipt)
                ->where('shop_id', $order->shop_id)
                ->where('invoice_id', $invoice->id)
                ->where('amount', $invoice->total)
                ->count();
        }
        if (!is_null($invoice)
            && $order->payment_due > 0
            && $order->client->ceil < $order->total
            && is_null($order->derrogated)
            && (isset($receipt) && $receipt < 1)
        ) {
            return false;
        }

        $order->status = 'pending';

        return true;

    }//end creating()


    /**
     * Handle the Order "created" event.
     *
     * @param Order $order The order object
     *
     * @return void
     */
    public function created(Order $order)
    {

        $discounts = DB::select(
            'select * from discounts_order left join discounts on discounts.id = discounts_order.discount_id where order_id = ?', [$order->id]
        );

    }//end created()


    public function saved(Order $order)
    {
        $discounts = DB::select(
            'select * from discounts_order left join discounts on discounts.id = discounts_order.discount_id where order_id = ?', [$order->id]
        );

        foreach ($discounts as $discount) {
            (double)$order->total -= (double)$discount->amount;
        }
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

    }//end updated()


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
            [
                'warning',
                "Order $order->uid has been deleted by user $order->user_id at ".Carbon::now(),
                Carbon::now(),
                Carbon::now(),
            ]
        );

    }//end deleted()


    /**
     * Handle the Order "restored" event.
     *
     * @param Order $order The order object
     *
     * @return void
     */
    public function restored(Order $order)
    {

    }//end restored()


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
            [
                'highrisk',
                "Order $order->uid has been permadeleted by user $order->user_id at ".Carbon::now(),
                Carbon::now(),
                Carbon::now(),
            ]
        );

    }//end forceDeleted()


}//end class
