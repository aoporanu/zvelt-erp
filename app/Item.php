<?php

namespace App;

use App\Category;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * @method static paginate()
 * @method static create(array $all)
 * @method static firstOrFail(mixed $item_id)
 * @method static get(array)
 */
class Item extends Model
{
    use SoftDeletes, HasFactory;
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
