<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TransferPurchaseRequest extends FormRequest
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
    public function rules()
    {
        return [
            "item_id"           => 'required|exists:items,id',
            "from_warehose"     => 'required|exists:warehouses,id',
            "from_location"     => 'required|exists:locations,id',
            "to_warehouse"      => 'required|exists:warehouses,id',
            "to_location"       => 'required|exists:locations,id'
        ];
    }
}
