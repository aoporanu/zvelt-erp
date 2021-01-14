<?php

namespace Tests\Unit;

use App\Models\Client;
use App\Models\Invoice;
use App\Models\Ledger;
use App\Models\Order;
use App\Models\Receipt;
use App\Models\Shop;
use App\Models\User;
use App\Models\Warehouse;
use Tests\TestCase;

class InvoiceTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @test
     * @return void
     */
    public function an_agent_can_cash_his_own_invoice()
    {
        $this->withoutExceptionHandling();
        User::factory()->create();
        Client::factory()->create();
        Shop::factory()->create();
        Warehouse::factory()->create();
        Order::factory()->create();
        $invoice = Invoice::factory()->create();
        Ledger::factory()->create();
        $user = User::first();
        $receipts = Receipt::factory()->times(50)->create();

        $this->assertTrue($invoice->cash($user, $invoice->total));
        $receipt = Receipt::where('invoice_id', $invoice->id)->first();
        $this->assertEquals($receipt->amount, $invoice->total);
    }

    /**
     * @test
     */
    public function an_agent_can_cash_partially_an_invoice()
    {
        $this->withoutExceptionHandling();
        User::factory()->create();
        Client::factory()->create();
        Shop::factory()->create();
        Warehouse::factory()->create();
        Order::factory()->create();
        $invoice = Invoice::factory()->create();
        Ledger::factory()->create();
        $user = User::first();
        $receipts = Receipt::factory()->times(50)->create();

        $this->assertTrue($invoice->cash($user, $invoice->total / 2));
        $receipt = Receipt::where('invoice_id', $invoice->id)->first();
        $this->assertEquals($receipt->amount, $invoice->total / 2);
        $this->assertNotNull($invoice->amount_left);
    }
}
