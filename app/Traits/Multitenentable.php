<?php

namespace App\Traits;

use PhpParser\Builder;

trait Multitenentable
{
    public static function bootMultitenentable()
    {
        if (auth()->check())
        {
            static::creating(function($model) {
                $model->created_by = auth()->id();
        });
            static::addGlobalScope('created_by', function(Builder $builder) {
                if (auth()->check())
                {
                    return $builder->where('created_by', auth()->id());
                }
            });
        }
    }
}
