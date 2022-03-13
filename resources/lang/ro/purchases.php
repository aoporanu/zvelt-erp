<?php

return [
  'returns' => [
    'pages' => [
      'create' => [
        'title' => 'Creare retur',
        'form' => [
          'bom_label' => 'Pentru comanda #',
          'button_label' => 'Inregistrare retur'
        ]
      ],
      'index' => [ 'title' => 'Index retururi', ],
    ],
  ],
  'pages' => [
'index' => [ 'title' => 'Index achizitii'],
'create' => [ 'title' => 'Creare achizitie',],
'show' => [ 'title' => 'Detalii achizitie',],
'edit' => [ 'title' => 'Editare achizitie', ],
 'stocks' => [ 'title' => 'Stocuri companie', ],
 'transfer' => [ 'title' => 'Transfer stocuri', ], 
],
'methods' => [
    'store' => [
      'success_message' => 'Achizitia a fost creata',
    ],
    'update' => [
      'success_message' => 'Ai actualizat achizitia',
      'failure_message' => 'Achizitia nu s-a putu actualiza',
    ],
    'delete' => [
      'success_message' => 'Ai sters achizitia',
      'failure_message' => 'Nu s-a putut sterge achizitia',
    ],
    'returnStore' => [
      'success_message' => 'Factura de stornare a fost creata',
      'failure_message' => 'Nu am putut crea factura de stornare',
    ],

]
];
