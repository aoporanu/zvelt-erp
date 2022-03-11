<?php

namespace Tests\Feature;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Item;
use App\Models\Location;
use App\Models\Packaging;
use App\Models\UnitOfMeasure;
use App\Models\User;
use App\Models\Warehouse;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;
use Illuminate\Support\Facades\DB;

class ReturnInvoiceTest extends TestCase
{
  use RefreshDatabase;

  public function createApplication()
  {
    return parent::createApplication();
  }

  /**
   * @test
   */
  public function an_item_can_be_returned()
  {
    $this->withoutExceptionHandling();
    $user = (new User())->factory()->create();
    $user->role_id = 2;
    $user->save();
    $warehouse = (new Warehouse)->factory()->create();
    $location = (new Location)->factory()->create();
    $category = (new Category)->factory()->create();
    $brand = (new Brand)->factory()->create();
    $unitOfMeasure = (new UnitOfMeasure)->factory()->create();
    $packaging = (new Packaging)->factory()->create();
    $item = (new Item)->factory()->create();
    $qty = DB::select('select qty from location_items where location_id = ? and item_id = ?', [$location->id, $item->id]);
    $this->assertEmpty($qty);
    $post = [
      'bom_serial' => Str::uuid(),
      'items' => [
        0 => [
          'item_id' => 1,
          'qty' => 32,
          'price' => 1500,
          'batch_id' => Str::uuid(),
          'location_id' => $location->id
        ]
      ],
      'created_by' => $user->id
    ];
    $response = $this->be($user)
      ->post('/returns/store', $post);

    $qtyAfter = DB::select('select qty from location_items where location_id=? and item_id=?', [$location->id, $item->id]);
    $this->assertNotEquals($qty, $qtyAfter);
    $post2 = [
      'bom_serial' => Str::uuid(),
      'items' => [
        0 => [
          'item_id' => $item->id,
          'qty' => 36,
          'price' => 1500,
          'batch_id' => Str::uuid(),
          'location_id' => $location->id
        ]
      ],
      'created_by' => $user->id
    ];

    $response->assertValid();
    $response->assertStatus(Response::HTTP_CREATED);
    $response2 = $this->be($user)
      ->post('/returns/store', $post2);
    $qtySecondPost = DB::select('select qty from location_items where location_id=? and item_id=?', [$location->id, $item->id]);
    $response2->assertValid();
    $response2->assertStatus(Response::HTTP_CREATED);
  }
}
