<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Multitenentable;

/**
 * @method static where(string $string, $user_id)
 * @method static factory()
 * @method static inRandomOrder()
 * @property mixed total
 * @property float|mixed amount_left
 * @property mixed shop_id
 */
class Invoice extends Model
{
    use SoftDeletes, Multitenentable, HasFactory;

    /**
     * @var string[]
     */
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

    /**
     * @param $user
     * @param float $sum
     * @return false
     */
    public function cash($user, float $sum = 0.0)
    {
        dump(['agent_id' => $this->agent_id, 'user_id' => $user->id]);
        if ($this->agent_id != $user->id)
        {
            return false;
        }

        $ledger = $user->ledger->first();
        $receipt = Receipt::where('ledger_id', $ledger->id)
            ->where('invoice_id', null)
            ->first();
        return $receipt->cutFor($this, $sum);
    }
}
