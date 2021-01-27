<?php

use App\OrderItem;
use Illuminate\Database\Seeder;

class OrderItemSeeder extends Seeder
{


    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(OrderItem::class, 10)->create();

    }//end run()


}//end class
