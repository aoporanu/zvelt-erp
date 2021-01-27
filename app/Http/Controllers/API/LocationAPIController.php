<?php

namespace App\Http\Controllers\API;

use App\Location;
use App\Http\Resources\LocationCollection;
use App\Http\Resources\LocationResource;
use App\Http\Requests\LocationStoreRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LocationAPIController extends Controller
{


    public function index()
    {
        return new LocationCollection(Location::paginate());

    }//end index()


    public function show(Location $location)
    {
        return new LocationResource($location->load(['warehouse']));

    }//end show()


    public function store(LocationStoreRequest $request)
    {
        return new LocationResource(Location::create($request->all()));

    }//end store()


    public function update(LocationStoreRequest $request, Location $location)
    {
        $location->update($request->all());

        return new LocationResource($location);

    }//end update()


    public function destroy(Request $request, Location $location)
    {
        $location->delete();

        return response()->noContent();

    }//end destroy()


}//end class
