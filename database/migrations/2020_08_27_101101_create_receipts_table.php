<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReceiptsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(
            'receipts', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->unsignedBigInteger('ledger_id')->nullable();
                $table->foreign('ledger_id')->references('id')->on('ledgers');
                $table->unsignedBigInteger('shop_id');
                $table->unsignedBigInteger('invoice_id')->nullable();
                $table->string('observations');
                $table->double('amount')->nullable();
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
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
        Schema::dropIfExists('receipts');
    }
}
