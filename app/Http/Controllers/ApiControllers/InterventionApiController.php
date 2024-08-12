<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Models\Intervention;
use App\Models\Type_intervention;
use App\Models\Projet;
use App\Models\Intervenant;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class InterventionApiController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index(): JsonResponse
    {
        $interventions = Intervention::with('type_intervention', 'projet')->get();
        $typesIntervention = Type_intervention::all();
        $projets = Projet::all();
        $intervenants = Intervenant::all();

        return response()->json([
            'interventions' => $interventions,
            'types_intervention' => $typesIntervention,
            'projets' => $projets,
            'intervenants' => $intervenants
        ], 200);
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'type_intervention_id' => 'required',
            'projet_id' => 'required',
            'intervenant_id' => 'required',
            'description' => 'required',
            'temps_passe' => 'required',
            'date' => 'required',
            'cout' => '',
        ]);

        $intervention = Intervention::create($request->all());

        $intervenant = Intervenant::find($request->intervenant_id);
        $intervenant->update(['is_paid' => false]);

        // Calcul du coût
        $coutBase = $intervenant->tarif_horaire * $intervention->temps_passe;
        if ($intervenant->pourcentage_reduction) {
            $reduction = ($coutBase * $intervenant->pourcentage_reduction) / 100;
            $coutBase -= $reduction;
        }

        $intervention->cout = $coutBase;

        $intervention->save();

        return response()->json(['intervention' => $intervention], 201);
    }

    public function show(Intervention $intervention): JsonResponse
    {
        return response()->json(['intervention' => $intervention], 200);
    }

    public function update(Request $request, Intervention $intervention): JsonResponse
    {
        $request->validate([
            'type_intervention_id' => 'required',
            'projet_id' => 'required',
            'intervenant_id' => 'required',
            'description' => 'required',
            'temps_passe' => 'required',
            'date' => 'required',
            'cout' => '',
        ]);

        $intervention->update($request->all());

        $intervenant = Intervenant::find($request->intervenant_id);

        // Calcul du coût
        $coutBase = $intervenant->tarif_horaire * $intervention->temps_passe;
        if ($intervenant->pourcentage_reduction) {
            $reduction = ($coutBase * $intervenant->pourcentage_reduction) / 100;
            $coutBase -= $reduction;
        }
        $intervenant->update(['is_paid' => false]);
        $intervention->cout = $coutBase;

        $intervention->save();

        return response()->json(['intervention' => $intervention], 200);
    }

    public function destroy(Intervention $intervention): JsonResponse
    {
        $intervention->delete();

        return response()->json(null, 204);
    }
}
