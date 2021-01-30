<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Shop;
use App\Models\User;
use App\Models\Order;
use App\Models\Client;
use App\Models\Discount;
use App\Models\Warehouse;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ClientTest extends TestCase
{
    use RefreshDatabase;
    
    public function test_client_can_have_discounts()
    {
        $client = (new Client)->factory()->create();
        $discount = (new Discount)->factory()->create();
        $this->assertDatabaseCount('clients', 1);
        $client->discounts()->save($discount);
        $this->assertDatabaseCount('discounts_client', 1);
    }

    public function test_client_discounts_stack_to_order_discounts()
    {
        $this->withoutExceptionHandling();
        (new User)->factory()->create();
        (new Client)->factory()->create();
        (new Shop)->factory()->create();
        (new Warehouse)->factory()->create();
        (new Order)->factory()->create();
        (new Discount)->factory()->create();
        $order = Order::first();
        $discount = Discount::first();
        DB::insert('insert into discounts_order (order_id, discount_id) values (?, ?)', [$order->id, $discount->id]);
        $order->save();
        $this->assertDatabaseMissing(
            'orders', 
            [
                'id' => $order->id, 
                'total' => (double)$order->total - (double)$discount->amount
            ]
        );
        $this->assertNotEmpty($order->discounts);
        $this->assertDatabaseHas('discounts_order', ['order_id' => $order->id]);
        $client = (new Client)->first();
        $discount = (new Discount)->factory()->create();
        $this->assertDatabaseCount('clients', 1);
        $client->discounts()->save($discount);
        $this->assertDatabaseCount('discounts_client', 1);
        
    }
}
