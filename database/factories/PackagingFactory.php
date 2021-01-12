<?php

namespace Database\Factories;

use App\Models\Packaging;
use Illuminate\Database\Eloquent\Factories\Factory;

class PackagingFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Packaging::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word(),
        ];
    }
}
