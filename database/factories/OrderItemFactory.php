<?php

namespace Database\Factories;

use App\Models\Item;
use App\Models\Location;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderItemFactory extends Factory
{
    protected $model = OrderItem::class;

    public function definition()
    {
        return [
            'order_id' => function () {
                return Order::inRandomOrder()->first()->id;
            },
            'item_id' => function () {
                return Item::inRandomOrder()->first()->id;
            },
            'qty' => $this->faker->digitNotNull,
            'location_id' => function () {
                return Location::inRandomOrder()->first()->id;
            },
        ];
    }
}
