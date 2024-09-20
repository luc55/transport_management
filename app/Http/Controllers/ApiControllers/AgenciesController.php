<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Models\Agencies;
use Illuminate\Http\Request;
use Exception;

class AgenciesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $agencies = Agencies::all();
            return response()->json([
                'status' => 'success',
                'data' => $agencies
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Something went wrong'
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function create(Request $request)
    {
        try {
            $request->validate([
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'name' => 'required|',
                'description' => 'required|',
            ]);
    
            //Save image with extension in public
            $imageName = time().'.'.$request->image->extension();         
            $request->image->move(public_path('Agencygalery'), $imageName);
    
            $data = new Agencies; 
            $data->image = $imageName;     
            $data->name = $request->name;        
            $data->description = $request->description;
            $data->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Agencies created successfully'
            ], 201);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Something went wrong'
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $agencies = Agencies::find($id);
            return response()->json([
                'status' => 'success',
                'data' => $agencies
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Something went wrong'
            ], 500);
        }
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            $request->validate([
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'name' => 'required|',
                'description' => 'required|',
            ]);
    
            //Save image with extension in public
            $imageName = time().'.'.$request->image->extension();         
            $request->image->move(public_path('Agencygalery'), $imageName);
    
            $data = Agencies::find($id); 
            $data->image = $imageName;     
            $data->name = $request->name;        
            $data->description = $request->description;
            $data->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Agencies updated successfully'
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Something went wrong'
            ], 500);
        }
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function delete($id)
    {
        try {
            $agencies = Agencies::find($id);
            $agencies->delete();
            return response()->json([
                'status' => 'success',
                'message' => 'Agencies deleted successfully'
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Something went wrong'
            ], 500);
        }
    }
}