<?php

use App\Http\Controllers\Client\Auth\LoginController;
use App\Http\Controllers\Client\Auth\SignUpController;
use App\Http\Controllers\Client\MainPageController;
use Illuminate\Support\Facades\Route;

Route::get('/', MainPageController::class);

Route::get('/login', LoginController::class);
Route::get('/signup', SignUpController::class);

require __DIR__.'/auth.php';
