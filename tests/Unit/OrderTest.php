<?php

namespace Tests\Unit;

use App\Models\Client;
use App\Models\Invoice;
use App\Models\Order;
use App\Models\Shop;
use App\Models\User;
use App\Models\Warehouse;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class OrderTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function it_tests_if_an_order_can_be_created_with_outstanding_invoice()
    {
        $this->withoutExceptionHandling();
        User::factory()->create();
        Client::factory()->create();
        Shop::factory()->create();
        Warehouse::factory()->create();
        Order::factory()->create();
        Invoice::factory()->create();
        $invoice = Invoice::first();
        $this->assertDatabaseCount('orders', 1);
        $invoice->created_at = Carbon::now()->subDays(3);
        $invoice->save();
        $order = Order::factory()->create();
        $order->payment_due = 7;
        $order->client->ceil = 0.00;
        $order->save();
        $this->assertDatabaseCount('orders', 1);
    }

    /**
     * @test
     */
    public function it_tests_if_an_order_status_changes()
    {
        $this->withoutExceptionHandling();
        User::factory()->create();
        Client::factory()->create();
        Shop::factory()->create();
        Warehouse::factory()->create();
        Order::factory()->create();
        $this->assertDatabaseCount('orders', 1);
        $order = Order::find(1)->get();
        $this->assertEquals('initial', $order->status);
    }
}
