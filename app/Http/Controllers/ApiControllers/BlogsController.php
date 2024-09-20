<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Models\Blogs;
use Illuminate\Http\Request;
use Exception;

class BlogsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $blogs = Blogs::all();
            return response()->json([
                'status' => 'success',
                'data' => $blogs
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
                'title' => 'required|string',
                'content' => 'required|string',
                'author' => 'required|string',
            ]);
        
        //Save image with extension in public
        $imageName = time().'.'.$request->image->extension();         
        $request->image->move(public_path('Bloggalery'), $imageName);

        $data = new Blogs; 
        $data->image = $imageName;     
        $data->title = $request->title;        
        $data->content = $request->content;
        $data->author = $request->author;
        $data->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Blogs created successfully'
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
            $blogs = Blogs::find($id);
            return response()->json([
                'status' => 'success',
                'data' => $blogs
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
                'title' => 'required|',
                'content' => 'required|',
                'author' => 'required|',
            ]);

            //Save image with extension in public   
            $imageName = time().'.'.$request->image->extension();
            $request->image->move(public_path('Bloggalery'), $imageName);

            $data = Blogs::find($id);
            $data->image = $imageName;
            $data->title = $request->title;
            $data->content = $request->content;
            $data->author = $request->author;
            $data->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Blogs updated successfully'
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
    public function destroy($id)
    {
        try {
            $blogs = Blogs::find($id);
            $blogs->delete();
            return response()->json([
                'status' => 'success',
                'message' => 'Blogs deleted successfully'
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Something went wrong'
            ], 500);
        }
    }
}
