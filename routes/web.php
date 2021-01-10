<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::resource('items', ItemController::class);
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::resource('purchase', PurchasesController::class);

Route::resource('warehouse', WarehouseController::class);

Route::resource('locations', LocationController::class);

Route::resource('packagings', PackagingController::class);

Route::resource('suppliers', SupplierController::class);

Route::resource('invoices', InvoicesController::class);

Route::resource('financials', FinancialsController::class);