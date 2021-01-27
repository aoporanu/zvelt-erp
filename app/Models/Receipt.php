<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @method firstOrCreate()
 * @method create(array $array)
 * @method static where(string $string, $id)
 */
class Receipt extends Model
{
    use SoftDeletes, HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'ledger_id',
        'shop_id',
        'invoice_id',
        'observations',
        'amount',
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
     * Get the Ledger for the Receipt.
     */
    public function ledger()
    {
        return $this->belongsTo(Ledger::class);

    }//end ledger()


    public function invoice()
    {
        return $this->belongsTo(Invoice::class);

    }//end invoice()


    /**
     * Cut a receipt for the user's invoice
     *
     * @param  Invoice $invoice
     * @param  float   $sum
     * @return boolean
     */
    public function cutFor(Invoice $invoice, float $sum=0.0)
    {
        try {
            $receipt = $this->create(
                [
                    'invoice_id'   => $invoice->id,
                    'shop_id'      => $invoice->shop_id,
                    'observations' => 'asd',
                    'amount'       => 0.0 ? $invoice->total : $sum,
                ]
            );
            if ($sum !== 0.0) {
                $invoice->amount_left = ($invoice->total - $sum);
                $invoice->save();
            }

            $ledger           = Ledger::where('id', $receipt->ledger_id)->firstOrCreate(['type' => 'asd', 'user_id' => $invoice->agent_id, 'balance' => $receipt->amount]);
            $ledger->balance += $receipt->amount;
            return true;
        } catch (\Exception $ex) {
            echo $ex->getMessage();
            return false;
        }//end try

    }//end cutFor()


}//end class
