<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ItemResource extends JsonResource
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
            'price' => $this->price,
            'category' => new CategoryCollection($this->whenLoaded('category')),
            'sku' => $this->sku,
            'weight' => $this->weight,
            'brand' => new BrandCollection($this->whenLoaded('brand')),
            'options' => new OptionsCollection($this->whenLoaded('options')),
            'purchases' => new PurchaseCollection($this->whenLoaded('purchases'))
        ]
    }
}
