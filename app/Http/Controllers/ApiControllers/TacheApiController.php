<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Models\Tache;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\Projet;
use App\Models\Intervenant;
use Barryvdh\DomPDF\Facade\Pdf;

class TacheApiController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index(): JsonResponse
    {
        $taches = Tache::with('projet', 'intervenant')->get();
        $projets = Projet::all();
        $intervenants = Intervenant::all();

        return response()->json(['taches' => $taches, 'projets' => $projets, 'intervenants' => $intervenants], 200);
    }

    public function show(Tache $tache): JsonResponse
    {
        return response()->json(['tache' => $tache], 200);
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'nom' => 'required',
            'projet_id' => 'required',
            'intervenant_id' => 'required',
            'description' => 'required',
            'temps_passe' => 'required',
            'date_debut' => 'required',
            'date_fin' => 'required',
            'cout' => ''
        ]);

        $tache = Tache::create($request->all());

        $intervenant = Intervenant::find($request->intervenant_id);

        $intervenant->update(['is_paid' => false]);

        // Calcul du coût
        $coutBase = $intervenant->tarif_horaire * $tache->temps_passe;
        if ($intervenant->pourcentage_reduction) {
            $reduction = ($coutBase * $intervenant->pourcentage_reduction) / 100;
            $coutBase -= $reduction;
        }

        $tache->cout = $coutBase;

        $tache->save();

        return response()->json(['tache' => $tache], 201);
    }

    public function update(Request $request, Tache $tache): JsonResponse
    {
        $request->validate([
            'nom' => 'required',
            'projet_id' => 'required',
            'intervenant_id' => 'required',
            'description' => 'required',
            'temps_passe' => 'required',
            'date_debut' => 'required',
            'date_fin' => 'required',
            'cout' => ''
        ]);

        $tache->update($request->all());

        $intervenant = Intervenant::find($request->intervenant_id);

        // Calcul du coût
        $coutBase = $intervenant->tarif_horaire * $tache->temps_passe;
        if ($intervenant->pourcentage_reduction) {
            $reduction = ($coutBase * $intervenant->pourcentage_reduction) / 100;
            $coutBase -= $reduction;
        }

        $tache->cout = $coutBase;

        $tache->save();

        return response()->json(['tache' => $tache], 200);
    }

    public function destroy(Tache $tache): JsonResponse
    {
        $tache->delete();

        return response()->json(null, 204);
    }

    public function previewPdf(Tache $tache)
    {
        $pdf = Pdf::loadView('pages.tache.pdf', compact('tache'));
        return $pdf->stream('tache-' . $tache->nom . '.pdf');
    }

    public function downloadPdf(Tache $tache)
    {
        $pdf = Pdf::loadView('pages.tache.pdf', compact('tache'));
        return $pdf->download('tache-' . $tache->nom . '.pdf');
    }

}
