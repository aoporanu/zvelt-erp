<?php

namespace App\Policies;

use App\Models\User;
use App\Warehouse;
use Illuminate\Auth\Access\HandlesAuthorization;

class WarehousePolicy
{
    use HandlesAuthorization;


    /**
     * Determine whether the user can view any warehouse.
     *
     * @param  App\Models\User $user
     * @return boolean
     */
    public function viewAny(User $user)
    {
        return false;

    }//end viewAny()


    /**
     * Determine whether the user can view the warehouse.
     *
     * @param  App\Models\User $user
     * @param  App\Warehouse   $warehouse
     * @return boolean
     */
    public function view(User $user, Warehouse $warehouse)
    {
        return false;

    }//end view()


    /**
     * Determine whether the user can create a warehouse.
     *
     * @param  App\Models\User $user
     * @return boolean
     */
    public function create(User $user)
    {
        return false;

    }//end create()


    /**
     * Determine whether the user can update the warehouse.
     *
     * @param  App\Models\User $user
     * @param  App\Warehouse   $warehouse
     * @return boolean
     */
    public function update(User $user, Warehouse $warehouse)
    {
        return false;

    }//end update()


    /**
     * Determine whether the user can delete the warehouse.
     *
     * @param  App\Models\User $user
     * @param  App\Warehouse   $warehouse
     * @return boolean
     */
    public function delete(User $user, Warehouse $warehouse)
    {
        return false;

    }//end delete()


    /**
     * Determine whether the user can restore the warehouse.
     *
     * @param  App\Models\User $user
     * @param  App\Warehouse   $warehouse
     * @return boolean
     */
    public function restore(User $user, Warehouse $warehouse)
    {
        return false;

    }//end restore()


    /**
     * Determine whether the user can permanently delete the warehouse.
     *
     * @param  App\Models\User $user
     * @param  App\Warehouse   $warehouse
     * @return boolean
     */
    public function forceDelete(User $user, Warehouse $warehouse)
    {
        return false;

    }//end forceDelete()


}//end class
