<?php

use App\Models\Item;
use App\Models\Location;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLocationItemsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('location_items', function (Blueprint $table) {
      $table->id();
      $table->foreignIdFor(Location::class);
      $table->foreignIdFor(Item::class);
      $table->integer('qty')->default(0);
      $table->integer('price')->default(0);
      $table->softDeletes();
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
    Schema::dropIfExists('location_items');
  }
}
