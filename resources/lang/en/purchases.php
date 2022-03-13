<?php

return [
  'returns' => [
    'pages' => [
      'create' => [
        'title' => 'Create return',
        'form' => [
          'bom_label' => 'For the BOM',
          'button_label' => 'Store return'
        ]
      ],
      'index' => [
        'title' => 'Returns index',
      ],
    ],
  ],
  'pages' => [
    'index' => [
      'title' => 'Purchases index',
    ],
    'create' => [
      'title' => 'Create purchase'
    ],
    'show' => [
      'title' => 'Purchase details',
    ],
    'edit' => [
      'title' => 'Edit purchase',
    ],
    'stocks' => [
      'title' => 'Company stocks',
    ],
    'transfer' => [
      'title' => 'Transfer stocks',
    ],
  ],
  'methods' => [
    'store' => [
      'success_message' => 'The purchase has been created',
    ],
    'update' => [
      'success_message' => 'The purchase has been updated',
      'failure_message' => 'Could not update the purchase',
    ],
    'delete' => [
      'success_message' => 'The purchase was deleted',
      'failure_message' => 'Could not delete the purchase',
    ],
    'returnStore' => [
      'success_message' => 'The return statement has been created',
      'failure_message' => 'Could not create the return statement',
    ],
  ],
];
