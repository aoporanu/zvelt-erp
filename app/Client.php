<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Client extends Model
{
    use SoftDeletes;
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
