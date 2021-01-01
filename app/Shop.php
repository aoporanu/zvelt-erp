<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

/**
 * @method static find($shop_id)
 */
class Shop extends Model
{
    use SoftDeletes;
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

    public function hasDiscountFor(Item $item)
    {
        $discount = DB::select('select id,value from discount_shop where shop_id=? and brand_id=?', [$this->id, $item->brand->id]);
        // dd($discount);
        return 0;
    }

    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }
}
