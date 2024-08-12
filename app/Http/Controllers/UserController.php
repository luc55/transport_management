<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\View\View;


class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');

    }

    public function index(){
        $users = User::all();
        return view('pages.user.index', compact('users'));
    }

    public function create(){
        return view('pages.user.create');
    }

    public function store(Request $request){

        User::create($request->all());
        return redirect()->route('user.index')->with('success', 'User created successfully.');
    }

    public function show(User $user): View
    {
        return view('pages.user.show',compact('user'));
    }

    public function edit(User $user){
        return view('pages.user.edit',compact('user'));
    }
    
    public function update(Request $request, User $user)
    {
        $user->update($request->all());
        return redirect()->route('user.index');
    }


    public function destroy($id){
        User::destroy($id);
        return redirect()->route('user.index')->with('success','User deleted successfully');
    }
}
