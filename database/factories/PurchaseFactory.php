<?php

namespace Database\Factories;

use App\Models\Purchase;
use App\Models\Supplier;
use Illuminate\Database\Eloquent\Factories\Factory;

class PurchaseFactory extends Factory
{

    protected $model = Purchase::class;


    public function definition()
    {
        return [
            'purchase_id' => $this->faker->numerify('#######'),
            'value'       => array_rand([$this->faker->numerify('##.##'), $this->faker->numerify('###.##')]),
            'total'       => array_rand([$this->faker->numerify('##.##'), $this->faker->numerify('###.##')]),
            'discount'    => $this->faker->randomDigitNotNull,
            'for_invoice' => $this->faker->numerify('######'),
            'supplier_id' => function () {
                return Supplier::inRandomOrder()->first()->id;
            },
        ];

    }//end definition()


}//end class
