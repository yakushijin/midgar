<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Constants\ApiConstants as AC;

class AppEntryController extends Controller
{

    public function __construct()
    {
        $this->middleware('verified');
    }
    
    public function get()
    {
        $page = Auth::check() ? AC::EntryPage:AC::LoginPage;
        return view($page);
    }
}
