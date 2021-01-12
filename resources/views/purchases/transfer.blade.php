@extends('layouts.admin')

@section('content')
    <div class="card full-height">
        <div class="card-body">
            <form class="form-horizontal" method="post" action="{{ route('purchase.transfer') }}">
                @csrf
                <div class="form-group">
                    <input type="text" class="form-control" id="item_name" name="item_name" placeholder="Item name" />
                </div>
            </form>
        </div>
    </div>
@endsection
