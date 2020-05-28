<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Option extends Model
{
    protected $fillable = [
        'name',
        'item_id'
    ];

    /**
     * @return BelongsTo
     */
    public function item()
    {
        return $this->belongsTo(Item::class);
    }

    public function values()
    {
        return $this->hasMany(OptionValue::class);
    }
}
