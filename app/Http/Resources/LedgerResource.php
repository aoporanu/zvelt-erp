<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LedgerResource extends JsonResource
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
            'id'         => $this->id,
            'type'       => $this->type,
            'user_id'    => $this->user_id,
            'balance'    => $this->balance,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'receipts'   => new ReceiptCollection($this->whenLoaded('receipts')),
        ];

    }//end toArray()


}//end class
