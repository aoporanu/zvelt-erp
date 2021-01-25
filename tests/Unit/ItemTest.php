<?php

namespace Tests;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Item;
use App\Models\Location;
use App\Models\Packaging;
use App\Models\Purchase;
use App\Models\PurchasedItems;
use App\Models\Supplier;
use App\Models\UnitOfMeasure;
use App\Models\Warehouse;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ItemTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->withoutExceptionHandling();
    }

    /**
     * @test
     */
    public function test_item_can_be_created()
    {
        $this->creates_models();

        $this->assertDatabaseCount('items', 1);
    }

    /**
     * @test
     */
    public function test_item_can_be_purchased()
    {
        $this->withoutExceptionHandling();
        $this->creates_models();
        Supplier::factory()->create();
        Purchase::factory()->create();
        Warehouse::factory()->create();
        Location::factory()->create();
        PurchasedItems::factory()->create();

        $this->assertDatabaseCount('purchases', 1);
    }

    /**
     *
     */
    private function creates_models(): void
    {
        Brand::factory()->create();
        UnitOfMeasure::factory()->create();
        Packaging::factory()->create();
        Supplier::factory()->create();
        Category::factory()->create();
        Item::factory()->create();
    }
}