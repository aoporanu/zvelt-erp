<?php

namespace App\Http\Controllers\API;

use App\Visitation;
use App\Http\Resources\VisitationCollection;
use App\Http\Resources\VisitationResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\RouteStoreRequest;

class RouteAPIController extends Controller
{
    public function index()
    {
        return new VisitationCollection(Visitation::paginate());
    }

    public function show(Visitation $route)
    {
        return new VisitationResource($route->load([]));
    }

    public function store(RouteStoreRequest $request)
    {
        $route = Visitation::where([
            ['shop_id', '=', $request->client_id],
            ['user_id', '=', $request->user_id],
            ['day_of_week', '=', $request->day_of_week]
        ])->count();

        if ((int)$route > 0) {
            return response()->json(['success' => false, 'message' => 'The rout already exists'], 409);
        }

        return new VisitationResource(Visitation::create($request->all()));
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
