<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('b_invoices', function (Blueprint $table) {
      $table->id();
      $table->string('serial_no')->default('');
      $table->integer('qty')->default(0);
      $table->integer('price')->default(0);
      $table->string('batch_id')->default('');

      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('b_invoices');
  }
};
