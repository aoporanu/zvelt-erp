<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Purchase;
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

$factory->define(Purchase::class, function (Faker $faker) {
    return [
        'purchase_id' => $faker->word(),
        'value' => $faker->word(),
        'total' => $faker->word(),
        'discount' => $faker->word(),
        'for_invoice' => $faker->word(),
        'supplier_id' => function() {
            return factory(\App\Supplier::class)->create()->id;
        }
    ];
});
