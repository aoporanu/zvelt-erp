<?php

namespace App\Exceptions;

use Exception;

class UnavailableQtyOnLocation extends Exception
{
  public function report()
  {
    \Log::debug('Unavailable qty on location');
  }
}
