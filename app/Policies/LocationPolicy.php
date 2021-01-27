<?php

namespace App\Policies;

use App\Models\User;
use App\Location;
use Illuminate\Auth\Access\HandlesAuthorization;

class LocationPolicy
{
    use HandlesAuthorization;


    /**
     * Determine whether the user can view any location.
     *
     * @param  App\Models\User $user
     * @return boolean
     */
    public function viewAny(User $user)
    {
        return false;

    }//end viewAny()


    /**
     * Determine whether the user can view the location.
     *
     * @param  App\Models\User $user
     * @param  App\Location    $location
     * @return boolean
     */
    public function view(User $user, Location $location)
    {
        return false;

    }//end view()


    /**
     * Determine whether the user can create a location.
     *
     * @param  App\Models\User $user
     * @return boolean
     */
    public function create(User $user)
    {
        return false;

    }//end create()


    /**
     * Determine whether the user can update the location.
     *
     * @param  App\Models\User $user
     * @param  App\Location    $location
     * @return boolean
     */
    public function update(User $user, Location $location)
    {
        return false;

    }//end update()


    /**
     * Determine whether the user can delete the location.
     *
     * @param  App\Models\User $user
     * @param  App\Location    $location
     * @return boolean
     */
    public function delete(User $user, Location $location)
    {
        return false;

    }//end delete()


    /**
     * Determine whether the user can restore the location.
     *
     * @param  App\Models\User $user
     * @param  App\Location    $location
     * @return boolean
     */
    public function restore(User $user, Location $location)
    {
        return false;

    }//end restore()


    /**
     * Determine whether the user can permanently delete the location.
     *
     * @param  App\Models\User $user
     * @param  App\Location    $location
     * @return boolean
     */
    public function forceDelete(User $user, Location $location)
    {
        return false;

    }//end forceDelete()


}//end class
