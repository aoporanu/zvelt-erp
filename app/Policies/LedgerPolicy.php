<?php

namespace App\Policies;

use App\Models\User;
use App\Ledger;
use Illuminate\Auth\Access\HandlesAuthorization;

class LedgerPolicy
{
    use HandlesAuthorization;


    /**
     * Determine whether the user can view any ledger.
     *
     * @param  App\Models\User $user
     * @return boolean
     */
    public function viewAny(User $user)
    {
        return false;

    }//end viewAny()


    /**
     * Determine whether the user can view the ledger.
     *
     * @param  App\Models\User $user
     * @param  App\Ledger      $ledger
     * @return boolean
     */
    public function view(User $user, Ledger $ledger)
    {
        return false;

    }//end view()


    /**
     * Determine whether the user can create a ledger.
     *
     * @param  App\Models\User $user
     * @return boolean
     */
    public function create(User $user)
    {
        return false;

    }//end create()


    /**
     * Determine whether the user can update the ledger.
     *
     * @param  App\Models\User $user
     * @param  App\Ledger      $ledger
     * @return boolean
     */
    public function update(User $user, Ledger $ledger)
    {
        return false;

    }//end update()


    /**
     * Determine whether the user can delete the ledger.
     *
     * @param  App\Models\User $user
     * @param  App\Ledger      $ledger
     * @return boolean
     */
    public function delete(User $user, Ledger $ledger)
    {
        return false;

    }//end delete()


    /**
     * Determine whether the user can restore the ledger.
     *
     * @param  App\Models\User $user
     * @param  App\Ledger      $ledger
     * @return boolean
     */
    public function restore(User $user, Ledger $ledger)
    {
        return false;

    }//end restore()


    /**
     * Determine whether the user can permanently delete the ledger.
     *
     * @param  App\Models\User $user
     * @param  App\Ledger      $ledger
     * @return boolean
     */
    public function forceDelete(User $user, Ledger $ledger)
    {
        return false;

    }//end forceDelete()


}//end class
