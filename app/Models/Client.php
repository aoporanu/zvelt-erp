<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @method static inRandomOrder()
 * @method static where(string $string, $id)
 * @property mixed ceil
 */
class Client extends Model
{
    use SoftDeletes, HasFactory;

    protected $fillable = [
        'identifier',
        'name',
        'address',
        'lat',
        'lng',
        'owner_name',
        'owner_phone',
        'city',
        'state',
        'country',
        'ceil'
    ];

    /**
     * @return HasMany
     */
    public function shops()
    {
        return $this->hasMany(Shop::class);
    }
}
