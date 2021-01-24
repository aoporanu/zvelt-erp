<?php

namespace App\Policies;

use App\Models\User;
use App\Receipt;
use Illuminate\Auth\Access\HandlesAuthorization;

class ReceiptPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any receipt.
     *
     * @param  App\Models\User  $user
     * @return bool
     */
    public function viewAny(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can view the receipt.
     *
     * @param  App\Models\User  $user
     * @param  App\Receipt  $receipt
     * @return bool
     */
    public function view(User $user, Receipt $receipt)
    {
        return false;
    }

    /**
     * Determine whether the user can create a receipt.
     *
     * @param  App\Models\User  $user
     * @return bool
     */
    public function create(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can update the receipt.
     *
     * @param  App\Models\User  $user
     * @param  App\Receipt  $receipt
     * @return bool
     */
    public function update(User $user, Receipt $receipt)
    {
        return false;
    }

    /**
     * Determine whether the user can delete the receipt.
     *
     * @param  App\Models\User  $user
     * @param  App\Receipt  $receipt
     * @return bool
     */
    public function delete(User $user, Receipt $receipt)
    {
        return false;
    }

    /**
     * Determine whether the user can restore the receipt.
     *
     * @param  App\Models\User  $user
     * @param  App\Receipt  $receipt
     * @return bool
     */
    public function restore(User $user, Receipt $receipt)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the receipt.
     *
     * @param  App\Models\User  $user
     * @param  App\Receipt  $receipt
     * @return bool
     */
    public function forceDelete(User $user, Receipt $receipt)
    {
        return false;
    }
}
