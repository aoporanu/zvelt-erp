@extends('layouts.admin')

@section('sidebar')
    @include('partials.admin.sidebar')
@endsection

@section('content')
    <div class="card full-height">
        <div class="card-body">
            @if(count($items) == 0)
                <span class="alert alert-danger" role="alert">
                    <strong>There are no items in your inventory. Create some items before making any purchases</strong>
                </span>
            @endif
            <form class="form-horizontal" method="post" action="@if(count($items) > 0) {{ route('purchase.store') }} @endif">
                @csrf
                <div class="form-group">
                    <label for="purchase_id">Purchase ID</label>
                    <input type="text" class="form-control @error('purchase_id') is-invalid @enderror" id="purchase_id"
                           name="purchase_id" value="{{ old('purchase_id') ? $lastPurchaseId : old('purchase_id') }}"/>
                    @error('purchase_id')
                    <span class="alert alert-danger" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="for_invoice">For Invoice</label>
                    <input type="text" class="form-control @error('for_invoice') is-invalid @enderror" id="for_invoice"
                           name="for_invoice" value="{{ old('for_invoice') }}"/>
                    @error('for_invoice')
                    <span class="alert alert-danger" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="supplier_id">Supplier ID</label>
                    <select class="form-control @error('supplier_id') is-invalid @enderror" name="supplier_id"
                            id="supplier_id">
                        <option value="">--Please pick supplier--</option>
                        @foreach($suppliers as $supplier)
                            <option
                                value="{{ $supplier->id }}" @if($supplier->id == old('supplier_id')) {{ 'selected' }} @endif>{{ $supplier->name }}</option>
                        @endforeach
                    </select>
                    @error('supplier_id')
                    <span class="alert alert-danger" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="discount">Discount</label>
                    <input type="number" class="form-control @error('discount') is-invalid @enderror" id="discount"
                           name="discount" value="{{ old('discount') }}"/>
                    @error('discount')
                    <span class="alert alert-danger" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="value">Value</label>
                    <input type="text" readonly class="form-control @error('value') is-invalid @enderror" id="value"
                           name="value" value="{{ old('value') }}"/>
                    @error('value')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="total">Total</label>
                    <input type="text" readonly class="form-control @error('total') is-invalid @enderror" id="total"
                           name="total" value="{{ old('total') }}"/>
                    @error('total')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="form-group">
                    @include('partials.purchases.items')
                    <div class="row">
                        <a href="#" class="btn btn-primary" id="add_row">
                            <i class="fas fa-plus-circle"></i>
                        </a>
                    </div>
                </div>
                @if(count($items) > 0)
                <div class="card-action">
                    <input type="submit" class="btn btn-success" value="Save purchase"/>
                </div>
                @endif
            </form>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            let iterator = 0;
            let wrapper = $('.form-group');
            $('#add_row').click(function (e) {
                iterator+=1;
                e.preventDefault();
                $(this).closest('.form-group').before(`
            <div class="form-group row-purchased">
        <div class="form-row">
            <div class="form-group col-md-4">
                <input type="text" placeholder="Item name"
                       class="form-control @error('item.*.item_name') is-invalid @enderror item-name"
                       name="item[${ iterator }][item_name]" value="{{ @old('item.*.item_name') }}"/>
                @error('item.*.item_name')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                @enderror
                </div>
                <div class="form-group col-md-2">
                    <input type="number" placeholder="Item qty"
                           class="form-control item-qty item_qty @error('item.*.item_qty') is-invalid @enderror"
                       name="item[${ iterator }][item_qty]" value="{{ @old('item.*.item_qty') }}"/>
                @error('item.*.item_qty')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                @enderror
                </div>
                <div class="form-group col-md-2">
                    <input type="text" placeholder="Item purchase price"
                           class="form-control purchase-price @error('item.*.purchase_price') is-invalid @enderror"
                       name="item[${ iterator }][purchase_price]" value="{{ @old('item.*.purchase_price') }}"/>
                @error('item.*.purchase_price')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                @enderror
                </div>
                <div class="form-group col-md-3">
                    <input type="text" value="{{ old('item.*.expiration_date') }}" name="item[${ iterator }][expiration_date]"
                       placeholder="Expiration date"
                       class="form-control @error('item.*.expiration_date') is-invalid @enderror"/>
                @error('item.*.expiration_date')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                @enderror

                </div>
                <div class="form-group col-md-1">
                    <a href="#" class="btn btn-danger remove-row" onclick="removeRow(this); return false;">
                        <i class="fas fa-minus-square"></i>
                    </a>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <input type="text" class="form-control @error('item.*.lot') is-invalid @enderror"
                       name="item[${ iterator }][lot]" placeholder="Lot" value="{{ old('item.*.lot') }}"/>
                @error('item.*.lot')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                @enderror
                </div>
                <div class="form-group col-md-4">
                    <input type="text" class="form-control @error('item.*.upc') is-invalid @enderror"
                       name="item[${ iterator }][upc]" placeholder="UPC Code" value="{{ old('item.*.upc') }}"/>
                @error('item.*.upc')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                @enderror
                </div>
                <div class="form-group col-md-4">
                    <input type="text" class="form-control @error('item.*.ean') is-invalid @enderror"
                       name="item[${ iterator }][ean]" placeholder="EAN Code" value="{{ old('item.*.ean') }}"/>
                @error('item.*.ean')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                @enderror
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <select class="form-control @error('item.*.warehouse') is-invalid @enderror"
                        name="item[${ iterator }][warehouse_id]"
                        id="warehouse_id">
                    <option value="">Please pick warehouse</option>
                    @foreach($warehouses as $warehouse)
                <option value="{{ $warehouse->id }}">{{ $warehouse->name }}</option>
                        @endforeach
                </select>
            </div>
            <div class="form-group col-md-6">
                <select class="form-control @error('item.*.location_id') is-invalid @enderror"
                        name="item[${ iterator }][location_id]"
                        id="location_id">
                    <option value="">Please pick location</option>
                    @foreach($locations as $location)
                <option value="{{ $location->id }}">{{ $location->name }}</option>
                        @endforeach
                </select>
            </div>
        </div>
    </div>
`);
                calculateTotal();
            });
            $('#supplier_id, .warehouse-id, .location-id, .item-name').select2();
        });

        $('.purchase-price').keyup(function() {
            calculateTotal();
        });

        function removeRow(elem) {
            if ($('.row-purchased').length === 1) {
                return;
            }
            $(elem).parent().parent().remove();
            calculateTotal();
        }

        function calculateTotal() {
            let rows = $('.row-purchased');
            let subtotal = 0;
            let total = 0;
            let discount = $('#discount').val();
            $.each(rows, function () {
                let $row = $(this);
                if ($row.find('.item-qty').val() !== '' && $row.find('.purchase-price').val() !== '') {
                    let qty = $row.find(".item-qty").val();
                    let price = $row.find('.purchase-price').val();
                    subtotal += (parseInt(qty, 10) * parseFloat(price));
                }
                $('#value').val(subtotal);
                total = subtotal - (subtotal * (parseInt(discount) / 100));
                $('#total').val(total);
            })
        }
    </script>
@endsection
@section('styles')
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css" rel="stylesheet" />
@endsection
