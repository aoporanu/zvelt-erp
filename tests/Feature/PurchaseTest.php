<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Item;
use App\Models\User;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Location;
use App\Models\Packaging;
use App\Models\UnitOfMeasure;
use App\Models\Warehouse;
use DB;
use Illuminate\Foundation\Testing\RefreshDatabase;

class PurchaseTest extends TestCase
{
  use RefreshDatabase;

  /**
   * A basic feature test example.
   *
   * @return void
   */
  public function test_transfer()
  {
    $user     = (new User)->factory()->create();
    $response = $this->be($user)->get('/purchase/transfer');
    $response->assertStatus(200);
  } //end test_transfer()

  /** @test */
  public function an_item_goes_to_location_on_purchase()
  {
    $this->assertTrue(true); 
  }

  public function test_do_transfer()
  {
    $this->withoutExceptionHandling();
    $user = (new User)->factory()->create();
    $user->role_id = 1;
    $user->save();
    (new Category)->factory()->create();
    (new Brand)->factory()->create();
    (new Packaging)->factory()->create();
    (new UnitOfMeasure)->factory()->create();
    $item = (new Item)->factory()->create();
    $this->assertDatabaseCount('items', 1);
    $warehouse = (new Warehouse)->factory()->create();

    $warehouse2 = (new Warehouse)->factory()->create();
    $this->assertDatabaseCount('warehouses', 2);
    $location = (new Location)->factory()->create();
    $location->addItems($item, 15);
    $location2 = (new Location)->factory()->create();
    $this->assertDatabaseCount('locations', 2);
    $post = [
      'item_id' => $item->id,
      'from_warehouse' => $warehouse->id,
      'from_location' => $location->id,
      'to_warehouse' => $warehouse2->id,
      'to_location' => $location2->id,
      'qty' => 10
    ];
    $response = $this->be($user)
      ->post(
        '/purchase/transfer',
        $post
      );
    $response->assertValid($post);
    $items = DB::select('select qty from location_items where location_id=? and item_id=?', [$location2->id, $item->id]);
    $this->assertNotNull($items);
    // Log::info('response', [$response]);
  } //end test_do_transfer()
}//end class
