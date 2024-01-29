<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NumberAdminController;
use App\Http\Controllers\GiftAdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/numbers', [NumberAdminController::class, 'index']);

Route::post('/numbers/toggle/{id}', [NumberAdminController::class, 'toggle']);

Route::get('/gifts', [GiftAdminController::class, 'index']);
Route::put('/gifts/{id}', [GiftAdminController::class, 'update']);
Route::delete('/gifts/{id}', [GiftAdminController::class, 'delete']);