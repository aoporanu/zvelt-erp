<?php

namespace Database\Factories;

use App\Models\Item;
use App\Models\Location;
use App\Models\Purchase;
use App\Models\PurchasedItems;
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
            'location'      => function () {
                return Location::inRandomOrder()->first()->id;
            },
            'total'         => $this->faker->numerify('###.##'),
            'qty'           => $this->faker->randomDigitNotNull,
            'vat'           => $this->faker->randomDigitNotNull,
        ];
    }
}
