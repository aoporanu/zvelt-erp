@extends('layouts.admin')

@section('sidebar')
    @include('partials.admin.sidebar')
@endsection

@section('content')
    <div class="card full-height">
        <div class="card-body">
            <form action="{{ route('items.store') }}" class="form-horizontal" method="post">
                @csrf
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control @error"
                </div>
            </form>
        </div>
    </div>
