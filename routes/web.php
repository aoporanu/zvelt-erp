<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Route::resource('purchase', PurchasesController::class);
