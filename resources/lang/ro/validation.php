<?php

return [
    'accepted'             => 'Atributul :attribute trebuie acceptat.',
    'active_url'           => ':attribute nu este un URL valid.',
    'after'                => ':attribute trebuie sa fie dupa data de :date.',
    'after_or_equal'       => ':attribute trebuie sa fie cel putin egal cu data de :date.',
    'alpha'                => ':attribute nu poate contine decat litere.',
    'alpha_dash'           => ':attribute poate contine doar litere, numere, cratime sau linii de subliniere.',
    'alpha_num'            => ':attribute poate contine doar litere si numere.',
    'array'                => ':attribute trebuie sa fie o matrice.',
    'before'               => ':attribute trebuie sa fie inainte de data de :date.',
    'before_or_equal'      => ':attribute trebuie sa fie inainte sau egala cu data de :date.',
    'between'              => [
        'numeric' => ':attribute trebuie sa fie intre :min si :max.',
        'file'    => ':attribute trebuie sa fie intre :min si :max kilobytes.',
        'string'  => ':attribute trebuie sa fie intre :min - :max caractere.',
        'array'   => ':attribute trebuie sa aiba intre :min si :max obiecte.',
    ],
    'boolean'              => ':attribute trebuie sa fie ori adevarat ori fals.',
    'confirmed'            => ':attribute confiromarea nu este egala cu campul de confirmat.',
    'date'                 => ':attribute nu este o data valida.',
    'date_equals'          => ':attribute trebuie sa fie o data egala cu :date.',
    'date_format'          => ':attribute trebuie sa fie in formatul :format.',
    'different'            => ':attribute si :other trebuie sa difere.',
    'digits'               => ':attribute trebuie sa aiba :digits cifre.',
    'digits_between'       => ':attribute trebuie sa aiba intre :min si :max cifre.',
    'dimensions'           => ':attribute reprezinta dimensiuni invalide pentru imagine.',
    'distinct'             => 'Campul :attribute are o valoare identica.',
    'email'                => ':attribute trebuie sa fie o adresa de email valida.',
    'ends_with'            => ':attribute trebuie sa se termine cu una din urmatoarele: :values.',
    'exists'               => ':attribute selectat este invalid.',
    'file'                 => ':attribute trebuie sa fie fisier.',
    'filled'               => ':attribute trebuie sa fie completat.',
    'gt'                   => [
        'numeric' => ':attribute trebuie sa fie mai mare decat :value.',
        'file'    => ':attribute trebuie sa aiba mai mult de :value kilobytes.',
        'string'  => ':attribute trebuie sa aiba mai mult de :value caractere.',
        'array'   => ':attribute trebuie sa contina mai mult de :value obiecte.',
    ],
    'gte'                  => [
        'numeric' => ':attribute trebuie sa fie mai mare sau egal cu :value.',
        'file'    => ':attribute trebuie sa fie egal sau mai mare de :value kilobytes.',
        'string'  => ':attribute trebuie sa aiba cel putin :value caractere.',
        'array'   => ':attribute trebuie sa aiba cel putin :value obiecte.',
    ],
    'image'                => ':attribute trebuie sa fie un tip de imagine.',
    'in'                   => ':attribute selectat este invalid.',
    'in_array'             => ':attribute nu exista in :other.',
    'integer'              => ':attribute trebuie sa fie integer.',
    'ip'                   => ':attribute trebuie sa fie un IP valid.',
    'ipv4'                 => ':attribute trebuie sa fie un IPv4 valid.',
    'ipv6'                 => ':attribute trebuie sa fie un IPv6 valid.',
    'json'                 => ':attribute trebuie sa fie un JSON valid.',
    'lt'                   => [
        'numeric' => ':attribute trebuie sa fie mai mic decat :value.',
        'file'    => ':attribute trebuie sa fie mai mic decat :value kilobytes.',
        'string'  => ':attribute trebuie sa aiba mai putin de :value caractere.',
        'array'   => ':attribute trebuie sa aiba mai putin de :value obiecte.',
    ],
    'lte'                  => [
        'numeric' => ':attribute trebuie sa aiba cel mult :value.',
        'file'    => ':attribute trebuie sa aiba cel mult :value kilobytes.',
        'string'  => ':attribute trebuie sa aiba cel mult :value characters.',
        'array'   => ':attribute nu poate avea mai mult de :value items.',
    ],
    'max'                  => [
        'numeric' => ':attribute nu poate fi mai mare decat :max.',
        'file'    => ':attribute nu poate fi mai mare decat :max kilobytes.',
        'string'  => ':attribute nu poate fi mai mare decat :max characters.',
        'array'   => ':attribute nu poate avea mai mult de :max items.',
    ],
    'mimes'                => ':attribute trebuie sa fie un fisier de tip: :values.',
    'mimetypes'            => ':attribute trebuie sa fie un fisier de tip: :values.',
    'min'                  => [
        'numeric' => ':attribute trebuie sa aiba cel putin :min.',
        'file'    => ':attribute trebuie sa aiba cel putin :min kilobytes.',
        'string'  => ':attribute trebuie sa aiba cel putin :min characters.',
        'array'   => ':attribute trebuie sa aiba cel putin :min items.',
    ],
    'multiple_of'          => ':attribute trebuie sa fie multiplu de :value.',
    'not_in'               => 'selectia :attribute este invalida.',
    'not_regex'            => ':attribute este invalid.',
    'numeric'              => ':attribute trebuie sa fie numar.',
    'password'             => 'parola este incorecta.',
    'present'              => ':attribute trebuie sa fie prezent.',
    'regex'                => ':attribute formatul este invalid.',
    'required'             => ':attribute este obligatoriu.',
    'required_if'          => ':attribute este obligatoriu cand :other este :value.',
    'required_unless'      => ':attribute este obligatoriu daca :other este in :values.',
    'required_with'        => ':attribute este obligatoriu cand :values este prezent.',
    'required_with_all'    => ':attribute este obligatoriu cand :values sunt prezente.',
    'required_without'     => ':attribute este obligatoriu cand :values nu este prezent.',
    'required_without_all' => ':attribute este obligatoriu cand niciuna din :values sunt prezente.',
    'same'                 => ':attribute si :other trebuie sa echivaleze.',
    'size'                 => [
        'numeric' => ':attribute trebuie sa aiba :size.',
        'file'    => ':attribute trebuie sa aiba :size kilobytes.',
        'string'  => ':attribute trebuie sa aiba :size caractere.',
        'array'   => ':attribute trebuie sa contina :size obiecte.',
    ],
    'starts_with'          => ':attribute trebuie sa inceapa cu una din urmatoarele: :values.',
    'string'               => ':attribute trebuie sa fie un sir de caractere.',
    'timezone'             => ':attribute trebuie sa fie un fus orar valid.',
    'unique'               => ':attribute a fost deja alocat.',
    'uploaded'             => ':attribute nu a putut fi incarcat.',
    'url'                  => ':attribute are format invalid.',
    'uuid'                 => ':attribute trebuie sa fie un UUID valid.',

    /*
        |--------------------------------------------------------------------------
        | Custom Validation Language Lines
        |--------------------------------------------------------------------------
        |
        | Here you may specify custom validation messages for attributes using the
        | convention "attribute.rule" to name the lines. This makes it quick to
        | specify a specific custom language line for a given attribute rule.
        |
    */

    'custom'               => [
        'attribute-name' => ['rule-name' => 'custom-message'],
    ],

    /*
        |--------------------------------------------------------------------------
        | Custom Validation Attributes
        |--------------------------------------------------------------------------
        |
        | following language lines are used to swap our attribute placeholder
        | with something more reader friendly such as "E-Mail Address" instead
        | of "email". This simply helps us make our message more expressive.
        |
    */

    'attributes'           => [],

];
