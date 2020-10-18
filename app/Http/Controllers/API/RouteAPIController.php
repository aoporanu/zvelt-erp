<?php

namespace App\Http\Controllers\API;

use App\Route;
use App\Http\Resources\RouteCollection;
use App\Http\Resources\RouteResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\RouteStoreRequest;

class RouteAPIController extends Controller
{
    public function index()
    {
        return new RouteCollection(Route::paginate());
    }

    public function show(Route $route)
    {
        return new RouteResource($route->load([]));
    }

    public function store(RouteStoreRequest $request)
    {
        return new RouteResource(Route::create($request->all()));
    }

    public function update(Request $request, Route $route)
    {
        $route->update($request->all());

        return new RouteResource($route);
    }

    public function destroy(Request $request, Route $route)
    {
        $route->delete();

        return response()->noContent();
    }
}
