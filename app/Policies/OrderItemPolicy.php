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
     * @param  App\Models\User $user
     * @return boolean
     */
    public function viewAny(User $user)
    {
        return false;

    }//end viewAny()


    /**
     * Determine whether the user can view the orderItem.
     *
     * @param  App\Models\User $user
     * @param  App\OrderItem   $orderItem
     * @return boolean
     */
    public function view(User $user, OrderItem $orderItem)
    {
        return false;

    }//end view()


    /**
     * Determine whether the user can create a orderItem.
     *
     * @param  App\Models\User $user
     * @return boolean
     */
    public function create(User $user)
    {
        return false;

    }//end create()


    /**
     * Determine whether the user can update the orderItem.
     *
     * @param  App\Models\User $user
     * @param  App\OrderItem   $orderItem
     * @return boolean
     */
    public function update(User $user, OrderItem $orderItem)
    {
        return false;

    }//end update()


    /**
     * Determine whether the user can delete the orderItem.
     *
     * @param  App\Models\User $user
     * @param  App\OrderItem   $orderItem
     * @return boolean
     */
    public function delete(User $user, OrderItem $orderItem)
    {
        return false;

    }//end delete()


    /**
     * Determine whether the user can restore the orderItem.
     *
     * @param  App\Models\User $user
     * @param  App\OrderItem   $orderItem
     * @return boolean
     */
    public function restore(User $user, OrderItem $orderItem)
    {
        return false;

    }//end restore()


    /**
     * Determine whether the user can permanently delete the orderItem.
     *
     * @param  App\Models\User $user
     * @param  App\OrderItem   $orderItem
     * @return boolean
     */
    public function forceDelete(User $user, OrderItem $orderItem)
    {
        return false;

    }//end forceDelete()


}//end class
