<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class OrderCreateProvider extends ServiceProvider
{


    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {

    }//end register()


    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Order::creating(
            function ($model) {
            }
        );

    }//end boot()


}//end class
