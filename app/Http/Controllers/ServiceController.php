<?php

namespace App\Http\Controllers;

use App\Models\service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = service::all();
        return view('pages.services.index', compact('services'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('pages.services.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'name' => 'required|',
            'description' => 'required|',
        ]);

        //Save image with extension in public
        $imageName = time().'.'.$request->image->extension();         
        $request->image->move(public_path('galery'), $imageName);

        $data = new Service; 
        $data->image = $imageName;     
        $data->name = $request->name;        
        $data->description = $request->description;
        $data->save();

        return redirect()->route('service.index')->with('success', 'Service created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(service $service)
    {
        return view('pages.services.show',compact('service'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(service $service)
    {
        return view('pages.services.edit',compact('service'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, service $service)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'name' => 'required|',
            'description' => 'required|',
        ]);

        //Save image with extension in public
        $imageName = time().'.'.$request->image->extension();         
        $request->image->move(public_path('galery'), $imageName);

        $service->image = $imageName;     
        $service->name = $request->name;        
        $service->description = $request->description;
        $service->save();

        return redirect()->route('service.index')->with('success', 'Service updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(service $service)
    {
        $service->delete();
        return redirect()->route('service.index')->with('success','Service deleted successfully');
    }
}
