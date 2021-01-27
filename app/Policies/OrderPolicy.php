<?php

namespace App\Policies;

use App\Models\Order;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class OrderPolicy
{
    use HandlesAuthorization;


    /**
     * Determine whether the user can view any order.
     *
     * @param  User $user
     * @return boolean
     */
    public function viewAny(User $user)
    {
        return false;

    }//end viewAny()


    /**
     * Determine whether the user can view the order.
     *
     * @param  User  $user
     * @param  Order $order
     * @return boolean
     */
    public function view(User $user, Order $order)
    {
        return false;

    }//end view()


    /**
     * Determine whether the user can create a order.
     *
     * @param  User $user
     * @return boolean
     */
    public function create(User $user)
    {
        return $user->role == 'agent' || $user->role == 'operator';

    }//end create()


    /**
     * Determine whether the user can update the order.
     *
     * @param  User  $user
     * @param  Order $order
     * @return boolean
     */
    public function update(User $user, Order $order)
    {
        return false;

    }//end update()


    /**
     * Determine whether the user can delete the order.
     *
     * @param  User  $user
     * @param  Order $order
     * @return boolean
     */
    public function delete(User $user, Order $order)
    {
        return false;

    }//end delete()


    /**
     * Determine whether the user can restore the order.
     *
     * @param  User  $user
     * @param  Order $order
     * @return boolean
     */
    public function restore(User $user, Order $order)
    {
        return false;

    }//end restore()


    /**
     * Determine whether the user can permanently delete the order.
     *
     * @param  User  $user
     * @param  Order $order
     * @return boolean
     */
    public function forceDelete(User $user, Order $order)
    {
        return false;

    }//end forceDelete()


}//end class
