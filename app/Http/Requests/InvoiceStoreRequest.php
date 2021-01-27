<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InvoiceStoreRequest extends FormRequest
{


    /**
     * Determine if the user is authorized to make this request.
     *
     * @return boolean
     */
    public function authorize()
    {
        return false;

    }//end authorize()


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'order_id'  => 'required|min:0|exists:orders,id',
            'client_id' => 'required|min:0|exists:clients,id',
            'shop_id'   => 'required|min:0|exists:shops,id',
        ];

    }//end rules()


}//end class
