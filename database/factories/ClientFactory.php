<?php

namespace Database\Factories;

use App\Models\Client;
use Illuminate\Database\Eloquent\Factories\Factory;

class ClientFactory extends Factory
{

    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Client::class;


    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'identifier'  => $this->faker->word(),
            'name'        => $this->faker->unique()->name(),
            'address'     => $this->faker->address(),
            'lat'         => $this->faker->latitude(),
            'lng'         => $this->faker->longitude(),
            'owner_name'  => $this->faker->name(),
            'owner_phone' => $this->faker->phoneNumber,
            'city'        => $this->faker->city(),
            'state'       => $this->faker->state(),
            'country'     => $this->faker->country(),
        ];

    }//end definition()


}//end class
