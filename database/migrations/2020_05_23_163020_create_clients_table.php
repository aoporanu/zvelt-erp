<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(
            'clients', function (Blueprint $table) {
                $table->id();
                $table->string('identifier');
                $table->string('name');
                $table->string('owner_name');
                $table->string('owner_phone');
                $table->text('address');
                $table->string('lng');
                $table->string('lat');
                $table->string('city');
                $table->string('state');
                $table->string('country');
                $table->timestamps();
            }
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clients');
    }
}
