<?php

return [
  'pages' => [
    'show' => [
      'title' => 'Showing order',
    ],
    'edit' => [
      'title' => 'Order edit page',
    ],
    'index' => [
      'title' => 'Orders index',
    ],
    'create' => [
      'title' => 'Create order',
      'messages' => [
        'no_route_for_agent' => 'no route for this agent to the shop',
        'no_ceil_for_client' => 'You have no ceil left for any order to this shop. Please try to cash some of your overdue invoices, or ask for a derrogation.',
        'already_invoiced' => 'This client has already been invoiced by you. Please cash the invoice first',
        'item_not_purchased' => 'There wasn\'t any purchase for this item',
        'item_not_enough_stock' => 'Unable to add the current item to your order. The quantity on stock is less than what you\'re ordering',
        'item_out_of_stock' => 'Unable to add the current item to your order, it\'s out of stock',
        'order_no_items' => 'The order doesn\'t have any items, it will be deleted',
      ]
    ],
  ],
];
