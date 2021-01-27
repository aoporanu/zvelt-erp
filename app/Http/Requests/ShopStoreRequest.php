<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ShopStoreRequest extends FormRequest
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
            'name'       => 'required|unique:shops,name',
            'identifier' => 'required|unique:shops,identifier',
            'lat'        => 'required',
            'lng'        => 'required',
            'address'    => 'required',
            'client_id'  => 'required',
            'city'       => 'required',
            'state'      => 'required',
            'country'    => 'required',
        ];

    }//end rules()


}//end class
