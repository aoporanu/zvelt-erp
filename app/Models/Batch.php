<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @method static firstOrNew(mixed $lot)
 */
class Batch extends Model
{
    use SoftDeletes, HasFactory;

    protected $fillable = [
        'name',
        'from_qty',
        'to_qty',
        'expiry_date',
    ];


    public function purchasedItem()
    {
        return $this->hasOne(PurchasedItems::class);

    }//end purchasedItem()


}//end class
