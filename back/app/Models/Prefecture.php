<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prefecture extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'area_id',
        'name',
        'slug',
    ];

    /**
     * ユーザーとのリレーション
     */
    public function users()
    {
        return $this->hasMany(User::class);
    }

    /**
     * エリアとのリレーション
     */
    public function area()
    {
        return $this->belongsTo(Area::class);
    }
} 