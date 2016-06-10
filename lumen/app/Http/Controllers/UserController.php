<?php

namespace App\Http\Controllers;
use App\User;
use Yajra\Datatables\Facades\Datatables;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function getUsers()
    {
      return Datatables::eloquent(User::query())->make(true);
    }
}
