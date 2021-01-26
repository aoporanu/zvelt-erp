@extends('layouts.admin')

@section('content')
    <div class="card full-height">
        <div class="card-body">
            <form action="{{ route('purchase.transfer') }}" method="post">
                @csrf
                <div class="form-group">
                    <input type="text" name="item_id" class="form-control @error('item_id') is-invalid @enderror" value="{{ old('item_id') }}" placeholder="Item name"/>
                </div>
                <div class="form-group">
                    <input type="text" name="qty" class="form-control @error('qty') is-invalid @enderror" value="{{ old('qty') }}" placeholder="QTY" />
                </div>
                <div class="form-group row">
                    <div class="col-md-6">
                        <select name="from_warehouse" class="form-control @error('from_warehouse') is-invalid @enderror">
                            <option value="">-- select warehouse --</option>
                            @foreach($warehouses as $warehouse)
                                <option value="{{ $warehouse->id }}">{{ $warehouse->name }}</option>
                            @endforeach
                            @error('from_warehouse')
                            <span class="alert alert-danger" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </select>
                    </div>
                    <div class="col-md-6">
                        <select name="from_location" class="form-control @error('from_location') is-invalid @enderror">
                            <option value="">-- select location --</option>
                            @foreach($locations as $location)
                                <option value="{{ $location->id }}">{{ $location->name }}</option>
                            @endforeach
                            @error('from_location')
                            <span class="alert alert-danger" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-6">
                        <select name="to_warehouse" class="form-control @error('to_warehouse') is-invalid @enderror">
                            <option value="">-- select warehouse --</option>
                            @foreach($warehouses as $warehouse)
                                <option value="{{ $warehouse->id }}">{{ $warehouse->name }}</option>
                            @endforeach
                            @error('to_warehouse')
                            <span class="alert alert-danger" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </select>
                    </div>
                    <div class="col-md-6">
                        <select name="to_location" class="form-control @error('to_location') is-invalid @enderror">
                            <option value="">-- select location --</option>
                            @foreach($locations as $location)
                                <option value="{{ $location->id }}">{{ $location->name }}</option>
                            @endforeach
                            @error('to_location')
                            <span class="alert alert-danger" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">{{ __('Transfer purchase') }}</button>
                </div>
            </form>
        </div>
    </div>
@endsection
