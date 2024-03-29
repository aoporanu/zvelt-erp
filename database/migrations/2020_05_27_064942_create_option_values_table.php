<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOptionValuesTable extends Migration
{


    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(
            'option_values',
            function (Blueprint $table) {
                $table->id();
                $table->timestamps();

                $table->string('name');
                $table->string('value');
                $table->unsignedBigInteger('option_id');

                $table->foreign('option_id')->references('id')->on('options')->onDelete('cascade');
            }
        );

    }//end up()


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('option_values');

    }//end down()


}//end class
