<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterInvoiceAddAgent extends Migration
{


    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table(
            'invoices',
            function (Blueprint $table) {
                // $table->bigInteger('agent_id');
                // $table->foreign('agent_id')->references('id')->on('users');
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
        Schema::table(
            'invoices',
            function (Blueprint $table) {
                // $table->dropForeign('agent_id');
            }
        );

    }//end down()


}//end class
