<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @method static get(string $string, string $string1)
 * @method static inRandomOrder()
 */
class Brand extends Model
{
    use HasFactory;

    public function discounts()
    {
        return $this->belongsToMany(Discount::class, 'brand_discounts')
            ->withTimestamps()
            ->withPivot(['discount_type', 'discount_id', 'brand_id']);
    }
}//end class
