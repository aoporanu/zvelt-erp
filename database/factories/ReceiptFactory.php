<?php

namespace Database\Factories;

use App\Models\Invoice;
use App\Models\Ledger;
use App\Models\Receipt;
use App\Models\Shop;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReceiptFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Receipt::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'ledger_id' => function () {
                return Ledger::inRandomOrder()->first()->id;
            },
            'shop_id' => function () {
                return Shop::inRandomOrder()->first()->id;
            },
            'observations' => 'asd'
        ];
    }
}
