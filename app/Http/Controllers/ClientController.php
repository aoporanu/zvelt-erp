<?php

namespace App\Http\Controllers;

use App\Client;
use App\Http\Requests\ClientStoreRequest;
use App\Http\Requests\ClientUpdateRequest;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ClientController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  public function index()
  {
    $clients = Client::all();

    if ($clients->count() < 1) {
      return response()->json(['success' => false, 'message' => 'No clients to display']);
    }

    return response()->json(['success' => true, 'clients' => $clients, 'message' => 'Client database is loaded']);
  } //end index()


  /**
   * Show the form for creating a new resource.
   *
   * @return Response
   */
  public function create()
  {
    if (!request()->expectsJson()) {
      return view('clients.create');
    }
  } //end create()


  /**
   * Store a newly created resource in storage.
   *
   * @param  ClientStoreRequest $request
   * @return void
   */
  public function store(ClientStoreRequest $request)
  {
    $client = Client::create($request->all());
    if ($client->save()) {
      return response()->json(['success' => true, 'message' => 'Safely saved to database']);
    }

    return response()->json(['success' => false, 'message' => 'We couldn\'t save the resource']);
  } //end store()


  /**
   * Display the specified resource.
   *
   * @param  integer $id
   * @return Response
   */
  public function show($id)
  {
    $client = Client::findOrFail($id);

    return response()->json(['success' => true, 'client' => $client]);
  } //end show()


  /**
   * Update the specified resource in storage.
   *
   * @param  Request $request
   * @param  integer $id
   * @return Response
   */
  public function update(ClientUpdateRequest $request, $id)
  {
    $client = Client::findOrFail($id);
    if (request()->expectsJson()) {
      $client->update($request->validated());
      return response()->json(['success' => true, 'Resource was updated']);
    } else {
      $client->update($request->validated());
      Toastr::success('Resource was updated', 'INFO', ['positionClass' => 'toast-top-center']);
      return view('clients.index');
    }
  }
  //end update()


  /**
   * Remove the specified resource from storage.
   *
   * @param  integer $id
   */
  public function destroy($id)
  {
    $client = Client::findOrFail($id);
    if (request()->expectsJson()) {
      $client->delete();
      return response()->json(['success' => 'true', 'Resource was deleted']);
    } else {
      $client->delete();
      Toastr::success('Resource was deleted', 'INFO', ['positionClass' => 'toast-top-center']);
      return view('clients.index');
    }
  } //end destroy()


}//end class
