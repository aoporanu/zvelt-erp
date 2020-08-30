<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterOrdersAddUID extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function(Blueprint $table) {
            $table->string('uid')->unique();
            $table->string('state')->default('unprocessed');
            $table->unsignedBigInteger('reject_id')->nullable();
            $table->foreign('reject_id')->references('id')->on('rejects');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function(Blueprint $table) {
            $table->dropColumns(['uid', 'state', 'reject_id']);
        });
    }
}
