<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
