@extends('layouts.admin')

@section('content')
  <div class="card full-height">
    <div class="card-body">
      <form action="{{ route('warehouse.store') }}" method="post" class="form-horizontal">
        @csrf
        <div class="form-group @error('name', 'warehouse') has-error has-feedback @enderror">
        <label for="name">{{ __('warehouses.create.label') }}</label>
        <input type="text" id="name" name="name" class="form-control" placeholder="Warehouse name" value="{{ old('name') }}" />
        @error('name', 'warehouse')
<small id="emailHelp" class="form-text text-muted">{{ $message }}</small>
          @enderror
        </div>
        <button type="submit" class="btn btn-primary">Store warehouse</button>
      </form>
    </div>
  </div>
@endsection

@section('sidebar')
@include('partials.admin.sidebar')
@endsection
