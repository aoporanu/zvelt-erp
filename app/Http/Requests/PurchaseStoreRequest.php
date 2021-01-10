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
    public function authorize(): bool
    {
        return true;
//        return auth()->user()->can('store-order', $this->order);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'purchase_id'               => 'required',
            'for_invoice'               => 'required|unique:purchases,for_invoice',
            'supplier_id'               => 'required|exists:suppliers,id',
            'value'                     => 'required',
            'total'                     => 'required',
            'discount'                  => 'required',
            'item.*.item_name'          => 'required|string',
            'item.*.item_qty'           => 'required|integer|min:1',
            'item.*.purchase_price'     => 'required',
            'item.*.expiration_date'    => 'required|date',
            'item.*.lot'                => 'required',
            'item.*.upc'                => 'required',
            'item.*.ean'                => 'required',
            'item.*.location_id'        => 'required|exists:locations,id',
            'item.*.warehouse_id'       => 'required|exists:warehouses,id',
        ];
    }

    public function messages()
    {
        return [
            'purchase_id.required'  => 'The purchase id was not generated ...',
            'for_invoice.required'  => 'The invoice is not present',
            'for_invoice.unique'    => 'A purchase was already made for that ID',
            'supplier_id.required'  => 'The supplier was not filled',
            'supplier_id.exists'    => 'The supplier does not exist in the suppliers table',
            'value.required'        => 'The purchase value was not calculated',
            'item.required'         => 'The purchased items list must contain at least one item'
        ];
    }
}
