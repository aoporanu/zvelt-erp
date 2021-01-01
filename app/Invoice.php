<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Multitenentable;

/**
 * @method static where(string $string, $user_id)
 */
class Invoice extends Model
{
    use SoftDeletes, Multitenantable;
    protected $fillable = [
        'order_id', 'shop_id', 'client_id', 'agent_id'
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function shop()
    {
        return $this->belongsTo(Shop::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function agent()
    {
        return $this->belongsTo(User::class);
    }

    public function receipts()
    {
        return $this->hasMany(Receipt::class);
    }
}
