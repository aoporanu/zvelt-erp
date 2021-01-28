<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    
    use HasFactory;

    protected $fillable = [
        'discount_id'
    ];
    

    public function applicableTo(Item $item)
    {
        $brand = $item->brand;
        // check if there is a discount for the given brand on the current shop

    }//end applicableTo()


    public function client()
    {
        return $this->belongsToMany(Client::class, 'discounts_client');
    }


    public function order()
    {
        return $this->belongsToMany(Order::class, 'discounts_order');
    }

}//end class
