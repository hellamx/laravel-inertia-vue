<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MainPageController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('MainPage', [
            'title' => 'test'
        ]);
    }
}
