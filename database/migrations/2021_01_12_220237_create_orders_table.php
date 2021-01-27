<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{


    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(
            'orders',
            function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->constrained();
                $table->foreignId('client_id')->constrained();
                $table->foreignId('shop_id')->constrained();
                $table->integer('uid');
                $table->foreignId('deliverer_id')->references('id')->on('users');
                $table->double('total');
                $table->double('weight');
                $table->integer('payment_due')->default(0);
                $table->foreignId('warehouse_id')->constrained();
                $table->foreignId('agent_id')->references('id')->on('users');
                $table->timestamps();
                $table->softDeletes();
                $table->string('status', 10)->default('initial');
                $table->boolean('derrogated')->default(0);
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
        Schema::dropIfExists('orders');

    }//end down()


}//end class
