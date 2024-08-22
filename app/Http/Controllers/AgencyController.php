<?php

namespace App\Http\Controllers;

use App\Models\agency;
use Illuminate\Http\Request;
use Exception;

class AgencyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $agencies = agency::all();
            return view('pages.agencies.index', compact('agencies'));
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        try {
            return view('pages.agencies.create');
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
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
    
            $data = new agency; 
            $data->image = $imageName;     
            $data->name = $request->name;        
            $data->description = $request->description;
            $data->save();
    
            return redirect()->route('agency.index')->with('success', 'Agency created successfully.');
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(agency $agency)
    {
        try {
            return view('pages.agencies.show',compact('agency'));
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(agency $agency)
    {
        try {
            return view('pages.agencies.edit',compact('agency'));
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, agency $agency)
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
    
            $agency->image = $imageName;     
            $agency->name = $request->name;        
            $agency->description = $request->description;
            $agency->save();
    
            return redirect()->route('agency.index')->with('success', 'Agency updated successfully.');

        } catch (Exception $e) {

            return redirect()->back()->with('error', 'Something went wrong');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(agency $agency)
    {
        try {
            $agency->delete();
            return redirect()->route('agency.index')->with('success', 'Agency deleted successfully.');
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }
}
