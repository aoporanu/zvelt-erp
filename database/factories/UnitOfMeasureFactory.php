<?php

namespace Database\Factories;

use App\Models\UnitOfMeasure;
use Illuminate\Database\Eloquent\Factories\Factory;

class UnitOfMeasureFactory extends Factory
{

    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = UnitOfMeasure::class;


    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return ['name' => 'L'];

    }//end definition()


}//end class
