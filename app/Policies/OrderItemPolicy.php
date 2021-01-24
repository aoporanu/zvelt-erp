<?php

namespace App\Policies;

use App\Models\User;
use App\OrderItem;
use Illuminate\Auth\Access\HandlesAuthorization;

class OrderItemPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any orderItem.
     *
     * @param  App\Models\User  $user
     * @return bool
     */
    public function viewAny(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can view the orderItem.
     *
     * @param  App\Models\User  $user
     * @param  App\OrderItem  $orderItem
     * @return bool
     */
    public function view(User $user, OrderItem $orderItem)
    {
        return false;
    }

    /**
     * Determine whether the user can create a orderItem.
     *
     * @param  App\Models\User  $user
     * @return bool
     */
    public function create(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can update the orderItem.
     *
     * @param  App\Models\User  $user
     * @param  App\OrderItem  $orderItem
     * @return bool
     */
    public function update(User $user, OrderItem $orderItem)
    {
        return false;
    }

    /**
     * Determine whether the user can delete the orderItem.
     *
     * @param  App\Models\User  $user
     * @param  App\OrderItem  $orderItem
     * @return bool
     */
    public function delete(User $user, OrderItem $orderItem)
    {
        return false;
    }

    /**
     * Determine whether the user can restore the orderItem.
     *
     * @param  App\Models\User  $user
     * @param  App\OrderItem  $orderItem
     * @return bool
     */
    public function restore(User $user, OrderItem $orderItem)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the orderItem.
     *
     * @param  App\Models\User  $user
     * @param  App\OrderItem  $orderItem
     * @return bool
     */
    public function forceDelete(User $user, OrderItem $orderItem)
    {
        return false;
    }
}
