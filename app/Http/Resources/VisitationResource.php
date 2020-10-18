<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class VisitationResource extends JsonResource
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
            'user_id' => $this->user_id,
            'shop_id' => $this->shop_id,
            'day_of_week' => $this->day_of_week,
            'payment' => $this->payment,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
