<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RouteStoreRequest extends FormRequest
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
            'user_id' => 'required|exists:users,id',
            'shop_id' => 'required|exists:shops,id',
            'payment' => 'required|min:1',
        ];

    }//end rules()


}//end class
