<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    protected $fillable = [
        'due_date', 'due_amount', 'notes', 'weight'
    ];

    public function items()
    {
        return $this->belongsToMany(Item::class, 'purchased_items');
    }
}
