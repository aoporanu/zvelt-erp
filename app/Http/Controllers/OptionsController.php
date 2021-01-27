<?php

namespace App\Http\Controllers;

use App\Option;
use App\OptionValue;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class OptionsController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $options = Option::with(['values', 'item'])->all();

        if ($options->count() < 1) {
            return response()->json(['success' => false, 'message' => 'You have no options in the database']);
        }

        return response()->json(['success' => true, 'options' => $options]);

    }//end index()


    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {

    }//end create()


    /**
     * Store a newly created resource in storage.
     *
     * @param  Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $option = Option::create(
            [
                'name'    => $request->get('name'),
                'item_id' => $request->get('item_id'),
            ]
        );

        if (!$option) {
            return response()->json(['success' => false, 'message' => 'Could not save option']);
        }

        // save option values
        foreach ($request->get('value') as $value) {
            $values = OptionValue::where('name', $value->name)->first();
            if ($values->count() < 1) {
                $values = OptionValue::create(['name' => $value->name]);
            }

            $option->values()->save($values);
        }

        return response()->json(['success' => true, 'message' => 'Option saved successfully']);

    }//end store()


    /**
     * Display the specified resource.
     *
     * @param  integer $id
     * @return JsonResponse
     */
    public function show($id)
    {
        $option = Option::with(['values', 'item'])->where('id', $id)->get();

        if ($option->count() < 1) {
            return response()->json(['success' => false, 'message' => 'The selected option does not exist']);
        }

        return response()->json(['success' => true, 'option' => $option]);

    }//end show()


    /**
     * Show the form for editing the specified resource.
     *
     * @param  integer $id
     * @return Response
     */
    public function edit($id)
    {

    }//end edit()


    /**
     * Update the specified resource in storage.
     *
     * @param  Request $request
     * @param  integer $id
     * @return JsonResponse
     */
    public function update(Request $request, $id)
    {
        $option = Option::with(['values'])->findOrFail($id);

        $option->update($request->all());
        if ($option->save()) {
            return response()->json(['success' => true, 'message' => 'The selected option has been updated', 'option' => $option]);
        }

        return response()->json(['success' => false, 'message' => 'The option could not be updated']);

    }//end update()


    /**
     * Remove the specified resource from storage.
     *
     * @param  integer $id
     * @return JsonResponse
     */
    public function destroy($id)
    {
        if (Option::destroy($id)) {
            return response()->json(['success' => true, 'message' => 'Option deleted']);
        }

        return response()->json(['success' => false, 'message' => 'Option could not be deleted']);

    }//end destroy()


}//end class
