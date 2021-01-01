<?php
namespace Tests\Feature;

use App\Order;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AgentCanCreateOrder extends TestCase
{
    use RefreshDatabase;
    public function test_agent_can_create_order()
    {
        $user = User::factory()->make(['role' => 'agent']);

        $order = $user->orders->factory()->make();

        $this->assertEquals($user->id, $order->agent_id);
    }

    public function test_orders_can_be_huge()
    {
        $user = User::factory()->make(['role' => 'agent']);

        $orders = $user->orders->factory()->make(50000);
        // test mean time for each order creation, should be no more than .5 of a second
        foreach ($orders as $order) {
            // should run just like prev test
            $this->assertEquals($user->id, $order->agent_id);
        }
    }
}
