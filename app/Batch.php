<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Batch extends Model
{
    protected $fillable = [
        'name',
        'from_qty',
        'to_qty',
        'expiry_date'
    ];

    public function purchasedItem()
    {
        return $this->hasOne(PurchasedItems::class);
    }
}
