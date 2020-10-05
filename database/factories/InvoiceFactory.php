<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Invoice;
use Illuminate\Support\Str;
use Faker\Generator as Faker;
use Carbon\Carbon;

$factory->define(Invoice::class, function (Faker $faker) {
    return [
        'order_id' => random_int(0, 9223372036854775807),
        'client_id' => random_int(0, 9223372036854775807),
        'shop_id' => random_int(0, 9223372036854775807)
    ];
});
