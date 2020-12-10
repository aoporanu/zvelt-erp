<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PurchasedItems extends Model
{
    use SoftDeletes;
    protected $table = 'item_purchase';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'purchase_id',
        'item_id',
        'value',
        'location',
        'total',
        'qty',
        'vat',
        'type_id',
        'batch_id',
        'purchase_cost',
        'selling_cost',
        'lot',
        'location_id',
        'warehouse_id'
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
     *
     */
    public function batch()
    {
        return $this->belongsTo(Batch::class);
    }

    public function purchase()
    {
        return $this->belongsTo(Purchase::class);
    }

    public function item()
    {
        return $this->belongsTo(Item::class, 'item_id', 'id');
    }
}
