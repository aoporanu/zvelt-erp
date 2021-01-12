<?php

namespace Database\Factories;

use App\Models\Location;
use App\Models\Warehouse;
use Illuminate\Database\Eloquent\Factories\Factory;

class LocationFactory extends Factory
{

    protected $model = Location::class;

    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'type' => $this->faker->word(),
            'warehouse_id' => function () {
                return Warehouse::inRandomOrder()->first()->id;
            }
        ];
    }
}

