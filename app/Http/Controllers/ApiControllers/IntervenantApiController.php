<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Models\Intervenant;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class IntervenantApiController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index(): JsonResponse
    {
        $intervenants = Intervenant::all();
        return response()->json(['intervenants' => $intervenants], 200);
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'nom' => 'required',
            'adresse' => 'required',
            'tel' => 'required',
            'email' => 'required',
            'tarif_horaire' => 'required',
            'pourcentage_reduction' => '',
        ]);

        $intervenant = Intervenant::create($request->all());

        return response()->json(['intervenant' => $intervenant], 201);
    }

    public function show(Intervenant $intervenant): JsonResponse
    {
        return response()->json(['intervenant' => $intervenant], 200);
    }

    public function update(Request $request, Intervenant $intervenant): JsonResponse
    {
        $request->validate([
            'nom' => 'required',
            'adresse' => 'required',
            'tel' => 'required',
            'email' => 'required',
            'tarif_horaire' => 'required',
            'pourcentage_reduction' => '',
        ]);

        $intervenant->update($request->all());

        return response()->json(['intervenant' => $intervenant], 200);
    }

    public function destroy(Intervenant $intervenant): JsonResponse
    {
        $intervenant->delete();

        return response()->json(null, 204);
    }
}
