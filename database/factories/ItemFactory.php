<?php

namespace Database\Factories;

use App\Item;
use App\Brand;
use App\Category;
use App\Packaging;
use App\UnitOfMeasure;
use Illuminate\Database\Eloquent\Factories\Factory;

class ItemFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Item::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'              => $this->faker->word(),
            'vat'               => $this->faker->randomElement(['9', '19', '13']),
            'price'             => $this->faker->numerify('##.##'),
            'category_id'       => function() {
                return Category::inRandomOrder()->first()->id;
            },
            'sku'               => $this->faker->sku,
            'weight'            => $this->faker->randomDigit(),
            'brand_id'          => function() {
                return Brand::inRandomOrder()->first()->id;
            },
            'unit_of_measure'   => function() {
                return UnitOfMeasure::inRandomOrder()->first()->id;
            },
            'packaging'         => function() {
                return Packaging::inRandomOrder()->first()->id;
            },
            'per_packaging'     => $this->faker->randomDigit()
        ];
    }
}
