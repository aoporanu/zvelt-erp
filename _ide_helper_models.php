<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App{
/**
 * App\Batch
 *
 * @method static firstOrNew(mixed $lot)
 * @property int $id
 * @property string $name
 * @property int $from_qty
 * @property int $to_qty
 * @property string $expiry_date
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $qty
 * @property-read \App\PurchasedItems|null $purchasedItem
 * @method static \Illuminate\Database\Eloquent\Builder|Batch newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Batch newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Batch query()
 * @method static \Illuminate\Database\Eloquent\Builder|Batch whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Batch whereExpiryDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Batch whereFromQty($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Batch whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Batch whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Batch whereQty($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Batch whereToQty($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Batch whereUpdatedAt($value)
 */
	class Batch extends \Eloquent {}
}

namespace App{
/**
 * App\Brand
 *
 * @method static get(string $string, string $string1)
 * @property int $id
 * @property string $name
 * @property string $identifier
 * @property string $address
 * @property string $cui
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Brand newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Brand newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Brand query()
 * @method static \Illuminate\Database\Eloquent\Builder|Brand whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Brand whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Brand whereCui($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Brand whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Brand whereIdentifier($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Brand whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Brand whereUpdatedAt($value)
 */
	class Brand extends \Eloquent {}
}

namespace App{
/**
 * App\Category
 *
 * @method static get(string $string, string $string1)
 * @property int $id
 * @property string $name
 * @property string $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Item[] $items
 * @property-read int|null $items_count
 * @method static \Illuminate\Database\Eloquent\Builder|Category newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Category newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Category query()
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereUpdatedAt($value)
 */
	class Category extends \Eloquent {}
}

namespace App{
/**
 * App\Client
 *
 * @property int $id
 * @property string $identifier
 * @property string $name
 * @property string $owner_name
 * @property string $owner_phone
 * @property string $address
 * @property string $lng
 * @property string $lat
 * @property string $city
 * @property string $state
 * @property string $country
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Shop[] $shops
 * @property-read int|null $shops_count
 * @method static \Illuminate\Database\Eloquent\Builder|Client newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Client newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Client query()
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereIdentifier($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereLat($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereLng($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereOwnerName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereOwnerPhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereState($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereUpdatedAt($value)
 */
	class Client extends \Eloquent {}
}

namespace App{
/**
 * App\Discount
 *
 * @property int $id
 * @property string $name
 * @property float $amount
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Discount newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Discount newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Discount query()
 * @method static \Illuminate\Database\Eloquent\Builder|Discount whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Discount whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Discount whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Discount whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Discount whereUpdatedAt($value)
 */
	class Discount extends \Eloquent {}
}

namespace App{
/**
 * App\Invoice
 *
 * @property int $id
 * @property int $client_id
 * @property int $user_id
 * @property int $order_id
 * @property int $shop_id
 * @property float $total
 * @property float $amount_left
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\User $agent
 * @property-read \App\Client $client
 * @property-read \App\Order $order
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Receipt[] $receipts
 * @property-read int|null $receipts_count
 * @property-read \App\Shop $shop
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice query()
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereAmountLeft($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereOrderId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereShopId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Invoice whereUserId($value)
 */
	class Invoice extends \Eloquent {}
}

namespace App{
/**
 * App\Item
 *
 * @method static paginate()
 * @method static create(array $all)
 * @property int $id
 * @property string $name
 * @property string $vat
 * @property float $price
 * @property int $sku
 * @property int $category_id
 * @property string $unit_of_measure
 * @property string $packaging
 * @property string $per_packaging
 * @property int $brand_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Brand $brand
 * @property-read \App\Category $category
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Option[] $options
 * @property-read int|null $options_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Purchase[] $purchases
 * @property-read int|null $purchases_count
 * @method static \Illuminate\Database\Eloquent\Builder|Item newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Item newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Item query()
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereBrandId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item wherePackaging($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item wherePerPackaging($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereSku($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereUnitOfMeasure($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereVat($value)
 */
	class Item extends \Eloquent {}
}

