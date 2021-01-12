<?php

namespace Database\Factories;

use App\Models\Ledger;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class LedgerFactory extends Factory
{

    protected $model = Ledger::class;

    public function definition()
    {
        return [
            'type'      => $this->faker->word(),
            'user_id'   => function () {
                User::inRandomOrder()->first()->id;
            },
            'balance'   => $this->faker->word()
        ];
    }
}
