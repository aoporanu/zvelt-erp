<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShopsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(
            'shops', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('identifier');
                $table->string('lat');
                $table->string('lng');
                $table->text('address');
                $table->unsignedBigInteger('client_id');
                $table->string('city');
                $table->string('state');
                $table->string('country');

                $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');
                $table->timestamps();
                $table->timestamp('deleted_at')->nullable();
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
        Schema::dropIfExists('shops');
    }
}
