<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

/**
 * @method static inRandomOrder()
 * @method static create(array $array)
 * @method static where(string $string, int $int)
 */
class Location extends Model
{
  use HasFactory;

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'id',
    'name',
    'type',
    'warehouse_id',
  ];

  /**
   * The attributes that should be mutated to dates.
   *
   * @var array
   */
  protected $dates = [
    'created_at',
    'updated_at',
    'deleted_at',
  ];

  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [];

  /**
   * The attributes that should be cast to native types.
   *
   * @var array
   */
  protected $casts = [];


  /**
   * Get the Warehouse for the Location.
   */
  public function warehouse()
  {
    return $this->belongsTo(Warehouse::class);
  } //end warehouse()


  public function addItems(Item $item, int $qty = 1)
  {
    DB::insert('insert into location_items (item_id, location_id, qty) values (?, ?, ?)', [$item->id, $this->id, $qty]);
  }
}//end class
