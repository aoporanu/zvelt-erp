<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterPurchasesAddSupplier extends Migration
{


    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table(
            'purchases',
            function (Blueprint $table) {
                $table->foreignId('supplier_id')->constrained();
            }
        );
        Schema::table(
            'purchased_items',
            function (Blueprint $table) {
                $table->foreignId('supplier_id')->constrained();
            }
        );
        Schema::table(
            'purchased_items',
            function (Blueprint $table) {
                $table->foreignId('location_id')->constrained();
            }
        );
        Schema::table(
            'purchased_items',
            function (Blueprint $table) {
                $table->foreignId('warehouse_id')->constrained();
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
        // Schema::table(
        // 'purchases', function (Blueprint $table) {
        // $table->dropForeign('supplier_id');
        // }
        // );

    }//end down()


}//end class
