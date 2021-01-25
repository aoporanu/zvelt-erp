@extends('layouts.admin')

@section('content')
    <div class="card full-height">
        <div class="card-body">
            <form class="form-horizontal" method="post" action="{{ route('purchase.transfer') }}">
                @csrf
                <div class="form-group">
                    <select name="item_name" id="item_name" class="form-control @error('item_name') is-invalid @eoderror">
                        <option value="">-- select an item --</option>
                        @foreach($items as $item)
                            <option value="{{ $item->id }}">{{ $item->name }}</option>
                        @endforeach
                    </select>
                    @error('item_name')
                    <span class="alert alert-danger" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <select name="from_warehouse" id="from_warehouse" class="form-control @error('from_warehouse') is-invalid @enderror">
                        <option value="">-- select the warehouse --</option>
                        @foreach($warehouses as $warehouse)
                            <option value="{{ $warehose->id }}">{{ $warehouse->name }}</option>
                        @endforeach
                    </select>
                    @error('from_warehouse')
                    <span class="alert alert-danger" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <select name="from_location" id="from_location" class="form-control @error('from_location') is-invalid @enderror">
                        <option value="">-- select the location --</option>
                        @foreach($locations as $location)
                            <option value="{{ $location->id }}">{{ $location->name }}</option>
                        @endforeach
                    </select>
                    @error('from_location')
                    <span class="alert alert-danger" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <select name="to_warehouse" id="to_warehouse" class="form-control @error('to_warehouse') is-invalid @enderror">
                        <option value="">-- select the warehouse --</option>
                        @foreach($warehouses as $warehouse)
                            <option value="{{ $warehose->id }}">{{ $warehouse->name }}</option>
                        @endforeach
                    </select>
                    @error('to_warehouse')
                    <span class="alert alert-danger" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <select name="to_location" id="to_location" class="form-control @error('to_location') is-invalid @enderror">
                        <option value="">-- select the location --</option>
                        @foreach($locations as $location)
                            <option value="{{ $location->id }}">{{ $location->name }}</option>
                        @endforeach
                    </select>
                    @error('to_location')
                    <span class="alert alert-danger" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <input type="text" id="qty" name="qty" value="{{ old('qty') }}" placeholder="QTY to transfer" class="form-control @error('qty') is-invalid @enderror" />
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Transfer stock</button>
                </div>
            </form>
        </div>
    </div>
@endsection
