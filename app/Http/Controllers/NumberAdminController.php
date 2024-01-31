<?php
// App\Http\Controllers\NumberAdminController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Number; // モデルクラスのパスはプロジェクトによります。

class NumberAdminController extends Controller
{
    public function index()
    {
        $data = Number::all(['id', 'status','updated_at']);
        return response()->json($data);
    }

    public function toggle($id)
    {
        $number = Number::findOrFail($id);
        $number->toggleStatus();

        return response()->json($number);
    }
}