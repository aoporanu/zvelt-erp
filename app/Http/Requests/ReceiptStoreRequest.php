<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReceiptStoreRequest extends FormRequest
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
            "ledger_id" => 'required|exists:ledgers,id',
            "shop_id" => 'required|exists:shops,id',
            "invoice_id" => "required|exists:invoices,id"
        ];
    }
}
