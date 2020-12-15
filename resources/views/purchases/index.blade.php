@extends('layouts.admin')

@section('content')
    <div class="card full-height">
        <div class="card-body">
            <a href="{{ route('purchase.create') }}" role="button" class="btn btn-primary">
                <i class="fa fa-plus-circle"></i>
            </a>
            <table class="table table-bordered data-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>value</th>
                        <th>total</th>
                        <th>discount</th>
                        <th>supplier</th>
                        <th>actions</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
@endsection

@section('sidebar')
@include('partials.admin.sidebar')
@endsection

@section('scripts')
    <script type="text/javascript">
        $(document).ready(function () {
            $('.data-table').DataTable({
                processing: true,
                serverSide: true,
                ajax: "{{ route('purchase.index') }}",
                columns: [
                    {
                        data: 'id',
                        name: 'id'
                    },
                    {
                        data: 'value',
                        name: 'value'
                    },
                    {
                        data: 'total',
                        name: 'total'
                    },
                    {
                        data: 'discount',
                        name: 'discount'
                    },
                    {
                        data: 'supplier',
                        name: 'supplier'
                    },
                    {
                        data: 'action',
                        name: 'action',
                        orderable: false
                    },
                ],
                order: [
                    [0, 'desc']
                ]
            });
        });
    </script>
@endsection
