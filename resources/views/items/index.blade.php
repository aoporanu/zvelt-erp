@extends('layouts.admin')

@section('sidebar')
@include('partials.admin.sidebar')
@endsection


@section('content')
<div class="card full-height">
  <div class="card-body">
    <table class="table table-bordered data-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>category</th>
          <th>brand</th>
          <th>purchases</th>
          <th>actions</th>
        </tr>
      </thead>
    </table>
  </div>
</div>
<script type="text/javascript">
  $(document).ready(function() {
    $('.data-table').DataTable({
      processing: true,
      serverSide: true,
      ajax: "{{ route('items.index') }}",
      columns: [{
          data: 'id',
          name: 'id',
          searchable: false
        },
        {
          data: 'name',
          name: 'name'
        },
        {
          data: 'category.name',
          name: 'category'
        },
        {
          data: 'brand.name',
          name: 'brand'
        },
        {
          data: 'purchases',
          name: 'purchases'
        }
      ],
      select: true,
      buttons: [
        'copy', 'excel', 'pdf'
      ],
      responsive: true
    });
  });
</script>
@endsection
