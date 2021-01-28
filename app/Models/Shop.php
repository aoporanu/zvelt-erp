<?php
namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

/**
 * @method static find($shop_id)
 * @method static inRandomOrder()
 * @method static factory()
 */
class Shop extends Model
{
    use SoftDeletes, HasFactory;

    protected $fillable = [
        'name',
        'identifier',
        'lat',
        'lng',
        'address',
        'client_id',
        'city',
        'state',
        'country',
    ];


    /**
     * @return mixed
     */
    public function client()
    {
        return $this->belongsTo(Client::class);

    }//end client()

    /**
     * @return belongsToMany
     */
    public function discounts()
    {
        return $this->belongsToMany(Discount::class)->withPivot(['value', 'brand_id']);

    }//end discounts()


    public function hasDiscountFor(Item $item)
    {
        $discount = DB::select('select id,value from discount_shop where shop_id=? and brand_id=?', [$this->id, $item->brand->id]);
        // dd($discount);
        return 0;

    }//end hasDiscountFor()


    public function invoices()
    {
        return $this->hasMany(Invoice::class);

    }//end invoices()


}//end class
