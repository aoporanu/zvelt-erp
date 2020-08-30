<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'uid', 'name', 'description'
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['created_at', 'updated_at'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        //
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        //
    ];

    public function items()
    {
        return $this->hasMany(Items::class);
    }

    public function purchases()
    {
        return $this->hasMany(Purchase::class);
    }
}
