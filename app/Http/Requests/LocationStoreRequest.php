<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LocationStoreRequest extends FormRequest
{

  protected $errorBag = 'location';

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
            'name'         => 'required|min:4|unique:locations,name',
            'type'         => 'required',
            'warehouse_id' => 'required|min:1|exists:warehouses,id',
        ];

    }//end rules()


}//end class
