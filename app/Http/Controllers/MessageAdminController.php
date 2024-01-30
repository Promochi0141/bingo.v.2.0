<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;

class MessageAdminController extends Controller
{
    public function index()
    {
        $messages = Message::all();
        return response()->json($messages);
    }

    public function store(Request $request)
    {
        $message = Message::create($request->all());
        return response()->json($message);
    }

    public function update(Request $request, $id)
{
    $message = Message::find($id);
    $message->contents = $request->input('contents');
    $message->save();
    return response()->json($message);
}

public function delete($id)
{
    $message = Message::find($id);
    $message->delete();
    return response()->json(null, 204);
}
}
