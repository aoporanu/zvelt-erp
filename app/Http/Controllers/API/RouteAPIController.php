<?php

namespace App\Http\Controllers\API;

use App\Visitation;
use App\Http\Resources\VisitationCollection;
use App\Http\Resources\VisitationResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\RouteStoreRequest;
use Illuminate\Support\Facades\DB;

class RouteAPIController extends Controller
{
    public function index()
    {
        return new VisitationCollection(Visitation::paginate(10));
    }

    public function show(Visitation $route)
    {
        return new VisitationResource($route->load([]));
    }

    public function store(RouteStoreRequest $request)
    {
        return new VisitationResource(Visitation::firstOrCreate($request->all()));
    }

    public function update(Request $request, Visitation $route)
    {
        $route->update($request->all());

        return new VisitationResource($route);
    }

    public function destroy(Request $request, Visitation $route)
    {
        $route->delete();

        return response()->noContent();
    }
}
