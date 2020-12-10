<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Category;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @method static firstOrFail(mixed $item_id)
 */
class Item extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'name',
        'vat',
        'price',
        'category_id',
        'sku',
        'weight',
        'brand_id',
        'unit_of_measure',
        'packaging',
        'per_packaging'
    ];

    /**
     * @return BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * @return BelongsTo
     */
    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    /**
     * @return HasMany
     */
    public function options()
    {
        return $this->hasMany(Option::class);
    }

    /**
     * @return BelongsToMany
     */
    public function purchases()
    {
        return $this->belongsToMany(Purchase::class, 'purchased_items');
    }
}
