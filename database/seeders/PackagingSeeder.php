<?php

namespace Database\Seeders;

use App\Models\Packaging;
use Illuminate\Database\Seeder;

class PackagingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Packaging::factory()->times(50)->create();
    }
}
