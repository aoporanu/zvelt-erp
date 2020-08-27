<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LocationResource extends JsonResource
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
            'name' => $this->name,
            'type' => $this->type,
            'warehouse_id' => $this->warehouse_id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'warehouse' => new WarehouseResource($this->whenLoaded('warehouse'))
        ];
    }
}
