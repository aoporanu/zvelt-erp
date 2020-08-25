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
        'client_id'
    ];

    /**
     * @return mixed
     */
    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
