<?php

namespace App\Http\Controllers\ApiControllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Type_intervention ;
use Illuminate\Http\JsonResponse;

class TypeInterventionApiController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index(): JsonResponse
    {
        $typeInterventions = Type_intervention ::all();
        return response()->json(['type_interventions' => $typeInterventions], 200);
    }

    public function show(Type_intervention  $type_intervention): JsonResponse
    {
        return response()->json(['type_intervention' => $type_intervention], 200);
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'type' => 'required',
            'description' => 'required',
        ]);

        $type_intervention = Type_intervention ::create($request->all());
        return response()->json(['type_intervention' => $type_intervention], 201);
    }

    public function update(Request $request, Type_intervention  $type_intervention): JsonResponse
    {
        $request->validate([
            'type' => 'required',
            'description' => 'required'
        ]);

        $type_intervention->update($request->all());

        return response()->json(['type_intervention' => $type_intervention], 200);
    }

    public function destroy(Type_intervention  $type_intervention): JsonResponse
    {
        $type_intervention->delete();
        return response()->json(null, 204);
    }
}
