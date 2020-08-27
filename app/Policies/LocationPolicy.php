<?php

namespace App\Policies;

use App\User;
use App\Location;
use Illuminate\Auth\Access\HandlesAuthorization;

class LocationPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any location.
     *
     * @param  App\User  $user
     * @return bool
     */
    public function viewAny(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can view the location.
     *
     * @param  App\User  $user
     * @param  App\Location  $location
     * @return bool
     */
    public function view(User $user, Location $location)
    {
        return false;
    }

    /**
     * Determine whether the user can create a location.
     *
     * @param  App\User  $user
     * @return bool
     */
    public function create(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can update the location.
     *
     * @param  App\User  $user
     * @param  App\Location  $location
     * @return bool
     */
    public function update(User $user, Location $location)
    {
        return false;
    }

    /**
     * Determine whether the user can delete the location.
     *
     * @param  App\User  $user
     * @param  App\Location  $location
     * @return bool
     */
    public function delete(User $user, Location $location)
    {
        return false;
    }

    /**
     * Determine whether the user can restore the location.
     *
     * @param  App\User  $user
     * @param  App\Location  $location
     * @return bool
     */
    public function restore(User $user, Location $location)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the location.
     *
     * @param  App\User  $user
     * @param  App\Location  $location
     * @return bool
     */
    public function forceDelete(User $user, Location $location)
    {
        return false;
    }
}
