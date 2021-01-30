<?php

namespace App\Models;


use App\Http\Resources\OrderResource;
use App\Services\OrderService;
use Exception;
use Illuminate\Database\Eloquent\Concerns\HasEvents;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

/**
 * @method   static paginate()
 * @method   static insert($all)
 * @method   static inRandomOrder()
 * @method   static factory()
 * @method   static find(int $int)
 * @property Client       client
 * @property mixed        total
 * @property mixed        payment_due
 * @property mixed        agent_id
 * @property mixed        client_id
 * @property mixed|string status
 * @property mixed derrogated
 * @covers Order
 */
class Order extends Model
{
    use SoftDeletes, HasFactory, HasEvents;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'uid',
        'user_id',
        'client_id',
        'shop_id',
        'deliverer_id',
        'total',
        'weight',
        'warehouse_id',
        'agent_id',
        'payment_due',
        'status',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [];


    /**
     * Get the OrderItems for the Order.
     */
    public function orderItems(): HasMany
    {
        return $this->hasMany(OrderItem::class);

    }//end orderItems()


    /**
     * @return BelongsTo
     */
    public function client()
    {
        return $this->belongsTo(Client::class);

    }//end client()


    public static function storeOrder(Request $request): JsonResponse
    {
        DB::beginTransaction();
        try {
            /*
             * @noinspection PhpUndefinedFieldInspection
             */
            $order = OrderService::createOrder(
                $request->items,
                $request->shop_id,
                $request->user_id,
                $request->warehouse_id
            );
            // 3. if all's good, then proceed to ...
            return response()->json(
                [
                    'status' => true,
                    'order'  => new OrderResource($order),
                ],
                201
            );
        } catch (Exception $ex) {
            DB::rollBack();
            return response()->json(
                [
                    'success' => false,
                    'Could not commit your transaction '.$ex->getMessage()
                ],
                500
            );
        }//end try

    }//end storeOrder()


    public function discounts()
    {
        return $this->belongsToMany(Discount::class, 'discounts_order')
            ->as('discountsOrder');
    }//end discounts

    
}//end class
