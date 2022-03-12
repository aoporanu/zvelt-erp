<?php

namespace Tests\Feature;

use App\Models\Location;
use App\Models\User;
use App\Models\Shop;
use App\Models\Client;
use App\Models\Order;
use App\Models\Warehouse;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class OrderTest extends TestCase
{
  use RefreshDatabase;
  use WithFaker;

  public function createApplication()
  {
    return parent::createApplication();
  }

  protected function createUser(): User
  {
    $user = (new User)->factory()->create();
    $user->role_id = 2;
    $user->save();

    return $user;
  }

  protected function createClientWithShop(): array
  {
    $client = (new Client)->factory()->create();
    $shop = (new Shop)->factory()->create();

    return [$shop, $client];
  }

  public function createDeliverer(): User
  {
    $user = (new User)->factory()->create();
    $user->role_id = 3;
    $user->save();
    return $user;
  }

  /** @test */
  public function order_can_be_created()
  {
    $user = $this->createUser();
    $response = $this->be($user)
      ->get('/orders/create');

    $response->assertOk();
  }

  /** @test */
  public function order_can_be_stored()
  {
    $this->withoutExceptionHandling();
    $user = $this->createUser();
    $clientWithShop = $this->createClientWithShop();

    $warehouse = (new Warehouse)->factory()->create();
    $deliverer = $this->createDeliverer();
    $location = (new Location)->factory()->create();

    $post = [
      'uid' => Str::uuid(),
      'user_id' => $user->id,
      'shop_id' => $clientWithShop[0]->id,
      'client_id' => $clientWithShop[1]->id,
      'deliverer_id' => $deliverer->id,
      'warehouse_id' => $warehouse->id,
      'total' => 14512,
      'weight' => 130,
      'location_id' => $location->id
    ];
    $response = $this->be($user)
      ->post('/orders', $post);
    $this->assertDatabaseCount('orders', 1);
    $response->assertStatus(Response::HTTP_CREATED);
  }

  /** @test */
  public function order_can_be_edited()
  {
    $this->withoutExceptionHandling();
    $clientWithShop = $this->createClientWithShop();
    $deliverer = (new User)->factory()->create();
    $deliverer->role_id = 3;
    $deliverer->save();
    $user = $this->createUser();
    $warehouse = (new Warehouse)->factory()->create();
    $location = (new Location)->factory()->create();
    // create order so we can test the edit point
    $post = [
      'uid' => Str::uuid(),
      'user_id' => 1,
      'shop_id' => $clientWithShop[0]->id,
      'client_id' => $clientWithShop[1]->id,
      'deliverer_id' => $deliverer->id,
      'warehouse_id' => $warehouse->id,
      'total' => 14512,
      'weight' => 130,
      'location_id' => $location->id
    ];

    $this->be($user)
      ->post('/orders', $post);
    $this->assertDatabaseCount('orders', 1);

    $responseUnauthenticated = $this->withoutExceptionHandling()
      ->get(route('orders.edit', (new Order)->first()));
    $responseUnauthenticated->assertStatus(Response::HTTP_OK);
    $responseUnauthenticated->dump();
  }
}
