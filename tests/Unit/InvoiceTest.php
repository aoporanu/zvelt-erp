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
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class InvoiceTest extends TestCase
{
  use RefreshDatabase;


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
    $user     = User::first();
    $receipts = Receipt::factory()->times(50)->create();

    $this->assertTrue($invoice->cash($user, $invoice->total));
    $receipt = Receipt::where('invoice_id', $invoice->id)->first();
    $this->assertNotNull($receipt);
  } //end an_agent_can_cash_his_own_invoice()


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
    $user     = User::first();
    $receipts = Receipt::factory()->times(50)->create();

    $this->assertTrue($invoice->cash($user, ($invoice->total / 2)));
    $receipt = Receipt::where('invoice_id', $invoice->id)->first();
    $this->assertNotNull($invoice->amount_left);
  } //end an_agent_can_cash_partially_an_invoice()


  public function test_user_can_cash_invoice()
  {
    $this->withoutExceptionHandling();
    $this->create_models();
    $user = User::factory()->create();

    $invoice = Invoice::factory()->create();
    $invoice->cash($user);
    $this->assertNotEquals($invoice->total, $invoice->amount_left);
  } //end test_user_can_cash_invoice()


  public function test_user_can_partially_cash_invoice()
  {
    $this->withoutExceptionHandling();
    $this->create_models();
    $user = User::factory()->create();

    $invoice = Invoice::factory()->create();
    $invoice->cash($user, ($invoice->total / 2));
    $this->assertNotEquals($invoice->total, $invoice->amount_left);
  } //end test_user_can_partially_cash_invoice()


  public function test_another_user_can_cash_invoice()
  {
    $this->withoutExceptionHandling();
    $this->create_models();
    $user = User::factory()->create();

    $invoice = Invoice::factory()->create();
    $user1   = User::factory()->create();
    $invoice->cash($user1);
    $ledger   = Ledger::where('user_id', $user1->id)->first();
    $receipts = Receipt::where('ledger_id', $ledger->id)->first();
    $this->assertNotEquals($invoice->total, $invoice->amount_left);
  } //end test_another_user_can_cash_invoice()


  public function test_another_user_can_partially_cash_another_invoice()
  {
    $this->withoutExceptionHandling();
    $this->create_models();
    $user = User::factory()->create();

    $invoice = Invoice::factory()->create();
    $user1   = User::factory()->create();
    $invoice->cash($user1, ($invoice->total / 2));
    $ledger   = Ledger::where('user_id', $user1->id)->first();
    $receipts = Receipt::where('ledger_id', $ledger->id)->first();
    $this->assertNotEquals($invoice->total, $invoice->amount_left);
  } //end test_another_user_can_partially_cash_another_invoice()


  /**
   * @test
   */
  public function it_tests_if_on_creating_an_invoice_the_customer_ceil_is_reduced()
  {
    $this->create_models();
    $invoice = Invoice::factory()->create();
    $this->assertNotEquals($invoice->client->ceil, $invoice->total);
  } //end it_tests_if_on_creating_an_invoice_the_customer_ceil_is_reduced()


  private function create_models(): void
  {
    User::factory()->create();
    Client::factory()->create();
    Shop::factory()->create();
    Warehouse::factory()->create();
    Order::factory()->create();
    Ledger::factory()->create();
  } //end create_models()
}//end class
