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
            'item'                      => 'required|array|min:1',
            'item.*.item_name'          => 'required|string|min:3',
            'item.*.item_qty'           => 'required|integer|min:1',
            'item.*.purchase_price'     => 'required',
            'item.*.expiration_date'    => 'required|date',
            'item.*.lot'                => 'required'
        ];
    }
}
