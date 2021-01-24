<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PurchasedItemsResource extends JsonResource
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
            'purchase_id' => $this->purchase_id,
            'item_id' => $this->item_id,
            'value' => $this->value,
            'location' => $this->location,
            'total' => $this->total,
            'qty' => $this->qty,
            'vat' => $this->vat,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
