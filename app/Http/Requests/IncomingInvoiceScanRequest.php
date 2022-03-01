<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use function auth;

class IncomingInvoiceScanRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize()
  {
    if (auth()->check() && auth()->user()->role_id === 2) {
      return true;
    }
    return false;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules()
  {
    return [
      'serial_no' => 'required',
      'created_by' => 'required|exists:users,id',
      'items.*.item_id' => 'required|exists:items,id',
      'items.*.qty' => 'required|integer',
      'items.*.price' => 'required|integer',
      'items.*.batch_id' => 'required|string'
    ];
  }
}
