@extends('layouts.app')

@section('content')
<div class="container">
  <div class="row">
    <div class="col-12 col-sm-6 col-md-3">
      <div class="info-box">
        <span class="info-box-icon bg-info elevation-1"><i class="fas fa-cog"></i></span>
        <div class="info-box-content">
          <span class="info-box-text">CPU Traffic</span>
          <span class="info-box-number">
            10
            <small>%</small>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="row justify-content-center">

    <div class="col-md-8">
      <div class="card">
        <div class="card-header">Dashboard</div>

        <div class="card-body">
          @if (session('status'))
          <div class="alert alert-success" role="alert">
            {{ session('status') }}
          </div>
          @endif
          You are logged in!
        </div>
      </div>
    </div>
  </div>
</div>
@endsection
