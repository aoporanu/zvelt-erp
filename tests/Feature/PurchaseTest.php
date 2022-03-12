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
    $user = $this->createAdmin();
    $response = $this->be($user)->get('/purchase/transfer');
    $response->assertStatus(200);
  } //end test_transfer()

  public function createApplication()
  {
    return parent::createApplication();
  }

  /** @test */
  public function an_incoming_invoice_can_be_scanned()
  {
    (new Category)->factory()->create();
    (new Brand)->factory()->create();
    (new Packaging)->factory()->create();
    (new UnitOfMeasure)->factory()->create();

    $this->withoutExceptionHandling();
    $user = $this->createOperator();
    $item = $this->createProduct();
    $item2 = (new Item)->factory()->create();
    /*
     * we need an array of items, each item having a price
     * a qty and a batch_id
     */
    $post = [
      'serial_no' => 'as3-wlk0iO',
      'created_by' => $user->id,
      'items' => [
        0 => [
          'item_id' => $item->id,
          'qty' => 33,
          'price' => 2930,
          'batch_id' => '1'
        ],
        1 => [
          'item_id' => $item2->id,
          'qty' => 34,
          'price' => 3012,
          'batch_id' => '1'
        ]
      ],
      'scanned' => 1
    ];
    // serial_no is required
    $response = $this->be($user)
      ->post('/purchase/scan', $post);
    $response->assertValid($post);
    $this->assertDatabaseCount('incoming_invoices', 2);
    $response->assertStatus(201);
  }

  /** @test */
  public function an_item_goes_to_location_on_purchase()
  {
    // Visit purchase route with a serial no 
    // that represents a buying invoice.
    $this->withoutExceptionHandling();
    $user = $this->createOperator();
    $item = $this->createProduct();
    DB::insert('insert into incoming_invoices(serial_no, created_by, item_id) values (?,?,?)', ['as3-wlk0iO', $user->id, $item->id]);
    $post = [
      'id' => 'as3-wlk0iO',
      'item_id' => $item->id,
      'qty' => 23,
      'price' => 2930,
      'batch_id' => 31
    ];
    $response = $this->be($user)
      ->post('/purchase/addItems', $post);
    $response->assertValid($post);

    $response->assertStatus(201);
  }

  protected function createAdmin()
  {
    $user = (new User)->factory()->create();
    $user->role_id = 1;
    $user->save();
    return $user;
  }

  protected function createOperator()
  {
    $user = (new User)->factory()->create();
    $user->role_id = 2;
    $user->save();
    return $user;
  }

  protected function createProduct()
  {
    (new Category)->factory()->create();
    (new Brand)->factory()->create();
    (new Packaging)->factory()->create();
    (new UnitOfMeasure)->factory()->create();
    $item = (new Item)->factory()->create();
    return $item;
  }

  public function test_do_transfer()
  {
    $this->withoutExceptionHandling();
    $user = $this->createAdmin();
    $item = $this->createProduct();
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
    $this->assertDatabaseCount('location_items', 1);
    $response = $this->be($user)
      ->post(
        '/purchase/transfer',
        $post
      );
    $response->assertValid($post);
  } //end test_do_transfer()
}//end class
