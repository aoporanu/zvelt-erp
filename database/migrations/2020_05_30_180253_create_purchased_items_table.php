<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchasedItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(
            'purchased_items', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('purchase_id');
                $table->unsignedBigInteger('item_id');
                $table->unsignedBigInteger('supplier_id');
                $table->double('purchase_cost');
                $table->double('selling_cost');
                $table->double('vat');
                $table->integer('qty');
                $table->string('lot');
                $table->double('value');
                $table->double('total');
                $table->unsignedBigInteger('location_id');
                $table->unsignedBigInteger('warehouse_id');

                $table->foreign('purchase_id')->references('id')->on('purchases')->onDelete('cascade');
                $table->foreign('item_id')->references('id')->on('items');
                $table->foreign('supplier_id')->references('id')->on('suppliers');
                $table->foreign('location_id')->references('id')->on('locations');
                $table->foreign('warehouse_id')->references('id')->on('warehouses');
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
        Schema::dropIfExists('purchased_items');
    }
}
