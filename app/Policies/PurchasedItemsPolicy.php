<?php

namespace App\Policies;

use App\Models\User;
use App\PurchasedItems;
use Illuminate\Auth\Access\HandlesAuthorization;

class PurchasedItemsPolicy
{
    use HandlesAuthorization;


    /**
     * Determine whether the user can view any purchasedItems.
     *
     * @param  App\Models\User $user
     * @return boolean
     */
    public function viewAny(User $user)
    {
        return false;

    }//end viewAny()


    /**
     * Determine whether the user can view the purchasedItems.
     *
     * @param  App\Models\User    $user
     * @param  App\PurchasedItems $purchasedItems
     * @return boolean
     */
    public function view(User $user, PurchasedItems $purchasedItems)
    {
        return false;

    }//end view()


    /**
     * Determine whether the user can create a purchasedItems.
     *
     * @param  App\Models\User $user
     * @return boolean
     */
    public function create(User $user)
    {
        return false;

    }//end create()


    /**
     * Determine whether the user can update the purchasedItems.
     *
     * @param  App\Models\User    $user
     * @param  App\PurchasedItems $purchasedItems
     * @return boolean
     */
    public function update(User $user, PurchasedItems $purchasedItems)
    {
        return false;

    }//end update()


    /**
     * Determine whether the user can delete the purchasedItems.
     *
     * @param  App\Models\User    $user
     * @param  App\PurchasedItems $purchasedItems
     * @return boolean
     */
    public function delete(User $user, PurchasedItems $purchasedItems)
    {
        return false;

    }//end delete()


    /**
     * Determine whether the user can restore the purchasedItems.
     *
     * @param  App\Models\User    $user
     * @param  App\PurchasedItems $purchasedItems
     * @return boolean
     */
    public function restore(User $user, PurchasedItems $purchasedItems)
    {
        return false;

    }//end restore()


    /**
     * Determine whether the user can permanently delete the purchasedItems.
     *
     * @param  App\Models\User    $user
     * @param  App\PurchasedItems $purchasedItems
     * @return boolean
     */
    public function forceDelete(User $user, PurchasedItems $purchasedItems)
    {
        return false;

    }//end forceDelete()


}//end class
