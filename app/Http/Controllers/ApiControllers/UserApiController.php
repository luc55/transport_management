<?php

namespace App\Http\Controllers\ApiControllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class UserApiController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index(): JsonResponse
    {
        $users = User::all();
        return response()->json(['users' => $users], 200);
    }

    public function show(User $user): JsonResponse
    {
        return response()->json(['user' => $user], 200);
    }

    public function store(Request $request): JsonResponse
    {
        $user = User::create($request->all());
        return response()->json(['user' => $user], 201);
    }

    public function update(Request $request, User $user): JsonResponse
    {
        $user->update($request->all());
        return response()->json(['user' => $user], 200);
    }

    public function destroy(User $user): JsonResponse
    {
        $user->delete();
        return response()->json(null, 204);
    }
}
