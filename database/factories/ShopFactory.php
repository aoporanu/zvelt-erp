<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Shop;
use Illuminate\Database\Eloquent\Factories\Factory;

class ShopFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Shop::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'          => $this->faker->name(),
            'identifier'    => 'SHP' . $this->faker->numerify('######'),
            'lat'           => $this->faker->latitude,
            'lng'           => $this->faker->longitude,
            'address'       => $this->faker->address,
            'client_id'     => function() {
                return Client::inRandomOrder()->first()->id;
            },
            'city'          => $this->faker->city,
            'state'         => $this->faker->state,
            'country'       => $this->faker->country
        ];
    }
}
