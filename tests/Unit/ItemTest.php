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
    public function test_item_can_be_created()
    {
        $this->creates_models();

        $this->assertDatabaseCount('items', 1);
    }//end test_item_can_be_created()


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
    }//end test_item_can_be_purchased()


    public function test_item_can_be_deleted()
    {
        $this->withoutExceptionHandling();
        $this->creates_models();
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

    public function test_item_can_have_discounts()
    {
        $this->withoutExceptionHandling();
        $this->creates_models();
        $item = (new Item)->first();
        Discount::factory()->create();
        $discount = Discount::first();
        DB::insert('insert into brand_discounts(discount_id, brand_id, discount_type, created_at, updated_at) values(?, ?, ?, ?, ?)', [$discount->id, $item->brand->id, $discount->type, Carbon::now(), Carbon::now()]);
        $discounts = $item->brand->discounts->all();
        $this->assertNotEmpty($discounts);

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
    }//end creates_models()
}//end class
