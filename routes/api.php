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

Route::apiResource('routes', '\App\Http\Controllers\API\RouteAPIController');

Route::apiResource('login', '\App\Http\Controllers\API\AuthController@login');

Route::apiResource('register','\App\Http\Controllers\API\AuthController@login');

Route::apiResource('ledgers', '\App\Http\Controllers\API\LedgerAPIController');

Route::apiResource('orders', '\App\Http\Contollers\API\OrderAPIController');

Route::apiResource('orders-items', '\App\Http\Controllers\API\OrderItemController');

Route::apiResource('purchases', '\App\Http\Controllers\API\PurchaseAPIController');

Route::apiResource('purchased-items', '\App\Http\Controllers\API\PurchasedItemsAPIController');

Route::apiResource('invoices', '\App\Http\Controllers\API\InvoiceAPIController');

Route::apiResource('items', '\App\Http\Controllers\API\ItemAPIController');