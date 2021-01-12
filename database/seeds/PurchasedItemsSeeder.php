<?php

use App\PurchasedItems;
use Illuminate\Database\Seeder;

class PurchasedItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(PurchasedItems::class, 10)->create();
    }
}
