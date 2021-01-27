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
     * @param  App\Models\User $user
     * @return boolean
     */
    public function viewAny(User $user)
    {
        return false;

    }//end viewAny()


    /**
     * Determine whether the user can view the receipt.
     *
     * @param  App\Models\User $user
     * @param  App\Receipt     $receipt
     * @return boolean
     */
    public function view(User $user, Receipt $receipt)
    {
        return false;

    }//end view()


    /**
     * Determine whether the user can create a receipt.
     *
     * @param  App\Models\User $user
     * @return boolean
     */
    public function create(User $user)
    {
        return false;

    }//end create()


    /**
     * Determine whether the user can update the receipt.
     *
     * @param  App\Models\User $user
     * @param  App\Receipt     $receipt
     * @return boolean
     */
    public function update(User $user, Receipt $receipt)
    {
        return false;

    }//end update()


    /**
     * Determine whether the user can delete the receipt.
     *
     * @param  App\Models\User $user
     * @param  App\Receipt     $receipt
     * @return boolean
     */
    public function delete(User $user, Receipt $receipt)
    {
        return false;

    }//end delete()


    /**
     * Determine whether the user can restore the receipt.
     *
     * @param  App\Models\User $user
     * @param  App\Receipt     $receipt
     * @return boolean
     */
    public function restore(User $user, Receipt $receipt)
    {
        return false;

    }//end restore()


    /**
     * Determine whether the user can permanently delete the receipt.
     *
     * @param  App\Models\User $user
     * @param  App\Receipt     $receipt
     * @return boolean
     */
    public function forceDelete(User $user, Receipt $receipt)
    {
        return false;

    }//end forceDelete()


}//end class
