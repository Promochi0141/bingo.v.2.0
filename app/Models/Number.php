<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Number extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'status',
        'created_at',
        'updated_at',
    ];

    public function toggleStatus()
    {
        $this->status = !$this->status;
        return $this->save();
    }
}
