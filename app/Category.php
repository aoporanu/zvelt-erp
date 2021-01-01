<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Item;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @method static get(string $string, string $string1)
 */
class Category extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'name', 'description'
    ];

    public function items()
    {
        return $this->hasMany(Item::class);
    }
}
