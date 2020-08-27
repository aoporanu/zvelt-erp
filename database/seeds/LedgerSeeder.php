<?php

use App\Ledger;
use Illuminate\Database\Seeder;

class LedgerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Ledger::class, 10)->create();
    }
}