<?php

namespace App\Policies;

use App\User;
use App\Purchase;
use Illuminate\Auth\Access\HandlesAuthorization;

class PurchasePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any purchase.
     *
     * @param  App\User  $user
     * @return bool
     */
    public function viewAny(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can view the purchase.
     *
     * @param  App\User  $user
     * @param  App\Purchase  $purchase
     * @return bool
     */
    public function view(User $user, Purchase $purchase)
    {
        return false;
    }

    /**
     * Determine whether the user can create a purchase.
     *
     * @param  App\User  $user
     * @return bool
     */
    public function create(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can update the purchase.
     *
     * @param  App\User  $user
     * @param  App\Purchase  $purchase
     * @return bool
     */
    public function update(User $user, Purchase $purchase)
    {
        return false;
    }

    /**
     * Determine whether the user can delete the purchase.
     *
     * @param  App\User  $user
     * @param  App\Purchase  $purchase
     * @return bool
     */
    public function delete(User $user, Purchase $purchase)
    {
        return false;
    }

    /**
     * Determine whether the user can restore the purchase.
     *
     * @param  App\User  $user
     * @param  App\Purchase  $purchase
     * @return bool
     */
    public function restore(User $user, Purchase $purchase)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the purchase.
     *
     * @param  App\User  $user
     * @param  App\Purchase  $purchase
     * @return bool
     */
    public function forceDelete(User $user, Purchase $purchase)
    {
        return false;
    }
}
