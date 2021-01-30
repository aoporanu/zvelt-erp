<?php

namespace Tests;

use Carbon\Carbon;
use App\Models\Item;
use App\Models\User;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Discount;
use App\Models\Location;
use App\Models\Purchase;
use App\Models\Supplier;
use App\Models\Packaging;
use App\Models\Warehouse;
use App\Models\UnitOfMeasure;
use App\Models\PurchasedItems;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ItemTest extends TestCase
{
    use RefreshDatabase;


    public function setUp(): void
    {
        parent::setUp();
        $this->withoutExceptionHandling();
    }//end setUp()


    /**
     * @test
     */
    public function testItemCanBeCreated()
    {
        $this->createsModels();

        $this->assertDatabaseCount('items', 1);
    }//end test_item_can_be_created()


    /**
     * @test
     */
    public function testItemCanBePurchased()
    {
        $this->withoutExceptionHandling();
        $this->createsModels();
        Supplier::factory()->create();
        Purchase::factory()->create();
        Warehouse::factory()->create();
        Location::factory()->create();
        PurchasedItems::factory()->create();

        $this->assertDatabaseCount('purchases', 1);
    }//end test_item_can_be_purchased()


    /**
     * @test
     */
    public function testItemCenBeDeleted()
    {
        $this->withoutExceptionHandling();
        $this->createsModels();
        $user = (new User)->factory()->create();
        $user->role = 'admin';
        $this->be($user);
        $item = (new Item)->first();
        $item->delete();
        $item = (new Item)->where('id', 1)->get();
        $this->assertSoftDeleted('items', $item->toArray());
        $log = DB::select('select * from logs');
        $this->assertDatabaseCount('logs', 1);
    }

    /**
     * @test
     */
    public function testItemCanHaveDiscounts()
    {
        $this->withoutExceptionHandling();
        $this->createsModels();
        $item = (new Item)->first();
        Discount::factory()->create();
        $discount = Discount::first();
        DB::insert(
            'insert into brand_discounts(
                discount_id,
                brand_id,
                discount_type,
                created_at,
                updated_at
                ) values(?, ?, ?, ?, ?)',
            [
                $discount->id,
                $item->brand->id,
                $discount->type,
                Carbon::now(),
                Carbon::now()
            ]
        );
        $discounts = $item->brand->discounts->all();
        $this->assertNotEmpty($discounts);
        $this->assertDatabaseHas(
            'brand_discounts',
            [
                'discount_id' => $discount->id
            ]
        );
    }


    /**
     *
     */
    private function createsModels(): void
    {
        Brand::factory()->create();
        UnitOfMeasure::factory()->create();
        Packaging::factory()->create();
        Supplier::factory()->create();
        Category::factory()->create();
        Item::factory()->create();
    }//end creates_models()
}//end class
