<?php

namespace App\Http\Controllers;

use App\Models\blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = blog::all();
        return view('pages.blogs.index', compact('blogs'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('pages.blogs.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'title' => 'required|',
            'content' => 'required|',
            'author' => 'required|',
        ]);

        //Save image with extension in public
        $imageName = time().'.'.$request->image->extension();         
        $request->image->move(public_path('Bloggalery'), $imageName);

        $data = new Blog; 
        $data->image = $imageName;     
        $data->title = $request->title;        
        $data->content = $request->content;
        $data->author = $request->author;
        $data->save();

        return redirect()->route('blog.index')->with('success', 'Blog created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(blog $blog)
    {
        return view('pages.blogs.show',compact('blog'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(blog $blog)
    {
        return view('pages.blogs.edit',compact('blog'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, blog $blog)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'title' => 'required|',
            'content' => 'required|',
            'author' => 'required|',
        ]);

        //Save image with extension in public   
        $imageName = time().'.'.$request->image->extension();
        $request->image->move(public_path('galery'), $imageName);

        $data = Blog::find($blog->id);
        $data->image = $imageName;
        $data->title = $request->title;
        $data->content = $request->content;
        $data->author = $request->author;
        $data->save();

        return redirect()->route('blog.index')->with('success', 'Blog updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(blog $blog)
    {
        $blog->delete();
        return redirect()->route('blog.index');
    }
}
