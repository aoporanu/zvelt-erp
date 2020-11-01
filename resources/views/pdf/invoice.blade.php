<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PDF Demo in Laravel 7</title>
    <style type="text/css">
      .tg  {border-collapse:collapse;border-color:#93a1a1;border-spacing:0;}
      .tg td{background-color:#fdf6e3;border-bottom-width:1px;border-color:#93a1a1;border-style:solid;border-top-width:1px;
        border-width:0px;color:#002b36;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;
        word-break:normal;}
      .tg th{background-color:#657b83;border-bottom-width:1px;border-color:#93a1a1;border-style:dotted;border-top-width:1px;
        border-width:0px;color:#fdf6e3;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;
        padding:10px 5px;word-break:normal;}
      .tg .tg-73oq{border-color:#000000;text-align:left;vertical-align:top}
      </style>
  </head>
  <body>
    <table class="tg">
    <thead>
      <tr>
        <th class="tg-73oq"># CRT.</th>
            <th class="tg-73oq">Denumire</th>
            <th class="tg-73oq">UM</th>
            <th class="tg-73oq">Cantitate</th>
            <th class="tg-73oq">Total</th>
            <th class="tg-73oq">Lot</th>
      </tr>
      </thead>
      <tbody>
        @foreach ($purchase->purchasedItems ?? '' as $item)
          <tr>
            <td class="tg-73oq">{{ $item->id }}</td>
            <td class="tg-73oq">{{ $item->item->name }}</td>
            <td class="tg-73oq">{{ $item->item->unit_of_measure }}</td>
            <td class="tg-73oq">{{ (double)$item->purchase_cost * $item->qty }}</td>
            <td class="tg-73oq">{{ $item->lot }}</td>
          </tr>  
        @endforeach
      </tbody>
    </table>
  </body>
</html>