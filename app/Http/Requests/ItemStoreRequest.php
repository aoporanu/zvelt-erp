<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ItemStoreRequest extends FormRequest
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
            'name' => 'required|min:3|max:250|unique:items,name',
            'vat' => 'required|min:1|max:2',
            'price' => 'required',
            'category_id' => 'required|exists:categories,id',
            'weight' => 'required|min:1',
            'unit_of_measure' => 'required',
            'packaging' => 'required|min:1|exists:packagings,id',
            'per_packaging' => 'required|numeric'
        ];
    }
}
