<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    protected $fillable = [
        'name',
        'identifier',
        'lat',
        'lng',
        'address',
        'client_id',
        'city',
        'state',
        'country'
    ];

    /**
     * @return mixed
     */
    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function discounts()
    {
        return $this->belongsToMany(Discount::class)->withPivot(['value', 'brand_id']);
    }
}
