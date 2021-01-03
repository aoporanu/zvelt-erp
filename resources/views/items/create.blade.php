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
                    <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="category_id">Category</label>
                    <select name="category_id" id="category_id" class="form-control">
                        <option value="">Select category</option>
                        @foreach($categories as $category)
                        <option value="{{ $category->id }}">{{ $category->name }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label for="vat" class="control-label">VAT</label>
                    <input type="text" class="form-control" id="vat" value="{{ old('vat') }}" />
                </div>
                <div class="form-group">
                    <label for="price" class="control-label">Price</label>
                    <input type="text" class="form-control" id="price" value="{{ old('price') }}" />
                </div>
                <div class="form-group">
                    <label for="weight" class="control-label">Weight</label>
                    <input type="text" class="form-control" id="weight" value="{{ old('weight') }}" />
                </div>
                <div class="form-group">
                    <label for="unit_of_measure" class="control-label">UOM</label>
                    <input type="text" id="unit_of_measure" class="form-control" value="{{ old('unit_of_measure') }}" />
                </div>
                <div class="form-group">
                    <label for="packaging" class="control-label">Packaging</label>
                    <select class="form-control @error('packaging') is-invalid @enderror" name="packaging" id="packaging">
                        <option value="">Please pick packaging</option>
                        @foreach($packagings as $packaging)
                            <option value="{{ $packaging->id }}">{{ $packaging->name }}</option>
                            @endforeach
                    </select>
                </div>
            </form>
        </div>
    </div>
@endsection