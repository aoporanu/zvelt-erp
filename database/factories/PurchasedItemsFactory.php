<?php

namespace Database\Factories;

use App\Models\Item;
use App\Models\Location;
use App\Models\Purchase;
use App\Models\PurchasedItems;
use App\Models\Supplier;
use App\Models\Warehouse;
use Illuminate\Database\Eloquent\Factories\Factory;

class PurchasedItemsFactory extends Factory
{

    protected $model = PurchasedItems::class;


    public function definition()
    {
        return [
            'purchase_id'   => function () {
                return Purchase::inRandomOrder()->first()->id;
            },
            'item_id'       => function () {
                return Item::inRandomOrder()->first()->id;
            },
            'value'         => $this->faker->word(),
            'location_id'   => function () {
                return Location::inRandomOrder()->first()->id;
            },
            'supplier_id'   => function () {
                return Supplier::inRandomOrder()->first()->id;
            },
            'warehouse_id'  => function () {
                return Warehouse::inRandomOrder()->first()->id;
            },
            'purchase_cost' => $this->faker->numerify('##.##'),
            'selling_cost'  => $this->faker->numerify('##.##'),
            'total'         => $this->faker->numerify('###.##'),
            'qty'           => $this->faker->randomDigitNotNull(),
            'vat'           => $this->faker->randomDigitNotNull(),
            'lot'           => $this->faker->numerify('#######'),
        ];

    }//end definition()


}//end class
