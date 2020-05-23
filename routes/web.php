<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('items', 'ItemController@index');
Route::get('item/create', 'ItemController@create');
Route::post('item/create', 'ItemController@store');
Route::get('item/{id}', 'ItemController@show');
Route::get('item/edit/{id}', 'ItemController@edit');
Route::post('item/update', 'ItemController@update');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
