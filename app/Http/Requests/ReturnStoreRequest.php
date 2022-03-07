<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReturnStoreRequest extends FormRequest
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
      'bom_serial' => 'required',
      'items.*.item_id' => 'required|exists:items,id',
      'items.*.qty' => 'required|integer',
      'items.*.price' => 'required|integer',
      'items.*.location_id' => 'required|exists:locations,id',
      'created_by' => 'required',
    ];
  }
}
