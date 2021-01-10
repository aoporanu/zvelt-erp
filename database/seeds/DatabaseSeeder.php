<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call(CategorySeeder::class);
        $this->call(BrandSeeder::class);
        $this->call(UnitOfMeasureSeeder::class);
        $this->call(PackagingSeeder::class);
        $this->call(ItemSeed::class);
    }
}
