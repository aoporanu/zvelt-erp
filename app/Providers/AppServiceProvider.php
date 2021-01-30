<?php

namespace App\Providers;

use App\Models\Item;
use App\Models\Order;
use App\Models\Invoice;
use App\Models\Purchase;
use App\Observers\ItemObserver;
use App\Observers\OrderObserver;
use App\Observers\InvoiceObserver;
use App\Observers\PurchaseObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{


    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Invoice::observe(InvoiceObserver::class);

    }//end register()


    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Order::observe(OrderObserver::class);
        Invoice::observe(InvoiceObserver::class);
        Purchase::observe(PurchaseObserver::class);
        Item::observe(ItemObserver::class);
    }//end boot()


}//end class