namespace App{
/**
 * App\Ledger
 *
 * @property int $id
 * @property string $type
 * @property int $user_id
 * @property string $balance
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Receipt[] $receipts
 * @property-read int|null $receipts_count
 * @property-read \App\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|Ledger newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Ledger newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Ledger query()
 * @method static \Illuminate\Database\Eloquent\Builder|Ledger whereBalance($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ledger whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ledger whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ledger whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ledger whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ledger whereUserId($value)
 */
	class Ledger extends \Eloquent {}
}

namespace App{
/**
 * App\Location
 *
 * @property int $id
 * @property string $name
 * @property string $type
 * @property int $warehouse_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Warehouse $warehouse
 * @method static \Illuminate\Database\Eloquent\Builder|Location newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Location newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Location query()
 * @method static \Illuminate\Database\Eloquent\Builder|Location whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Location whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Location whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Location whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Location whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Location whereWarehouseId($value)
 */
	class Location extends \Eloquent {}
}

namespace App{
/**
 * App\Option
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property int $item_id
 * @property-read \App\Item $item
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\OptionValue[] $values
 * @property-read int|null $values_count
 * @method static \Illuminate\Database\Eloquent\Builder|Option newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Option newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Option query()
 * @method static \Illuminate\Database\Eloquent\Builder|Option whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Option whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Option whereItemId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Option whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Option whereUpdatedAt($value)
 */
	class Option extends \Eloquent {}
}

namespace App{
/**
 * App\OptionValue
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property string $value
 * @property int $option_id
 * @method static \Illuminate\Database\Eloquent\Builder|OptionValue newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OptionValue newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OptionValue query()
 * @method static \Illuminate\Database\Eloquent\Builder|OptionValue whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OptionValue whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OptionValue whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OptionValue whereOptionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OptionValue whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OptionValue whereValue($value)
 */
	class OptionValue extends \Eloquent {}
}

namespace App{
/**
 * App\Order
 *
 * @property int $id
 * @property string $uid
 * @property int $user_id
 * @property int $client_id
 * @property int $shop_id
 * @property int $deliverer_id
 * @property string $total
 * @property string $weight
 * @property int $warehouse_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $state
 * @property int|null $reject_id
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\OrderItem[] $orderItems
 * @property-read int|null $order_items_count
 * @method static \Illuminate\Database\Eloquent\Builder|Order newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Order newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Order query()
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereDelivererId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereRejectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereShopId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereState($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereUid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereWarehouseId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereWeight($value)
 */
	class Order extends \Eloquent {}
}

namespace App{
/**
 * App\OrderItem
 *
 * @property int $id
 * @property int|null $order_id
 * @property int $item_id
 * @property string $qty
 * @property int $location_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Order|null $order
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem query()
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereItemId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereLocationId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereOrderId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereQty($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereUpdatedAt($value)
 */
	class OrderItem extends \Eloquent {}
}

namespace App{
/**
 * App\Packaging
 *
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Packaging newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Packaging newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Packaging query()
 * @method static \Illuminate\Database\Eloquent\Builder|Packaging whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Packaging whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Packaging whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Packaging whereUpdatedAt($value)
 */
	class Packaging extends \Eloquent {}
}

namespace App{
/**
 * App\Purchase
 *
 * @method static paginate(int $int)
 * @method static findOrFail(int $id)
 * @method static select(string $string)
 * @method static insert(array $validated)
 * @method static create(array $all)
 * @property int $id
 * @property string $purchase_id
 * @property string $value
 * @property string $total
 * @property string $discount
 * @property string $for_invoice
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $supplier_id
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Item[] $items
 * @property-read int|null $items_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\PurchasedItems[] $purchasedItems
 * @property-read int|null $purchased_items_count
 * @property-read \App\Supplier $supplier
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase query()
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereDiscount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereForInvoice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase wherePurchaseId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereSupplierId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Purchase whereValue($value)
 */
	class Purchase extends \Eloquent {}
}

