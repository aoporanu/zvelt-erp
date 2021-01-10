<?php

namespace Database\Factories;

use App\Supplier;
use Illuminate\Database\Eloquent\Factories\Factory;

class SupplierFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Supplier::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'uid' => $this->faker->word(),
            'name' => $this->faker->name(),
            'description' => $this->faker->realText()
        ];
    }
}
