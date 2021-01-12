<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Invoice;
use App\Models\Shop;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class InvoiceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Invoice::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'order_id' => function () {
                return Shop::inRandomOrder()->first()->id;
            },
            'shop_id' => function () {
                return Shop::inRandomOrder()->first()->id;
            },
            'client_id' => function () {
                return Client::inRandomOrder()->first()->id;
            },
            'agent_id' => function () {
                return User::inRandomOrder()->first()->id;
            },
            'user_id' => function () {
                return User::inRandomOrder()->first()->id;
            },
            'total' => $this->faker->numerify('###.##'),
        ];
    }
}
