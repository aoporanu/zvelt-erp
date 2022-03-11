@extends('layouts.admin')

@section('content')
<div class="card full-height">
  <div class="card-body">
    <form class="form-horizontal" method="post" action="{{ route('return.store') }}">
      @csrf
      <div class="form-group">
       <input type="text" class="form-control" name="bom_serial" value="{{ old('bom_serial') }}" placeholder="{{ __('purchases.returns.pages.create.form.bom_label') }}" /> 
      </div>
        <input type="hidden" name="created_by" value="{{ auth()->id() }}" />
      <div class="form-group"></div>
      <div class="form-group"></div>
      <div class="form-group"></div>
      <button type="submit" class="btn btn-primary">
        <i class="fa fa-arrow-right"></i>
        {{ __('purchases.returns.pages.create.form.button_label')}}
      </button>
    </form>
  </div>
</div>
@endsection

@section('sidebar')
@include('partials.admin.sidebar')
@endsection
