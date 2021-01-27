<?php

namespace App\Policies;

use App\Models\User;
use App\Route;
use Illuminate\Auth\Access\HandlesAuthorization;

class RoutePolicy
{
    use HandlesAuthorization;


    /**
     * Determine whether the user can view any route.
     *
     * @param  App\Models\User $user
     * @return boolean
     */
    public function viewAny(User $user)
    {
        return false;

    }//end viewAny()


    /**
     * Determine whether the user can view the route.
     *
     * @param  App\Models\User $user
     * @param  App\Route       $route
     * @return boolean
     */
    public function view(User $user, Route $route)
    {
        return false;

    }//end view()


    /**
     * Determine whether the user can create a route.
     *
     * @param  App\Models\User $user
     * @return boolean
     */
    public function create(User $user)
    {
        return false;

    }//end create()


    /**
     * Determine whether the user can update the route.
     *
     * @param  App\Models\User $user
     * @param  App\Route       $route
     * @return boolean
     */
    public function update(User $user, Route $route)
    {
        return false;

    }//end update()


    /**
     * Determine whether the user can delete the route.
     *
     * @param  App\Models\User $user
     * @param  App\Route       $route
     * @return boolean
     */
    public function delete(User $user, Route $route)
    {
        return false;

    }//end delete()


    /**
     * Determine whether the user can restore the route.
     *
     * @param  App\Models\User $user
     * @param  App\Route       $route
     * @return boolean
     */
    public function restore(User $user, Route $route)
    {
        return false;

    }//end restore()


    /**
     * Determine whether the user can permanently delete the route.
     *
     * @param  App\Models\User $user
     * @param  App\Route       $route
     * @return boolean
     */
    public function forceDelete(User $user, Route $route)
    {
        return false;

    }//end forceDelete()


}//end class
