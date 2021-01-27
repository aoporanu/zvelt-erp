<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class PurchaseSumRule implements Rule
{


    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {

    }//end __construct()


    /**
     * Determine if the validation rule passes.
     *
     * @param  string $attribute
     * @param  mixed  $value
     * @return boolean
     */
    public function passes($attribute, $value)
    {

    }//end passes()


    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The validation error message.';

    }//end message()


}//end class
