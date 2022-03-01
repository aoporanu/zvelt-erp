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
      Schema::table('incoming_invoices', function (Blueprint $table) {
        $table->integer('item_id')->after('created_by');
        $table->integer('qty')->default(1)->after('item_id');
        $table->integer('price')->default('0')->after('qty');
        $table->string('batch_id')->default('')->after('price');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('incoming_invoices', function (Blueprint $table) {
        $table->dropIfExists('item_id');
        $table->dropIfExists('qty');
        $table->dropIfExists('price');
        $table->dropIfExists('batch_id');
      });
    }
};
