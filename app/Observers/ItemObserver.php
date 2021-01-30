<?php

namespace App\Observers;

use App\Models\Item;
use Carbon\Carbon;
use DB;

class ItemObserver
{
    /**
     * Handle the Item "created" event.
     *
     * @param  \App\Models\Item  $item
     * @return void
     */
    public function created(Item $item)
    {
        
    }

    /**
     * Handle the Item "updated" event.
     *
     * @param  \App\Models\Item  $item
     * @return void
     */
    public function updated(Item $item)
    {
        //
    }

    /**
     * Handle the Item "deleted" event.
     *
     * @param  \App\Models\Item  $item
     * @return void
     */
    public function deleted(Item $item)
    {
        $user = auth()->user();

        if ($user->role !== 'admin') {
            return false;
        }

        DB::insert('insert into logs (level, message, created_at, updated_at) values(?, ?, ?, ?)', ['item-deleted', 'The item ' . $item->id . ' was deleted by ' . $user->id . '(' . $user->name . ')', Carbon::now(), Carbon::now()]);
    }

    /**
     * Handle the Item "restored" event.
     *
     * @param  \App\Models\Item  $item
     * @return void
     */
    public function restored(Item $item)
    {
        //
    }

    /**
     * Handle the Item "force deleted" event.
     *
     * @param  \App\Models\Item  $item
     * @return void
     */
    public function forceDeleted(Item $item)
    {
        $user = auth()->user();

        if ($user->role !== 'admin') {
            return false;
        }

        DB::insert('insert into logs (level, message, created_at, updated_at) values(?, ?, ?, ?)', ['item-deleted', 'The item ' . $item->id . ' was deleted by ' . $user->id . '(' . $user->name . ')', Carbon::now(), Carbon::now()]);
    }
}
