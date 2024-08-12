<?php

namespace App\Http\Controllers;

use App\Models\agency;
use Illuminate\Http\Request;

class AgencyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $agencies = agency::all();
        return view('pages.agencies.index', compact('agencies'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('pages.agencies.create');
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
        $request->image->move(public_path('Agencygalery'), $imageName);

        $data = new agency; 
        $data->image = $imageName;     
        $data->name = $request->name;        
        $data->description = $request->description;
        $data->save();

        return redirect()->route('agency.index')->with('success', 'Agency created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(agency $agency)
    {
        return view('pages.agencies.show',compact('agency'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(agency $agency)
    {
        return view('pages.agencies.edit',compact('agency'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, agency $agency)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'name' => 'required|',
            'description' => 'required|',
        ]);

        //Save image with extension in public
        $imageName = time().'.'.$request->image->extension();
        $request->image->move(public_path('Agencygalery'), $imageName);

        $agency->image = $imageName;
        $agency->name = $request->name;
        $agency->description = $request->description;
        $agency->save();

        return redirect()->route('agency.index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(agency $agency)
    {
        $agency->delete();
        return redirect()->route('agency.index')->with('success','Agency deleted successfully');
    }
}
