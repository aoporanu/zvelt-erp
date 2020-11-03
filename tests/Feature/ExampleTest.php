<?php

namespace Tests\Feature;

use App\Invoice;
use App\Order;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $invoice = Invoice::factory()
            ->for(Order::factory())->create();
        $response = $this->get('/invoice/' . $invoice);

        $response->assertStatus(200);
    }
}
