@extends('layouts.admin')

@section('sidebar')
@include('partials.admin.sidebar')
@endsection

@section('content')
    <div class="card full-height">
        <div class="card-body">
            <form class="form-horizontal" method="post" action="{{ route('purchase.store') }}">
                @csrf
                <div class="form-group">
                    <label for="purchase_id">Purchase ID</label>
                    <input type="text" class="form-control" id="purchase_id" name="purchase_id" value="{{ old('purchase_id') }}" />
                    @error('purchase_id')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="for_invoice">For Invoice</label>
                    <input type="text" class="form-control" id="for_invoice" name="for_invoice" value="{{ old('for_invoice') }}" />
                    @error('for_invoice')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="supplier_id">Supplier ID</label>
                    <select class="form-control" name="supplier_id" id="supplier_id">
                        <option value="">--Please pick supplier--</option>
                        @foreach($suppliers as $supplier)
                            <option value="{{ $supplier->id }}">{{ $supplier->name }}</option>
                        @endforeach
                    </select>
                    @error('supplier_id')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="discount">Discount</label>
                    <input type="number" class="form-control" id="discount" name="discount" value="{{ old('discount') }}" />
                    @error('discount')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="total">Total</label>
                    <input type="text" readonly class="form-control" id="total" name="total" value="{{ old('total') }}" />
                    @error('total')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="card-action">
                    <button class="btn btn-success" type="submit">Save Purchase</button>
                    <button class="btn btn-danger">Cancel</button>
                </div>
            </form>
        </div>
    </div>
@endsection

@section('scripts')

@endsection
