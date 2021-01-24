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
     * @param  App\Models\User  $user
     * @return bool
     */
    public function viewAny(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can view the warehouse.
     *
     * @param  App\Models\User  $user
     * @param  App\Warehouse  $warehouse
     * @return bool
     */
    public function view(User $user, Warehouse $warehouse)
    {
        return false;
    }

    /**
     * Determine whether the user can create a warehouse.
     *
     * @param  App\Models\User  $user
     * @return bool
     */
    public function create(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can update the warehouse.
     *
     * @param  App\Models\User  $user
     * @param  App\Warehouse  $warehouse
     * @return bool
     */
    public function update(User $user, Warehouse $warehouse)
    {
        return false;
    }

    /**
     * Determine whether the user can delete the warehouse.
     *
     * @param  App\Models\User  $user
     * @param  App\Warehouse  $warehouse
     * @return bool
     */
    public function delete(User $user, Warehouse $warehouse)
    {
        return false;
    }

    /**
     * Determine whether the user can restore the warehouse.
     *
     * @param  App\Models\User  $user
     * @param  App\Warehouse  $warehouse
     * @return bool
     */
    public function restore(User $user, Warehouse $warehouse)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the warehouse.
     *
     * @param  App\Models\User  $user
     * @param  App\Warehouse  $warehouse
     * @return bool
     */
    public function forceDelete(User $user, Warehouse $warehouse)
    {
        return false;
    }
}
