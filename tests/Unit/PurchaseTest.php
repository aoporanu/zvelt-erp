<?php

namespace Tests\Unit;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Item;
use App\Models\Packaging;
use App\Models\Purchase;
use App\Models\Supplier;
use App\Models\UnitOfMeasure;
use Tests\TestCase;

class PurchaseTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_purchase_can_be_created()
    {
        $this->create_models();
        Purchase::factory()->create();
        $this->assertDatabaseCount('brands', 1);
        $this->assertDatabaseCount('unit_of_measures', 1);
        $this->assertDatabaseCount('packagings', 1);
        $this->assertDatabaseCount('suppliers', 1);
        $this->assertDatabaseCount('categories', 1);
        $this->assertDatabaseCount('items', 1);
        $this->assertDatabaseCount('purchases', 1);
    }

    private function create_models()
    {
        Brand::factory()->create();
        UnitOfMeasure::factory()->create();
        Packaging::factory()->create();
        Supplier::factory()->create();
        Category::factory()->create();
        Item::factory()->create();
    }
}
