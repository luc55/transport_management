<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class agency extends Model
{
    use HasFactory;

    protected $fillable = [
        'image',
        'name',
        'description',
    ];
}
