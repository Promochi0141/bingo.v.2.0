<?php
// App\Http\Controllers\NumberAdminController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Number; // モデルクラスのパスはプロジェクトによります。

class NumberAdminController extends Controller
{
    public function index()
    {
        $data = Number::all(['id', 'status']);
        return response()->json($data);
    }
}