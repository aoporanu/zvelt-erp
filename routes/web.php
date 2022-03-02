<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PurchasesController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\WarehouseController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\PackagingController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\InvoicesController;
use App\Http\Controllers\FinancialsController;
use App\Http\Controllers\HomeController;

Route::middleware('auth')->group(function () {
  Route::resource('items', ItemController::class);
  Route::get(
    'purchase/stocks',
    [PurchasesController::class, 'stocks']
  )->name('purchase.stocks');
  Route::get(
    'purchase/transfer',
    [
      PurchasesController::class,
      'transfer',
    ]
  )->name('purchase.transfer');
  Route::post(
    'purchase/scan',
    [PurchasesController::class, 'scan']
  )->name('purchase.scan');
  Route::post(
    'purchase/transfer',
    [
      PurchasesController::class,
      'doTransfer',
    ]
  )->name('purchase.transfer');
  Route::post('purchase/addItems', [PurchasesController::class, 'addItems']);
  Route::resource('purchase', PurchasesController::class);
  Route::resource('warehouse', WarehouseController::class);
  Route::resource('locations', LocationController::class);
  Route::resource('packagings', PackagingController::class);
  Route::resource('suppliers', SupplierController::class);
  Route::resource('invoices', InvoicesController::class);
  Route::resource('financials', FinancialsController::class);
});
Route::resource('items', ItemController::class);
Auth::routes();
