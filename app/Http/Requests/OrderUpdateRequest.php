<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderUpdateRequest extends FormRequest
{


    /**
     * Determine if the user is authorized to make this request.
     *
     * @return boolean
     */
    public function authorize()
    {
        return true;

    }//end authorize()


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'uid'          => 'required|unique:orders',
            'user_id'      => 'required|exists:users,id',
            'client_id'    => 'required|exists:clients,id',
            'shop_id'      => 'required|exists:shops,id',
            'deliverer_id' => 'required|exists:users,id',
            'total'        => 'required|numeric',
            'weight'       => 'required|numeric',
            'warehouse_id' => 'required|exists:warehouses,id',
        ];

    }//end rules()


}//end class
