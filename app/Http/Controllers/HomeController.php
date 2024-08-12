<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Intervenant;
use App\Models\Projet;
use App\Models\Intervention;


class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');

    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('welcome');
    }
}
