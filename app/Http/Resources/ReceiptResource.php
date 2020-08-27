<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReceiptResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'ledger_id' => $this->ledger_id,
            'shop_id' => $this->shop_id,
            'invoice_id' => $this->invoice_id,
            'observations' => $this->observations,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'ledger' => new LedgerResource($this->whenLoaded('ledger'))
        ];
    }
}
