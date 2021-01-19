<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Order;
use App\Models\Shop;
use App\Models\User;
use App\Models\Warehouse;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    protected $model = Order::class;

    public function definition()
    {
        return [
            'uid' => $this->faker->uuid,
            'user_id' => function () {
                return User::inRandomOrder()->first()->id;
            },
            'agent_id' => function () {
                return User::inRandomOrder()->first()->id;
            },
            'client_id' => function () {
                return Client::inRandomOrder()->first()->id;
            },
            'shop_id' => function () {
                return Shop::inRandomOrder()->first()->id;
            },
            'deliverer_id' => function () {
                return User::inRandomOrder()->first()->id;
            },
            'total' => $this->faker->numerify('###.##'),
            'weight' => $this->faker->numerify('###.##'),
            'warehouse_id' => function () {
                return Warehouse::inRandomOrder()->first()->id;
            },
            'deleted_at' => null,
            'payment_due' => array_rand([0, 7, 14, 21, 28, 30])
        ];
    }
}

