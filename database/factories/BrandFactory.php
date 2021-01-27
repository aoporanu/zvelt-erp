<?php

namespace Database\Factories;

use App\Models\Brand;
use Illuminate\Database\Eloquent\Factories\Factory;

class BrandFactory extends Factory
{

    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Brand::class;


    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'       => $this->faker->word(),
            'identifier' => $this->faker->unique()->creditCardNumber(),
            'address'    => $this->faker->address(),
            'cui'        => $this->faker->unique()->creditCardNumber(),
        ];

    }//end definition()


}//end class
