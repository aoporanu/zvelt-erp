<?php

use Illuminate\Support\Facades\Route;

Route::apiResource('login', '\App\Http\Controllers\API\AuthAPIController@login');

Route::apiResource('register', '\App\Http\Controllers\API\AuthAPIController@register');

Route::apiResource('ledgers', '\App\Http\Controllers\API\LedgerAPIController');

Route::apiResource('receipts', '\App\Http\Controllers\API\ReceiptAPIController');
Route::geT('/purchases/latest', '\App\Http\Controllers\API\PurchaseAPIController@latest');
Route::get('/orders/latest', '\App\Http\Controllers\API\OrderAPIController@latest');
Route::get('/orders', '\App\Http\Controllers\API\OrderAPIController@index');
Route::post('orders', '\App\Http\Controllers\API\OrderAPIController@store');
Route::get('/orders/{order}', '\App\Http\Controllers\API\OrderAPIController@show');
Route::put('/orders/{order}', '\App\Http\Controllers\API\OrderAPIController@update');
Route::delete('/orders/{order}', '\App\Http\Controllers\API\OrderAPIController@destroy');
Route::get('/orders/process/{order}', '\App\Http\Controllers\API\OrderAPIController@process');
// Route::apiResource('orders', '\App\Http\Controllers\API\OrderAPIController');
Route::get('/purchases/generate-nir/{purchase}', '\App\Http\Controllers\API\PurchaseAPIController@generateNir');

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

Route::apiResource('warehouses', '\App\Http\Controllers\API\WarehouseAPIController');

Route::apiResource('locations', '\App\Http\Controllers\API\LocationAPIController');

Route::apiResource('suppliers', '\App\Http\Controllers\API\SupplierAPIController');

Route::apiResource('settings', '\App\Http\Controllers\SettingsController');

Route::apiResource('batches', '\App\Http\Controllers\API\BatchesAPIController');