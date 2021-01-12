<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItems extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(
            'items', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('vat');
                $table->double('price');
                $table->unsignedBigInteger('sku');
                $table->integer('category_id')->index()->unsigned();
                $table->string('unit_of_measure');
                $table->string('packaging');
                $table->string('per_packaging');
                $table->unsignedBigInteger('brand_id')->index();

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
        Schema::dropIfExists('items');
    }
}
