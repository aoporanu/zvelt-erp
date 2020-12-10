<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Item;
use Illuminate\Database\Eloquent\SoftDeletes;

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
