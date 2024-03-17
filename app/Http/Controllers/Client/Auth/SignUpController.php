<?php

namespace App\Http\Controllers\Client\Auth;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class SignUpController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('TheSignUp', [
            'title' => 'test'
        ]);
    }
}
