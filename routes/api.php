<?php

use Illuminate\Http\Request;
use Illuminate\Routing\Router;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
* Snippet for a quick route reference
*/
Route::get('/', function (Router $router) {
    return collect($router->getRoutes()->getRoutesByMethod()["GET"])->map(function($value, $key) {
        return url($key);
    })->values();   
});

Route::apiResource('suppliers', '\App\Http\Controllers\API\SupplierAPIController');

Route::apiResource('ledgers', '\App\Http\Controllers\API\LedgerAPIController');

Route::apiResource('receipts', '\App\Http\Controllers\API\ReceiptAPIController');

Route::apiResource('warehouses', '\App\Http\Controllers\API\WarehouseAPIController');

Route::apiResource('locations', '\App\Http\Controllers\API\LocationAPIController');

Route::apiResource('purchases', '\App\Http\Controllers\API\PurchaseAPIController');

Route::apiResource('purchasedItems', '\App\Http\Controllers\API\PurchasedItemsAPIController');

Route::apiResource('orderedItems', '\App\Http\Controllers\API\OrderItemAPIController');

Route::apiResource('orders', '\App\Http\Controllers\API\OrderAPIController');