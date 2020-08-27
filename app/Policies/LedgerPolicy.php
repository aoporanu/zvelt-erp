<?php

namespace App\Policies;

use App\User;
use App\Ledger;
use Illuminate\Auth\Access\HandlesAuthorization;

class LedgerPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any ledger.
     *
     * @param  App\User  $user
     * @return bool
     */
    public function viewAny(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can view the ledger.
     *
     * @param  App\User  $user
     * @param  App\Ledger  $ledger
     * @return bool
     */
    public function view(User $user, Ledger $ledger)
    {
        return false;
    }

    /**
     * Determine whether the user can create a ledger.
     *
     * @param  App\User  $user
     * @return bool
     */
    public function create(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can update the ledger.
     *
     * @param  App\User  $user
     * @param  App\Ledger  $ledger
     * @return bool
     */
    public function update(User $user, Ledger $ledger)
    {
        return false;
    }

    /**
     * Determine whether the user can delete the ledger.
     *
     * @param  App\User  $user
     * @param  App\Ledger  $ledger
     * @return bool
     */
    public function delete(User $user, Ledger $ledger)
    {
        return false;
    }

    /**
     * Determine whether the user can restore the ledger.
     *
     * @param  App\User  $user
     * @param  App\Ledger  $ledger
     * @return bool
     */
    public function restore(User $user, Ledger $ledger)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the ledger.
     *
     * @param  App\User  $user
     * @param  App\Ledger  $ledger
     * @return bool
     */
    public function forceDelete(User $user, Ledger $ledger)
    {
        return false;
    }
}
