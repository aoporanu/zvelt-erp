<?php

use Webpatser\Uuid;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('clients')->insert([
            'identifier' => Uuid::generate(4),
            'name' => 'Muna Incom',
            'address' => 'Decebal nr 4',
            'lat' => '38.601235',
            'lng' => '10.601235',
            'owner_name' => 'Munescu incomescu',
            'owner_phone' => '07123456789',
            'city' => 'Craiova',
            'state' => 'Dolj',
            'country' => 'RO'
        ]);
        DB::table('clients')->insert([
            'identifier' => Uuid::generate(4),
            'name' => 'Ruk Tour',
            'address' => 'Decebal nr 45',
            'lat' => '38.610235',
            'lng' => '10.610235',
            'owner_name' => 'Rukescu Tourescu',
            'owner_phone' => '07123456978',
            'city' => 'Craiova',
            'state' => 'Dolj',
            'country' => 'RO'
        ]);
        DB::table('clients')->insert([
            'identifier' => Uuid::generate(4),
            'name' => 'Heldom',
            'address' => 'Decebal nr 48',
            'lat' => '38.601254',
            'lng' => '10.601285',
            'owner_name' => 'Heldomeanu Ion',
            'owner_phone' => '07123459678',
            'city' => 'Craiova',
            'state' => 'Dolj',
            'country' => 'RO'
        ]);
    }
}
