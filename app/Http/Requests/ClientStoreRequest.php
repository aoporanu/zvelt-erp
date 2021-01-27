<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClientStoreRequest extends FormRequest
{


    /**
     * Determine if the user is authorized to make this request.
     *
     * @return boolean
     */
    public function authorize()
    {
        return true;
        // for now

    }//end authorize()


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'identifier'  => 'required|min:10|max:10|unique:clients',
            'name'        => 'required|min:3|max:250|unique:clients',
            'address'     => 'required',
            'lat'         => 'required|unique:clients',
            'lng'         => 'required|unique:clients',
            'owner_name'  => 'required',
            'owner_phone' => 'required',
            'city'        => 'required',
            'state'       => 'required',
            'country'     => 'required',
        ];

    }//end rules()


    public function response(array $errors)
    {
        // Always return JSON.
        return response()->json($errors, 422);

    }//end response()


}//end class
