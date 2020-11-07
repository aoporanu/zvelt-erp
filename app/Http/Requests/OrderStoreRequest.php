<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderStoreRequest extends FormRequest
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
            'uid' => 'required|unique:orders',
            'user_id' => 'required|exists:users,id',
            'client_id' => 'required|exists:clients,id',
            'shop_id' => 'required|exists:shops,id',
            'deliverer_id' => 'required|exists:users,id',
            'total' => 'required|numeric',
            'weight' => 'required|numeric',
            'warehouse_id' => 'required|exists:warehouses,id'
        ];
    }
}
