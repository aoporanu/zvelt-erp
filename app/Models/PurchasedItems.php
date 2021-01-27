<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @method static where(string $string, mixed $item_id)
 * @method static first($id)
 */
class PurchasedItems extends Model
{
    use SoftDeletes, HasFactory;

    protected $table = 'purchased_items';

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
        'warehouse_id',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [];


    /**
     *
     */
    public function batch()
    {
        return $this->belongsTo(Batch::class);

    }//end batch()


    public function purchase()
    {
        return $this->belongsTo(Purchase::class);

    }//end purchase()


    public function item()
    {
        return $this->belongsTo(Item::class, 'item_id', 'id');

    }//end item()


    public function location()
    {
        return $this->belongsTo(Location::class);

    }//end location()


    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class);

    }//end warehouse()


}//end class
