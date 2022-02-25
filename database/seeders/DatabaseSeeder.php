<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Brand;

class DatabaseSeeder extends Seeder
{


    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
    Category::factory(100)->create();
    Brand::factory(100)->create();
        // \App\Models\User::factory(10)->create();

    }//end run()


}//end class
