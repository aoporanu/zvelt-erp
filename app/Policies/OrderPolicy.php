<?php

namespace App\Policies;

use App\User;
use App\Order;
use Illuminate\Auth\Access\HandlesAuthorization;

class OrderPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any order.
     *
     * @param  App\User  $user
     * @return bool
     */
    public function viewAny(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can view the order.
     *
     * @param  App\User  $user
     * @param  App\Order  $order
     * @return bool
     */
    public function view(User $user, Order $order)
    {
        return false;
    }

    /**
     * Determine whether the user can create a order.
     *
     * @param  App\User  $user
     * @return bool
     */
    public function create(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can update the order.
     *
     * @param  App\User  $user
     * @param  App\Order  $order
     * @return bool
     */
    public function update(User $user, Order $order)
    {
        return false;
    }

    /**
     * Determine whether the user can delete the order.
     *
     * @param  App\User  $user
     * @param  App\Order  $order
     * @return bool
     */
    public function delete(User $user, Order $order)
    {
        return false;
    }

    /**
     * Determine whether the user can restore the order.
     *
     * @param  App\User  $user
     * @param  App\Order  $order
     * @return bool
     */
    public function restore(User $user, Order $order)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the order.
     *
     * @param  App\User  $user
     * @param  App\Order  $order
     * @return bool
     */
    public function forceDelete(User $user, Order $order)
    {
        return false;
    }
}
