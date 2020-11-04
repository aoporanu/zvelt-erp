<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Receipt extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'ledger_id', 'shop_id', 'invoice_id', 'observations'
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

    /**
     * Get the Ledger for the Receipt.
     */
    public function ledger()
    {
        return $this->belongsTo(Ledger::class);
    }

    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }
}
