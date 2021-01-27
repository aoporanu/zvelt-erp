<?php

namespace App\Policies;

use App\Models\User;
use App\Supplier;
use Illuminate\Auth\Access\HandlesAuthorization;

class SupplierPolicy
{
    use HandlesAuthorization;


    /**
     * Determine whether the user can view any supplier.
     *
     * @param  App\Models\User $user
     * @return boolean
     */
    public function viewAny(User $user)
    {
        return false;

    }//end viewAny()


    /**
     * Determine whether the user can view the supplier.
     *
     * @param  App\Models\User $user
     * @param  App\Supplier    $supplier
     * @return boolean
     */
    public function view(User $user, Supplier $supplier)
    {
        return false;

    }//end view()


    /**
     * Determine whether the user can create a supplier.
     *
     * @param  App\Models\User $user
     * @return boolean
     */
    public function create(User $user)
    {
        return false;

    }//end create()


    /**
     * Determine whether the user can update the supplier.
     *
     * @param  App\Models\User $user
     * @param  App\Supplier    $supplier
     * @return boolean
     */
    public function update(User $user, Supplier $supplier)
    {
        return false;

    }//end update()


    /**
     * Determine whether the user can delete the supplier.
     *
     * @param  App\Models\User $user
     * @param  App\Supplier    $supplier
     * @return boolean
     */
    public function delete(User $user, Supplier $supplier)
    {
        return false;

    }//end delete()


    /**
     * Determine whether the user can restore the supplier.
     *
     * @param  App\Models\User $user
     * @param  App\Supplier    $supplier
     * @return boolean
     */
    public function restore(User $user, Supplier $supplier)
    {
        return false;

    }//end restore()


    /**
     * Determine whether the user can permanently delete the supplier.
     *
     * @param  App\Models\User $user
     * @param  App\Supplier    $supplier
     * @return boolean
     */
    public function forceDelete(User $user, Supplier $supplier)
    {
        return false;

    }//end forceDelete()


}//end class
