<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Models\Services;
use Illuminate\Http\Request;
use Exception;

class ServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $services = Services::all();
            return response()->json([
                'status' => 'success',
                'data' => $services
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
            $request->image->move(public_path('Servicegalery'), $imageName);
    
            $data = new Services; 
            $data->image = $imageName;     
            $data->name = $request->name;        
            $data->description = $request->description;
            $data->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Services created successfully'
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
            $services = Services::find($id);
            return response()->json([
                'status' => 'success',
                'data' => $services
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
    
            $data = Services::find($id); 
            $data->image = $imageName;     
            $data->name = $request->name;        
            $data->description = $request->description;
            $data->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Services updated successfully'
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
            $services = Services::find($id);
            $services->delete();
            return response()->json([
                'status' => 'success',
                'message' => 'Services deleted successfully'
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Something went wrong'
            ], 500);
        }
    }
}