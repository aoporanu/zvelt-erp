<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\PurchasedItems;
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

$factory->define(PurchasedItems::class, function (Faker $faker) {
    return [
        'purchase_id' => $faker->word(),
        'item_id' => $faker->word(),
        'value' => $faker->word(),
        'location' => $faker->word(),
        'total' => $faker->word(),
        'qty' => $faker->word(),
        'vat' => $faker->word()
    ];
});
