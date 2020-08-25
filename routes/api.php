<?php

use Illuminate\Http\Request;
use Illuminate\Routing\Router;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'Api\AuthController@login');

Route::post('register', 'Api\AuthController@register');

Route::post('store-item', 'ItemController@store');

Route::post('category', 'CategoriesController@store');

Route::get('get-item/{item}', 'ItemController@show');

Route::get('categories', 'CategoriesController@index');

Route::get('packagings', 'PackagingController@index');

Route::post('packaging', 'PackagingController@store');

Route::get('brands', 'BrandsController@index');

Route::post('brand', 'BrandsController@store');

Route::get('clients', 'ClientController@index');

Route::post('create-client', 'ClientController@store');

Route::apiResource('purchases', '\App\Http\Controllers\API\PurchaseAPIController');

Route::apiResource('purchasedItems', '\App\Http\Controllers\API\PurchasedItemsAPIController');