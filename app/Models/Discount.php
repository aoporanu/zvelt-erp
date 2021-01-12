<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    public function applicableTo(Item $item)
    {
        $brand = $item->brand;
        // check if there is a discount for the given brand on the current shop
    }
}
