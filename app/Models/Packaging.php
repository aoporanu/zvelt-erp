<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @method static inRandomOrder()
 */
class Packaging extends Model
{
    use HasFactory;

    protected $fillable = ['name'];
}//end class
