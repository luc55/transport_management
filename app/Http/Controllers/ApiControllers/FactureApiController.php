<?php

namespace App\Http\Controllers\ApiControllers;


use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use App\Models\Intervenant;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;
use App\Mail\FactureMail;
use Barryvdh\DomPDF\Facade\Pdf;


class FactureApiController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function listeIntervenant(): JsonResponse
    {
        $intervenants = Intervenant::all();
        return response()->json(['intervenants' => $intervenants], 200);
    }

    public function paiement(Intervenant $intervenant): JsonResponse
    {
        $intervenant->load('interventions', 'taches');
        $montant_total = $intervenant->interventions->sum('cout') + $intervenant->taches->sum('cout');
        $intervenant->update(['is_paid' => true]);
        
        // Envoyez un e-mail de confirmation de paiement si nécessaire
        Mail::to($intervenant->email)->send(new FactureMail($intervenant));
        
        return response()->json(['message' => 'Paiement confirmé avec succès'], 200);
    }

    public function downloadPdf(Intervenant $intervenant)
{
    $intervenant->load('interventions', 'taches');
    $montant_total = $intervenant->interventions->sum('cout') + $intervenant->taches->sum('cout');
    $pdf = PDF::loadView('pages.facture.pdf', compact('intervenant', 'montant_total'));
    
    // Générer le nom de fichier PDF
    $filename = 'facture-' . $intervenant->nom . '.pdf';
    
    // Sauvegarder le PDF localement
    $pdfPath = storage_path('pdf/' . $filename);
    $pdf->save($pdfPath);
    
    // Renvoyer le PDF en tant que réponse HTTP
    return Response::download($pdfPath, $filename);
}
}
