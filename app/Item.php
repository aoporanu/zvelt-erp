<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Category;

class Item extends Model
{
    protected $fillable = [
        'name', 'vat', 'price', 'category_id', 'sku'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
