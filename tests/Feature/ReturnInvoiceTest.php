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
    dump($qty);
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
    $qtyAfter = DB::select('select qty from location_items where location_id=? and item_id=?', [$location->id, $item->id]);
    // $this->assertNotSame($qtyAfter, $qty);
    dump($qtyAfter);
    $response = $this->be($user)
      ->post('/returns/store', $post);
    $response->assertValid();
    $response->assertStatus(Response::HTTP_CREATED);
  }
}
