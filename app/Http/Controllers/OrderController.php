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
    return view('orders.index');
  }


  public function create(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application
  {
    return view('orders.create');
  }


  public function store(OrderStoreRequest $request)
  {
    $validatedRequest = $request->validated();
    if ($this->_service->storeOrder($validatedRequest)) {
      return Response::HTTP_CREATED;
    }
    return Response::HTTP_FOUND;
  }


  public function show(Order $order)
  {
    return view('items.show', compact('order'));
  }


  public function edit(Order $order)
  {
    return view('items.edit', compact('order'));
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
