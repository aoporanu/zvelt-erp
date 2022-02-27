<?php

/**
 * The transfer request file
 * php version ^8.0
 *
 * @category ERP
 * @package  Zvelt-ERP
 * @author   Squiz Pty Ltd <products@squiz.net>
 * @license  http://opensource.org/licenses/gpl-license.php  GNU Public License
 * @link     http://zvelt-erp.com
 */

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * The transfer request class
 * php version ^8.0
 *
 * @category ERP
 * @package  Zvelt-ERP
 * @author   Adi Oporanu <aoporanu@gmail.com>
 * @license  http://opensource.org/licenses/gpl-license.php  GNU Public License
 * @link     http://zvelt-erp.com
 */
class TransferPurchaseRequest extends FormRequest
{
  protected $errorBag = 'transferBag';

  /**
   * Determine if the user is authorized to make this request.
   *
   * @return boolean
   */
  public function authorize(): bool
  {
    return true;
  } //end authorize()

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules()
  {
    return [
      'item_id'       => 'required|exists:items,id',
      'from_warehose' => 'required|exists:warehouses,id',
      'from_location' => 'required|exists:locations,id',
      'to_warehouse'  => 'required|exists:warehouses,id',
      'to_location'   => 'required|exists:locations,id',
    ];
  } //end rules()
}//end class
