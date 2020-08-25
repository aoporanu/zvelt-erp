<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PurchaseStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'purchase_id' => 'required|unique:purchases',
            'value' => 'required',
            'total' => 'required',
            'for_invoice' => 'required',
            'items' => 'required',
            'items.*.purchase_id' => 'required|same:purchase_id',
            'items.*.item_id' => 'required|exists:items,id',
            'items.*.purchase_cost' => 'required',
            'items.*.selling_cost' => 'required',
            'items.*.qty' => 'required|min:1',
            'items.*.lot' => 'required',
            'items.*.location_id' => 'required|exists:locations,id'
        ];
    }
}
