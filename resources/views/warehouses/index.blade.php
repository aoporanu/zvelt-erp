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
                        <th>uniqid</th>
                        <th>value</th>
                        <th>total</th>
                        <th>discount</th>
                        <th>supplier</th>
                        <th>purchased on</th>
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
