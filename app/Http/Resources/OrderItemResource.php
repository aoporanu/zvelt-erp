<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderItemResource extends JsonResource
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
            'id'          => $this->id,
            'order_id'    => $this->order_id,
            'item_id'     => $this->item_id,
            'qty'         => $this->qty,
            'location_id' => $this->location_id,
            'created_at'  => $this->created_at,
            'updated_at'  => $this->updated_at,
            'order'       => new OrderResource($this->whenLoaded('order')),
        ];

    }//end toArray()


}//end class
