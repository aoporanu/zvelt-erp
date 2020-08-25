<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = [
        'identifier',
        'name',
        'address',
        'lat',
        'lng',
        'owner_name',
        'owner_phone',
        'city',
        'state',
        'country'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function shops()
    {
        return $this->hasMany(Shop::class);
    }
}
