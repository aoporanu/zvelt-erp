<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseResource extends JsonResource
{


    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            // 'id' => $this->id,
            // 'purchase_id' => $this->purchase_id,
            'value'       => $this->value,
            'total'       => $this->total,
            'discount'    => $this->discount,
            'for_invoice' => $this->for_invoice,
            'created_at'  => $this->created_at,
            'updated_at'  => $this->updated_at,
            'items'       => PurchasedItemsResource::collection($this->items),
        ];

    }//end toArray()


}//end class
