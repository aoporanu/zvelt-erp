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
     * @param  App\Models\User  $user
     * @return bool
     */
    public function viewAny(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can view the route.
     *
     * @param  App\Models\User  $user
     * @param  App\Route  $route
     * @return bool
     */
    public function view(User $user, Route $route)
    {
        return false;
    }

    /**
     * Determine whether the user can create a route.
     *
     * @param  App\Models\User  $user
     * @return bool
     */
    public function create(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can update the route.
     *
     * @param  App\Models\User  $user
     * @param  App\Route  $route
     * @return bool
     */
    public function update(User $user, Route $route)
    {
        return false;
    }

    /**
     * Determine whether the user can delete the route.
     *
     * @param  App\Models\User  $user
     * @param  App\Route  $route
     * @return bool
     */
    public function delete(User $user, Route $route)
    {
        return false;
    }

    /**
     * Determine whether the user can restore the route.
     *
     * @param  App\Models\User  $user
     * @param  App\Route  $route
     * @return bool
     */
    public function restore(User $user, Route $route)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the route.
     *
     * @param  App\Models\User  $user
     * @param  App\Route  $route
     * @return bool
     */
    public function forceDelete(User $user, Route $route)
    {
        return false;
    }
}
