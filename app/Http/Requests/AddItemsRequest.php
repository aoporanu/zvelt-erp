<?php

namespace App\Http\Requests;

use Auth;
use Illuminate\Foundation\Http\FormRequest;

class AddItemsRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize()
  {
    return Auth::check();
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules()
  {
    return [
      'id' => 'required|exists:incoming_invoices,serial_no',
      'item_id' => 'required|integer|exists:items,id',
      'qty' => 'required|integer',
      'price' => 'required|integer',
      'batch_id' => 'required'
    ];
  }
}
