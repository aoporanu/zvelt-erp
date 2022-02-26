@extends('layouts.admin')

@section('content')
  <div class="card full-height">
    <div class="card-body">
      <form action="{{ route('locations.store') }}" method="post">
        @csrf
        <div class="form-group @error('name', 'location') has-error has-feedback @enderror">
          <label for="name">{{ __('locations.create.label') }}</label>
          <input type="text" id="name" name="name" class="form-control" placeholder="Location name" value="{{ old('name') }}" />
          @error('name', 'location')
            <small id="nameHelp" class="form-text text-muted">{{ $message }}</small>
          @enderror
        </div>
        <div class="form-group @error('type', 'location') has-error has-feedback @enderror">
          <label for="type">{{ __('locations.create.type') }}</label>
          <input type="text" id="type" name="type" class="form-control" placeholder="Location type" value="{{ old('type')}}" />
          @error('type', 'location')
            <small id="typeHelp" class="form-text text-muted">{{ $message }}</small>
          @enderror
        </div>
        <div class="form-group @error('type', 'location') has-error has-feedback @enderror">
          <label for="warehouses">{{ __('locations.create.warehouse') }}</label>
          <select name="warehouse_id" id="warehouses" class="form-control">
              <option value="">{{__('locations.create.select-warehouse')}}</option>
            @forelse($warehouses as $warehouse)
              <option value="{{ $warehouse->id }}">{{ $warehouse->name }}</option>
            @empty
              <option value="">No warehouses</option>
            @endforelse
          </select>
          @error('warehouse_id', 'location')
            <small id="typeHelp" class="form-text text-muted">{{ $message }}</small>
          @enderror
        </div>

        <button class="btn btn-primary" type="submit">Store location</button>
      </form>
    </div>
  </div>
@endsection

@section('sidebar')
@include('partials.admin.sidebar')
@endsection
