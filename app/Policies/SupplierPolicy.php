<?php

namespace App\Policies;

use App\User;
use App\Supplier;
use Illuminate\Auth\Access\HandlesAuthorization;

class SupplierPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any supplier.
     *
     * @param  App\User  $user
     * @return bool
     */
    public function viewAny(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can view the supplier.
     *
     * @param  App\User  $user
     * @param  App\Supplier  $supplier
     * @return bool
     */
    public function view(User $user, Supplier $supplier)
    {
        return false;
    }

    /**
     * Determine whether the user can create a supplier.
     *
     * @param  App\User  $user
     * @return bool
     */
    public function create(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can update the supplier.
     *
     * @param  App\User  $user
     * @param  App\Supplier  $supplier
     * @return bool
     */
    public function update(User $user, Supplier $supplier)
    {
        return false;
    }

    /**
     * Determine whether the user can delete the supplier.
     *
     * @param  App\User  $user
     * @param  App\Supplier  $supplier
     * @return bool
     */
    public function delete(User $user, Supplier $supplier)
    {
        return false;
    }

    /**
     * Determine whether the user can restore the supplier.
     *
     * @param  App\User  $user
     * @param  App\Supplier  $supplier
     * @return bool
     */
    public function restore(User $user, Supplier $supplier)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the supplier.
     *
     * @param  App\User  $user
     * @param  App\Supplier  $supplier
     * @return bool
     */
    public function forceDelete(User $user, Supplier $supplier)
    {
        return false;
    }
}
