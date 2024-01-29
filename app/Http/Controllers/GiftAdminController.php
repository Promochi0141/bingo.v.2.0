<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Gift;

class GiftAdminController extends Controller
{

    public function index()
    {
        $gifts = Gift::all();
        return response()->json($gifts);
    }

    public function store(Request $request)
    {
        $gift = Gift::create($request->all());
        return response()->json($gift);
    }

    public function update(Request $request, $id)
{
    $gift = Gift::find($id);
    $gift->name = $request->input('name');
    $gift->save();
    return response()->json($gift);
}

public function delete($id)
{
    $gift = Gift::find($id);
    $gift->delete();
    return response()->json(null, 204);
}
}