namespace App{
/**
 * App\PurchasedItems
 *
 * @method static where(string $string, mixed $item_id)
 * @property-read \App\Batch $batch
 * @property-read \App\Item $item
 * @property-read \App\Purchase $purchase
 * @method static \Illuminate\Database\Eloquent\Builder|PurchasedItems newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PurchasedItems newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PurchasedItems query()
 */
	class PurchasedItems extends \Eloquent {}
}

namespace App{
/**
 * App\Receipt
 *
 * @property int $id
 * @property int|null $ledger_id
 * @property int $shop_id
 * @property int $invoice_id
 * @property string $observations
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Invoice $invoice
 * @property-read \App\Ledger|null $ledger
 * @method static \Illuminate\Database\Eloquent\Builder|Receipt newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Receipt newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Receipt query()
 * @method static \Illuminate\Database\Eloquent\Builder|Receipt whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Receipt whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Receipt whereInvoiceId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Receipt whereLedgerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Receipt whereObservations($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Receipt whereShopId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Receipt whereUpdatedAt($value)
 */
	class Receipt extends \Eloquent {}
}

namespace App{
/**
 * App\Setting
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Setting newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Setting newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Setting query()
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereUpdatedAt($value)
 */
	class Setting extends \Eloquent {}
}

namespace App{
/**
 * App\Shop
 *
 * @property int $id
 * @property string $name
 * @property string $identifier
 * @property string $lat
 * @property string $lng
 * @property string $address
 * @property int $client_id
 * @property string $city
 * @property string $state
 * @property string $country
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Client $client
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Discount[] $discounts
 * @property-read int|null $discounts_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Invoice[] $invoices
 * @property-read int|null $invoices_count
 * @method static \Illuminate\Database\Eloquent\Builder|Shop newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Shop newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Shop query()
 * @method static \Illuminate\Database\Eloquent\Builder|Shop whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shop whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shop whereClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shop whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shop whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shop whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shop whereIdentifier($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shop whereLat($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shop whereLng($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shop whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shop whereState($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shop whereUpdatedAt($value)
 */
	class Shop extends \Eloquent {}
}

namespace App{
/**
 * App\Supplier
 *
 * @method static get()
 * @property int $id
 * @property string $uid
 * @property string $name
 * @property string $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Item[] $items
 * @property-read int|null $items_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Purchase[] $purchases
 * @property-read int|null $purchases_count
 * @method static \Illuminate\Database\Eloquent\Builder|Supplier newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Supplier newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Supplier query()
 * @method static \Illuminate\Database\Eloquent\Builder|Supplier whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Supplier whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Supplier whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Supplier whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Supplier whereUid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Supplier whereUpdatedAt($value)
 */
	class Supplier extends \Eloquent {}
}

namespace App{
/**
 * App\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Passport\Client[] $clients
 * @property-read int|null $clients_count
 * @property-read \App\Ledger|null $ledger
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Passport\Token[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

namespace App{
/**
 * App\Visitation
 *
 * @property int $id
 * @property int $user_id
 * @property int $shop_id
 * @property string $day_of_week
 * @property string $payment
 * @property float $ceil
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Visitation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Visitation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Visitation query()
 * @method static \Illuminate\Database\Eloquent\Builder|Visitation whereCeil($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Visitation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Visitation whereDayOfWeek($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Visitation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Visitation wherePayment($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Visitation whereShopId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Visitation whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Visitation whereUserId($value)
 */
	class Visitation extends \Eloquent {}
}

namespace App{
/**
 * App\Warehouse
 *
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Location[] $locations
 * @property-read int|null $locations_count
 * @method static \Illuminate\Database\Eloquent\Builder|Warehouse newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Warehouse newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Warehouse query()
 * @method static \Illuminate\Database\Eloquent\Builder|Warehouse whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Warehouse whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Warehouse whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Warehouse whereUpdatedAt($value)
 */
	class Warehouse extends \Eloquent {}
}

