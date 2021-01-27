<?php

namespace Tests\Unit;

use Carbon\Carbon;
use Tests\TestCase;
use App\Models\Shop;
use App\Models\User;
use App\Models\Order;
use App\Models\Client;
use App\Models\Invoice;
use App\Models\Warehouse;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Testing\RefreshDatabase;

class OrderTest extends TestCase
{
    use RefreshDatabase;


    /**
     * @test
     */
    public function it_tests_if_an_order_can_be_created_with_outstanding_invoice()
    {
        $this->withoutExceptionHandling();
        (new User)->factory()->create();
        (new Client)->factory()->create();
        (new Shop)->factory()->create();
        (new Warehouse)->factory()->create();
        (new Order)->factory()->create();
        (new Invoice)->factory()->create();
        $invoice = (new Invoice)->first();
        $this->assertDatabaseCount('orders', 1);
        $invoice->created_at = Carbon::now()->subDays(3);
        $invoice->save();
        $order = Order::create(
            [
                'uid'          => (123 - 1121231),
                'user_id'      => User::first()->id,
                'agent_id'     => User::first()->id,
                'client_id'    => Client::first()->id,
                'shop_id'      => Shop::first()->id,
                'deliverer_id' => User::first()->id,
                'total'        => '326.29',
                'weight'       => '32.93',
                'warehouse_id' => Warehouse::first()->id,
                'deleted_at'   => null,
                'payment_due'  => 7,
                'derrogated'   => 0,
            ]
        );
        // $this->assertFalse($order);
        $this->assertDatabaseCount('orders', 1);
    }//end it_tests_if_an_order_can_be_created_with_outstanding_invoice()


    /**
     * @test
     */
    public function it_tests_if_an_order_status_changes()
    {
        $this->withoutExceptionHandling();
        (new User)->factory()->create();
        (new Client)->factory()->create();
        (new Shop)->factory()->create();
        (new Warehouse)->factory()->create();
        (new Order)->factory()->create();
        $this->assertDatabaseCount('orders', 1);
        $order = (new Order)->first();
        $this->assertEquals('pending', $order->status);
    }//end it_tests_if_an_order_status_changes()


    /**
     * @test
     */
    public function it_tests_if_an_order_can_be_created_if_it_is_derrogated()
    {
        $this->withoutExceptionHandling();
        (new User)->factory()->create();
        (new Client)->factory()->create();
        (new Shop)->factory()->create();
        (new Warehouse)->factory()->create();
        (new Order)->factory()->create();
        (new Invoice)->factory()->create();
        $invoice = (new Invoice)->first();
        $this->assertDatabaseCount('orders', 1);
        $invoice->created_at = Carbon::now()->subDays(3);
        $invoice->save();
        $order               = (new Order)->factory()->create();
        $order->payment_due  = 7;
        $order->derrogated   = 1;
        $order->client->ceil = 0.00;
        $order->save();
        $this->assertEquals(1, $order->derrogated);
        $this->assertDatabaseCount('orders', 2);
    }//end it_tests_if_an_order_can_be_created_if_it_is_derrogated()


    /**
     * @test
     */
    public function it_tests_if_order_is_added_to_logs_on_deletion()
    {
        $this->withoutExceptionHandling();
        (new User)->factory()->create();
        (new Client)->factory()->create();
        (new Shop)->factory()->create();
        (new Warehouse)->factory()->create();
        (new Order)->factory()->create();
        $order = Order::first();
        $order->delete();
        $order = Order::where('id', 1)->get();
        $this->assertSoftDeleted('orders', $order->toArray());
        $this->assertDatabaseCount('logs', 1);
        DB::table('logs')->truncate();
    }//end it_tests_if_order_is_added_to_logs_on_deletion()


    /**
     * @test
     */
    public function it_tests_if_order_can_be_forcefully_deleted()
    {
        // DB::table('logs')->truncate();
        $this->withoutExceptionHandling();
        (new User)->factory()->create();
        (new Client)->factory()->create();
        (new Shop)->factory()->create();
        (new Warehouse)->factory()->create();
        (new Order)->factory()->create();
        $order = Order::first();
        $order->forceDelete();
        $this->assertDeleted('orders', $order->toArray());
        $this->assertDatabaseCount('logs', 2);
    }//end it_tests_if_order_can_be_forcefully_deleted()
}//end class
