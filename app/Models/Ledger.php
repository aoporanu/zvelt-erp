<?php
/**
 * The ledger file
 * php version ^8.0
 *
 * @category ERP
 * @package  Sap-Killer
 * @author   Squiz Pty Ltd <products@squiz.net>
 * @license  http://opensource.org/licenses/gpl-license.php  GNU Public License
 * @link     http://zvelt-erp.com
 */
namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * The ledger model
 *
 * @category ERP
 * @package  Sap-Killer
 * @author   Adi Oporanu <aoporanu@gmail.com>
 * @license  http://opensource.org/licenses/gpl-license.php  GNU Public License
 * @link     http://zvelt-erp.com
 * @method   static inRandomOrder()
 * @method   static where(string $string, $ledger_id)
 */
class Ledger extends Model
{
    use SoftDeletes, HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'type',
        'user_id',
        'balance',
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
     * Get the Receipts for the Ledger.
     *
     * @return hasMany Receipt(s)
     */
    public function receipts()
    {
        return $this->hasMany(Receipt::class);

    }//end receipts()


    /**
     * Belongs to user relationship
     *
     * @return belongsTo User
     */
    public function user()
    {
        return $this->belongsTo(User::class);

    }//end user()


}//end class
