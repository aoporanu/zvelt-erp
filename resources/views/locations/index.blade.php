@extends('layouts.admin')

@section('content')
<div class="card full-height">
  <div class="card-body">
    <table class="table table-bordered data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>On warehouse</th>
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
      ajax: "{{ route('locations.index') }}",
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
          data: 'type',
          name: 'type'
        },
        {
          data: 'warehouse.name',
          name: 'warehouse'
        }
      ],
      select: true,
      responsive: true
    })
  })
</script>
@endsection

@section('sidebar')
@include('partials.admin.sidebar')
@endsection
