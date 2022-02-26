<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
    $id = $this->id ?: 'NULL';
    $name = $this->name;
    $warehouse_id = $this->warehouse_id;
        return [
      'name'         => [
        'required',
        Rule::unique('locations')
        ->where(function ($query) use ($name, $warehouse_id) {
          return $query->where('name', $name)
          ->where('warehouse_id', $warehouse_id);
        })
      ],
            'type'         => 'required',
            'warehouse_id' => 'required|min:1|exists:warehouses,id',
        ];

    }//end rules()


}//end class
