<?php

/**
 * @var \Illuminate\Database\Eloquent\Factory $factory 
 */
use App\Order;
use Illuminate\Support\Str;
use Faker\Generator as Faker;
use Carbon\Carbon;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(
    Order::class, function (Faker $faker) {
        try {
            return [
            'uid' => $faker->word(),
            'user_id' => random_int(0, 9223372036854775807),
            'client_id' => random_int(0, 9223372036854775807),
            'shop_id' => random_int(0, 9223372036854775807),
            'deliverer_id' => random_int(0, 9223372036854775807),
            'total' => $faker->word(),
            'weight' => $faker->word(),
            'warehouse_id' => random_int(0, 9223372036854775807)
            ];
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
);
