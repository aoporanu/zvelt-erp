<?php

namespace App\Services;

use App\Models\Invoice;
use App\Models\Item;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\PurchasedItems;
use App\Models\Shop;
use App\Models\Visitation;
use \Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use function array_key_exists;

class OrderService
{


  public static function createOrder($items, $shop_id, $user_id, $warehouse_id): JsonResponse
  {
    if (empty($items)) {
      return response()->json(['success' => false, 'message' => 'The order doesn\'t have any items, it will be deleted', 500]);
    }

    $shop       = Shop::find($shop_id);
    $invoice    = Invoice::where('agent_id', $user_id)->get(['id', 'amount_left'])->toArray();
    $visitation = Visitation::where(
      [
        [
          'user_id',
          '=',
          $user_id,
        ],
        [
          'shop_id',
          '=',
          $shop_id,
        ],
      ]
    )->first();
    if (is_null($visitation)) {
      return response()->json(['success' => false, 'message' => 'no route for this agent to the shop'], 400);
    }

    if ($visitation->ceil < 0) {
      return response()->json(['success' => false, 'message' => 'You have no ceil left for any order to this shop. Please try to cash some of your overdue invoices.'], 400);
    }

    if (
      $shop->invoices
      && $invoice
      && $invoice[0]['amount_left']
      && $visitation
      && $visitation->ceil > $invoice[0]['amount_left']
    ) {
      return response()->json(['success' => false, 'message' => 'This client has already been invoiced by you. Please cash the invoice first'], 400);
    }

    $total = 0.0;
    foreach ($items as $item) {
      $itemR         = Item::firstOrFail($item['item_id']);
      $purchasedItem = DB::select(
        'select id, selling_cost from item_purchase where item_id=? and location_id=? and warehouse_id=?',
        [
          $item['item_id'],
          $item['location_id'],
          $warehouse_id,
        ]
      );
      if (!$purchasedItem) {
        return response()->json(
          [
            'success'        => false,
            'message'        => 'There wasn\'t any purchase for this item',
            'purchased_item' => $item,
          ],
          400
        );
      } else {
        $purchItem = PurchasedItems::first($purchasedItem[0]->id);
        if ($item['qty'] > $purchItem->qty) {
          return response()->json(
            [
              'status'  => false,
              'message' => 'Unable to add the current item to your order. The quantity on stock is less than what you\'re ordering',
            ],
            400
          );
        }

        if ($purchItem->qty === 0) {
          return response()->json(
            [
              'status'  => false,
              'message' => 'Unable to add the current item to your order, it\'s out of stock',
            ],
            400
          );
        }

        $purchItem->qty -= $item['qty'];
        $purchItem->save();
        // fire event to notify the frontend to update
        // the stocks for the current item
        if ($shop->hasDiscountFor($itemR)) {
          if (sizeof($shop->discounts) < 2) {
            $item['sale_cost'] = ($item['sale_cost'] * ((100 - $shop->discounts->value) / 100));
          } else {
            foreach ($shop->discounts as $discount) {
              $item['sale_cost'] = ($item['sale_price'] * ((100 - $discount->value) / 100));
            }
          }
        } else {
          $item['sale_cost'] = $purchasedItem[0]->selling_cost;
        }

        $total += ($item['sale_cost'] * $item['qty']);
      } //end if

      OrderItem::insert($item);
    } //end foreach

    $order        = Order::insert();
    $order->total = $total;
    $order->save();

    $visitation->ceil -= $order->total;
    if (($visitation->ceil - $order->total) >= 0) {
      $visitation->save();
      DB::commit();
    }

    return $order;
  } //end createOrder()

  public function storeOrder(array $validatedRequest): bool
  {
    unset($validatedRequest['location_id']); // we don't need location_id for now
    if (!array_key_exists('agent_id', $validatedRequest)) {
      // assume the agent_id is the user_id key
      $validatedRequest['agent_id'] = $validatedRequest['user_id'];
    }
    try {
      $order = (new Order)->insert($validatedRequest);
    } catch (Exception $ex) {
      dump($ex->getMessage());
      return false;
    }
    return true; // wishful thinking for now
  }
}//end class
