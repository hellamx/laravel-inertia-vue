<?php

namespace App\Http\Controllers\Client\Auth;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class LoginController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('TheLogin', [
            'title' => 'test'
        ]);
    }
}
