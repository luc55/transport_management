<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// group controllers by namespace
use App\Http\Controllers\ApiControllers\BlogsController;
use App\Http\Controllers\ApiControllers\AgenciesController;
use App\Http\Controllers\ApiControllers\ServicesController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
