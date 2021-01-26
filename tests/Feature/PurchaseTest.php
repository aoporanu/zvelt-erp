<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Item;
use App\Models\User;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Location;
use App\Models\Packaging;
use App\Models\UnitOfMeasure;
use App\Models\Warehouse;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Log;

class PurchaseTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_transfer()
    {
        $user = (new User)->factory()->create();
        $response = $this->be($user)
            ->get('/purchase/transfer');
        $response->assertStatus(200);
    }

    public function test_do_transfer()
    {
        // $this->withoutExceptionHandling();
        $user = (new User)->factory()->create();
        (new Category)->factory()->create();
        (new Brand)->factory()->create();
        (new Packaging)->factory()->create();
        (new UnitOfMeasure)->factory()->create();
        (new Item)->factory()->create();
        $this->assertDatabaseCount('items', 1);
        (new Warehouse)->factory()->create();
        (new Location)->factory()->create();
        (new Location)->factory()->create();
        $response = $this->actingAs($user)
            ->withSession(['user' => 'adyopo'])
            ->post(
                '/purchase/transfer', 
                [
                    'item_id' => 1, 
                    'from_warehouse' => 1, 'from_location' => 1,
                    'to_warehouse' => 1, 'to_location' => 2
                ]
            );
            Log::info('response', [$response]);
            $response->assertStatus(302);
    }
}
