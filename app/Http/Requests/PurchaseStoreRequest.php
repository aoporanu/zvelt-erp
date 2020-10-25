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
            'supplier_id' => 'required|exists:suppliers,id',
            'value' => 'required',
            'total' => 'required',
            'for_invoice' => 'required',
            'purchase_items' => 'required',
            'purchase_items.*.purchase_id' => 'required|same:purchase_id',
            'purchase_items.*.item_id' => 'required|exists:items,id',
            'purchase_items.*.purchase_cost' => 'required',
            'purchase_items.*.selling_cost' => 'required',
            'purchase_items.*.qty' => 'required|min:1',
            'purchase_items.*.lot' => 'required',
            'purchase_items.*.warehouse_id' => 'required|exists:warehouses,id',
            'purchase_items.*.location_id' => 'required|exists:locations,id'
        ];
    }
}
