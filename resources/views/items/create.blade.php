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
                        @forelse($categories as $category)
          <option value="{{ $category->id }}">{{ $category->name }}</option>
          @empty

                        @endforelse
                    </select>
                </div>
                <div class="form-group">
                    <label for="brand_id" class="control-label">Brand</label>
                    <select name="brand_id" id="brand_id" class="form-control">
                        <option value="">Select brand</option>
                        @forelse($brands as $brand)
          <option value="{{ $brand->id }}">{{ $brand->name }}</option>
          @empty
          @endforelse
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
                        @forelse($packagings as $packaging)
          <option value="{{ $packaging->id }}">{{ $packaging->name }}</option>
          @empty
          @endforelse
                    </select>
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-success" value="Save item" />
                </div>
            </form>
        </div>
    </div>

@endsection
@push('scripts')
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>

<script type="text/javascript">
$(document).ready(function() {
    $('#packaging').select2();
    $('#category_id').select2();
    $('#brand_id').select2();
});
</script>
@endpush
@section('styles')
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css" rel="stylesheet" />
@endsection
