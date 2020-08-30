<?php

namespace App\Policies;

use App\User;
use App\PurchasedItems;
use Illuminate\Auth\Access\HandlesAuthorization;

class PurchasedItemsPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any purchasedItems.
     *
     * @param  App\User  $user
     * @return bool
     */
    public function viewAny(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can view the purchasedItems.
     *
     * @param  App\User  $user
     * @param  App\PurchasedItems  $purchasedItems
     * @return bool
     */
    public function view(User $user, PurchasedItems $purchasedItems)
    {
        return false;
    }

    /**
     * Determine whether the user can create a purchasedItems.
     *
     * @param  App\User  $user
     * @return bool
     */
    public function create(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can update the purchasedItems.
     *
     * @param  App\User  $user
     * @param  App\PurchasedItems  $purchasedItems
     * @return bool
     */
    public function update(User $user, PurchasedItems $purchasedItems)
    {
        return false;
    }

    /**
     * Determine whether the user can delete the purchasedItems.
     *
     * @param  App\User  $user
     * @param  App\PurchasedItems  $purchasedItems
     * @return bool
     */
    public function delete(User $user, PurchasedItems $purchasedItems)
    {
        return false;
    }

    /**
     * Determine whether the user can restore the purchasedItems.
     *
     * @param  App\User  $user
     * @param  App\PurchasedItems  $purchasedItems
     * @return bool
     */
    public function restore(User $user, PurchasedItems $purchasedItems)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the purchasedItems.
     *
     * @param  App\User  $user
     * @param  App\PurchasedItems  $purchasedItems
     * @return bool
     */
    public function forceDelete(User $user, PurchasedItems $purchasedItems)
    {
        return false;
    }
}
