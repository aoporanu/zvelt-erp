<?php

namespace App\Policies;

use App\Models\User;
use App\Purchase;
use Illuminate\Auth\Access\HandlesAuthorization;

class PurchasePolicy
{
    use HandlesAuthorization;


    /**
     * Determine whether the user can view any purchase.
     *
     * @param  App\Models\User $user
     * @return boolean
     */
    public function viewAny(User $user)
    {
        return false;

    }//end viewAny()


    /**
     * Determine whether the user can view the purchase.
     *
     * @param  App\Models\User $user
     * @param  App\Purchase    $purchase
     * @return boolean
     */
    public function view(User $user, Purchase $purchase)
    {
        return false;

    }//end view()


    /**
     * Determine whether the user can create a purchase.
     *
     * @param  App\Models\User $user
     * @return boolean
     */
    public function create(User $user)
    {
        return false;

    }//end create()


    /**
     * Determine whether the user can update the purchase.
     *
     * @param  App\Models\User $user
     * @param  App\Purchase    $purchase
     * @return boolean
     */
    public function update(User $user, Purchase $purchase)
    {
        return false;

    }//end update()


    /**
     * Determine whether the user can delete the purchase.
     *
     * @param  App\Models\User $user
     * @param  App\Purchase    $purchase
     * @return boolean
     */
    public function delete(User $user, Purchase $purchase)
    {
        return false;

    }//end delete()


    /**
     * Determine whether the user can restore the purchase.
     *
     * @param  App\Models\User $user
     * @param  App\Purchase    $purchase
     * @return boolean
     */
    public function restore(User $user, Purchase $purchase)
    {
        return false;

    }//end restore()


    /**
     * Determine whether the user can permanently delete the purchase.
     *
     * @param  App\Models\User $user
     * @param  App\Purchase    $purchase
     * @return boolean
     */
    public function forceDelete(User $user, Purchase $purchase)
    {
        return false;

    }//end forceDelete()


}//end class
