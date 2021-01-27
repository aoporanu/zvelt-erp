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

    }//end index()


    public function show(Visitation $route)
    {
        return new VisitationResource($route->load([]));

    }//end show()


    public function store(RouteStoreRequest $request)
    {
        return new VisitationResource(Visitation::firstOrCreate($request->all()));

    }//end store()


    public function update(Request $request, Visitation $route)
    {
        $route->update($request->all());

        return new VisitationResource($route);

    }//end update()


    public function destroy(Request $request, Visitation $route)
    {
        $route->delete();

        return response()->noContent();

    }//end destroy()


}//end class
