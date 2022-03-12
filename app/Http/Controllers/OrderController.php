<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderDeleteRequest;
use App\Http\Requests\OrderStoreRequest;
use App\Http\Requests\OrderUpdateRequest;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Models\Order;
use Symfony\Component\HttpFoundation\Response;
use App\Services\OrderService;

class OrderController extends BaseController
{
  use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

  private OrderService $_service;

  public function __construct(OrderService $orderService)
  {
    $this->_service = $orderService;
  }

  public function index(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
  {
    $pageTitle = __('orders.pages.index.title');
    return view('orders.index', compact('pageTitle'));
  }


  public function create(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
  {
    $pageTitle = __('orders.pages.create.title');
    return view('orders.create', compact('pageTitle'));
  }


  public function store(OrderStoreRequest $request)
  {
    $validatedRequest = $request->validated();
    if ($this->_service->storeOrder($validatedRequest)) {
      return response()->noContent(Response::HTTP_CREATED);
    } else {
      return response()->noContent(Response::HTTP_FOUND);
    }
  }


  public function show(Order $order)
  {
    $pageTitle = __('orders.pages.show.title');
    return view('orders.show', compact('order', 'pageTitle'));
  }


  public function edit(Order $order)
  {
    $pageTitle = __('orders.pages.edit.title');
    return view('orders.edit', compact('order', 'pageTitle'));
  }


  public function update(OrderUpdateRequest $request, Order $order)
  {
  }

  public function destroy(OrderDeleteRequest $request, Order $order)
  {
    $order->delete();

    return response()->noContent();
  }
}//end class
