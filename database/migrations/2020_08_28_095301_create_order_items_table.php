<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('order_items', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->unsignedBigInteger('order_id')->nullable();
        //     $table->foreign('order_id')->references('id')->on('orders');
        //     $table->unsignedBigInteger('item_id');
        //     $table->foreign('item_id')->references('id')->on('items');
        //     $table->string('qty');
        //     $table->unsignedBigInteger('location_id');
        //     $table->foreign('location_id')->references('id')->on('locations');
        //     $table->timestamp('created_at')->nullable();
        //     $table->timestamp('updated_at')->nullable();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_items');
    }
}
