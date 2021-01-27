<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;


    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');

    }//end __construct()


    /**
     * Get a validator for an incoming registration request.
     *
     * @param array $data array to be validated
     *
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make(
            $data,
            [
                'name'     => [
                    'required',
                    'string',
                    'max:255',
                ],
                'role'     => [
                    'required',
                    'string',
                    'max:100',
                ],
                'email'    => [
                    'required',
                    'string',
                    'email',
                    'max:255',
                    'unique:users',
                ],
                'password' => [
                    'required',
                    'string',
                    'min:8',
                    'confirmed',
                ],
            ]
        );

    }//end validator()


    /**
     * Create a new user instance after a valid registration.
     *
     * @param array $data array cobtaining the user
     *
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
        return User::create(
            [
                'name'     => $data['name'],
                'email'    => $data['email'],
                'role'     => $data['role'],
                'password' => Hash::make($data['password']),
            ]
        );

    }//end create()


}//end class
