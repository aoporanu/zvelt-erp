<?php

namespace Tests\Unit;

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
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class PurchaseTest extends TestCase
{
    use RefreshDatabase;
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

    /**
     * @test
     */
    public function it_tests_if_a_purchased_item_can_be_moved_between_locations()
    {
        $this->create_models();
        (new Purchase)->factory()->create();
        (new Warehouse)->factory()->create();
        Location::factory()->create();
        PurchasedItems::factory()->times(10)->create();
        $this->assertDatabaseCount('purchased_items', 10);
        $purchase = (new Purchase)->first();
        $warehouse = (new Warehouse)->first();
        $warehouse1 = (new Warehouse)->factory()->create();
        DB::table('locations')
            ->insert(
                [
                    'name' => 'OTB1',
                    'type' => 'asd',
                    'warehouse_id' => $warehouse1->id,
                    'created_at'    => now(),
                    'updated_at'    => now()
                ]
            );
        $location = Location::first();
        $location1 = (new Location)->where(
            'id',
            '!=',
            1
        )->first();
        $purchase->moveStock(
            $warehouse,
            $warehouse1,
            $location,
            $location1,
            5
        );
        $purchase1 = DB::select(
            'select * from purchased_items where location_id = ?',
            [$location1->id]
        );

        $this->assertCount(5, $purchase1);
    }

    /**
     * @test
     */
    public function it_tests_if_return_is_false_if_there_are_fewer_rows_in_the_purchasedItems_table_than_count()
    {
        $this->create_models();
        (new Purchase)->factory()->create();
        (new Warehouse)->factory()->create();
        (new Location)->factory()->create();
        $count = 5;
        $toMove = 6;
        PurchasedItems::factory()->times($count)->create();
        $purchase = (new Purchase)->inRandomOrder()->first();
        $warehouse = (new Warehouse)->inRandomOrder()->first();
        $warehouse1 = (new Warehouse)->factory()->create();
        DB::table('locations')
            ->insert(
                [
                    'name' => 'OTB1',
                    'type' => 'asd',
                    'warehouse_id' => $warehouse1->id,
                    'created_at'    => now(),
                    'updated_at'    => now()
                ]
            );
        $location = (new Location)->where(
            'id',
            1
        )
            ->first();
        $location1 = (new Location)->where(
            'id',
            '!=',
            1
        )
            ->first();
        $result = $purchase->moveStock(
            $warehouse,
            $warehouse1,
            $location,
            $location1,
            $toMove
        );
        $purchasedItems = PurchasedItems::all();
        $this->assertNotEquals(count($purchasedItems), $toMove);
        $this->assertFalse($result);
    }

    public function test_logs_updated_when_purchase_is_deleted()
    {
        $this->create_models();
        (new Purchase)->factory()->create();

        $this->assertDatabaseCount('purchases', 1);
        $user = (new User)->factory()->create();
        $this->be($user);
        $purchase = Purchase::first();
        $purchase->delete();
        $logs = DB::select('select * from logs');
        $this->assertDatabaseCount('logs', 4);
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
