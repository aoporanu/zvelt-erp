@extends('layouts.admin')
@section('sidebar')
    @include('partials.admin.sidebar')
@endsection
@section('content')
    <div class="card full-height">
        @if(empty($items))
            <span class="alert alert-danger" role="alert">
                {{ __('The items array is empty') }}
            </span>
        @endif
        @if(empty($warehouses))
            <span class="alert alert-danger" role="alert">
                {{ __('The warehouses array is empty') }}
            </span>
        @endif
        @if(empty($locations))
            <span class="alert alert-danger" role="alert">
                {{ __('The locations array is empty') }}
            </span>
        @endif
        <div class="card-body">
            <form action="{{ route('purchase.transfer') }}" method="post">
                @csrf
                <div class="form-group">
                    <input type="text" name="item_id" id="item_id" class="form-control @error('item_id') is-invalid @enderror" value="{{ old('item_id') }}" placeholder="Item name"/>
                    @error('item_id')
                    <soan class="alert alert-danger" role="alert">
                        {{ $message }}
                    </soan>
                    @enderror
                </div>
                <div class="form-group">
                    <input type="text" name="qty" class="form-control @error('qty') is-invalid @enderror" value="{{ old('qty') }}" placeholder="QTY" />
                    @error('qty')
                    <soan class="alert alert-danger" role="alert">
                        {{ $message }}
                    </soan>
                    @enderror
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
                    @if(!empty($items))
                    <button type="submit" class="btn btn-primary">{{ __('Transfer purchase') }}</button>
                    @endif
                </div>
            </form>
        </div>
    </div>
@endsection

@if(!empty($items) && !empty($warehouses) && !empty($locations))
@push('scripts')
    <script type="text/javascript">
        $(document).ready(function () {
            $('#item_id').autocomplete({
                source: $items
            });
        });
    </script>
@endpush
@endif
