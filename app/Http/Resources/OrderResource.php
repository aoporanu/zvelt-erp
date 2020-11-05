<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            'uid' => $this->uid,
            'user_id' => $this->user_id,
            'client_id' => $this->client_id,
            'shop_id' => $this->shop_id,
            'deliverer_id' => $this->deliverer_id,
            'total' => $this->total,
            'weight' => $this->weight,
            'warehouse_id' => $this->warehouse_id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'order_items' => new OrderItemResource($this->orderItems),
            'state' => $this->state
        ];
    }
}
