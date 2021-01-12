<?php

namespace Database\Factories;

use App\Models\Route;
use App\Models\Shop;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class RouteFactory extends Factory
{

    protected $model = Route::class;

    public function definition()
    {
        return [
            'user_id' => function () {
                return User::inRandomOrder()->first()->id;
            },
            'shop_id' => function () {
                return Shop::inRandomOrder()->first()->id;
            },
            'day_of_week' => array_rand([1,2,3,4,5]),
            'payment' => array_rand([0, 7, 14,21,28,30])
        ];
    }
}

