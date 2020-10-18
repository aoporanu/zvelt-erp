<?php

use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;

// Route::apiResource('rute', '\App\Http\Controllers\API\RouteAPIController');

Route::apiResource('login', '\App\Http\Controllers\API\AuthAPIController@login');

Route::apiResource('register', '\App\Http\Controllers\API\AuthAPIController@register');

Route::apiResource('ledgers', '\App\Http\Controllers\API\LedgerAPIController');

Route::apiResource('orders', '\App\Http\Controllers\API\OrderAPIController');

Route::apiResource('orders-items', '\App\Http\Controllers\OrderItemController');

Route::apiResource('purchases', '\App\Http\Controllers\API\PurchaseAPIController');

Route::apiResource('purchased-items', '\App\Http\Controllers\API\PurchasedItemsAPIController');

Route::apiResource('invoices', '\App\Http\Controllers\API\InvoiceAPIController');

Route::apiResource('items', '\App\Http\Controllers\API\ItemAPIController');

Route::apiResource('packagings', '\App\Http\Controllers\API\PackagingAPIController');

Route::get('rute', '\App\Http\Controllers\API\RouteAPIController@index');

Route::post('rute', '\App\Http\Controllers\API\RouteAPIController@store');

Route::get('rute/{rute}', '\App\Http\Controllers\API\RouteAPIController@show');

Route::put('rute/{rute}', '\App\Http\Controllers\API\RouteAPIController@update');

Route::delete('rute/{rute}', '\App\Http\Controllers\API\RouteAPIController@destroy');

Route::apiResource('shops', '\App\Http\Controllers\API\ShopsAPIController');