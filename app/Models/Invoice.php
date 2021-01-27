<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Concerns\HasEvents;

/**
 * @method   static where(string $string, $user_id)
 * @method   static factory()
 * @method   static inRandomOrder()
 * @method   static first()
 * @property mixed       total
 * @property float|mixed amount_left
 * @property mixed       shop_id
 * @property mixed       client
 */
class Invoice extends Model
{
    use SoftDeletes, HasFactory, HasEvents;

    /**
     * @var string[]
     */
    protected $fillable = [
        'order_id',
        'shop_id',
        'client_id',
        'agent_id',
    ];


    public function order()
    {
        return $this->belongsTo(Order::class);

    }//end order()


    public function shop()
    {
        return $this->belongsTo(Shop::class);

    }//end shop()


    public function client()
    {
        return $this->belongsTo(Client::class);

    }//end client()


    public function agent()
    {
        return $this->belongsTo(User::class);

    }//end agent()


    public function receipts()
    {
        return $this->hasMany(Receipt::class);

    }//end receipts()


    /**
     * Cash an invoice, either the full invoice, or a part of the sum
     * if the second parameter is present.
     * USAGE: $invoice->cash($user) for the whole invoice
     * OR
     *          $invoice->cash($user, $invoice->total, $invoice->total - the_amount_to_be_deducted from total
     *
     * @param $user
     * @param float $sum
     *
     * @return boolean
     */
    public function cash($user, float $sum=0.0)
    {
        $ledger  = Ledger::where('user_id', $user->id)->firstOrCreate(['user_id' => $user->id, 'type' => 'asd', 'balance' => 0.00]);
        $receipt = Receipt::where('ledger_id', $ledger->id)->where('invoice_id', null)->firstOrCreate(['ledger_id' => $ledger->id, 'shop_id' => $this->shop_id, 'invoice_id' => $this->id, 'observations' => 'Balance for invoice #'.$this->id, 'amount' => ($this->total - $sum)]);
        if ($sum !== 0.0) {
            $this->amount_left = ($this->total - $sum);
            $this->save();
        }

        if ($receipt) {
            return true;
        }

        return false;

    }//end cash()


}//end class
