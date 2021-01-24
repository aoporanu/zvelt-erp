<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserLoginRequest;
use App\Http\Requests\UserRegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Laravel\Passport\Client;

class AuthAPIController extends Controller
{
    public function login(UserLoginRequest $request)
    {
        $passwordGrantClient = Client::where('password_client', 1)->first();
        $data = [
            'grant_type' => 'password',
            'client_id' => $passwordGrantClient->id,
            'client_secret' => $passwordGrantClient->secret,
            'username' => $request->email,
            'password' => $request->password,
            'scope' => '*',
        ];
        $tokenRequest = Request::create('/oauth/token', 'post', $data);
        return app()->handle($tokenRequest);
    }

    public function register(UserRegisterRequest $request)
    {
        $user = User::create([
            'name' => $request->json('name'),
            'email' => $request->json('email'),
            'password' => Hash::make($request->json('password'))
        ]);

        if (!$user) {
            return response()->json(['success' => false, 'message' => 'Registration failed'], 500);
        }
        return response()->json(['success' => true, 'message' => 'Registration successful']);
    }
}
