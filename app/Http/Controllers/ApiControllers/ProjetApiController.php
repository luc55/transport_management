<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Models\Projet;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ProjetApiController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index(): JsonResponse
    {
        $projets = Projet::all();

        return response()->json(['projets' => $projets], 200);
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'nom' => 'required',
            'description' => 'required',
        ]);

        $projet = Projet::create($request->all());

        return response()->json(['projet' => $projet], 201);
    }

    public function show(Projet $projet): JsonResponse
    {
        return response()->json(['projet' => $projet], 200);
    }

    public function update(Request $request, Projet $projet): JsonResponse
    {
        $request->validate([
            'nom' => 'required',
            'description' => 'required',
        ]);

        $projet->update($request->all());

        return response()->json(['projet' => $projet], 200);
    }

    public function destroy(Projet $projet): JsonResponse
    {
        $projet->delete();

        return response()->json(null, 204);
    }
}
