<?php

namespace App\Models;

use App\Models\Item;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @method static get(string $string, string $string1)
 * @method static inRandomOrder()
 */
class Category extends Model
{
    use SoftDeletes, HasFactory;

    protected $fillable = [
        'name', 'description'
    ];

    public function items()
    {
        return $this->hasMany(Item::class);
    }
}
