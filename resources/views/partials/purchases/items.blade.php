@if(is_array(old('item')))
@php $iterator = 0; @endphp
@foreach(old('item') as $error)
<div class="form-group row-purchased">
    <div class="form-row">
        <div class="form-group col-md-4">
        <select name="item[{{ $iterator }}][item_name]" id="item_name" class="form-control @error('item.*.item_name') is-invalid @enderror item-name">
                <option value="">Please pick item</option>
                @foreach($items as $item)
                    <option value="{{ $item->id }}">{{ $item->name }}</option>
                @endforeach
            </select>
            @error('item.*.item_name')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="form-group col-md-2">
            <input type="number" placeholder="Item qty" class="form-control item-qty item_qty @error('item.*.item_qty') is-invalid @enderror" name="item[{{ $iterator }}][item_qty]" value="{{ @old('item.*.item_qty') }}" />
            @error('item.*.item_qty')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="form-group col-md-2">
            <input type="text" placeholder="Item purchase price" class="form-control purchase-price @error('item.*.purchase_price') is-invalid @enderror" name="item[{{ $iterator }}][purchase_price]" value="{{ @old('item.*.purchase_price') }}" />
            @error('item.*.purchase_price')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="form-group col-md-3">
            <input type="text" value="{{ old('item.*.expiration_date') }}" name="item[{{ $iterator }}][expiration_date]" placeholder="Expiration date" class="form-control @error('item.*.expiration_date') is-invalid @enderror" />
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
            <input type="text" class="form-control @error('item.*.lot') is-invalid @enderror" name="item[{{ $iterator }}][lot]" placeholder="Lot" value="{{ old('item.*.lot') }}" />
            @error('item.*.lot')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="form-group col-md-4">
            <input type="text" class="form-control @error('item.*.upc') is-invalid @enderror" name="item[{{ $iterator }}][upc]" placeholder="UPC Code" value="{{ old('item.*.upc') }}" />
            @error('item.*.upc')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="form-group col-md-4">
            <input type="text" class="form-control @error('item.*.ean') is-invalid @enderror" name="item[{{ $iterator }}][ean]" placeholder="EAN Code" value="{{ old('item.*.ean') }}" />
            @error('item.*.ean')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <select class="form-control @error('item.*.warehouse_id') is-invalid @enderror" name="item[{{ $iterator }}][warehouse_id]" id="warehouse_id">
                <option value="">Please pick warehouse</option>
                @foreach($warehouses as $warehouse)
                <option value="{{ $warehouse->id }}">{{ $warehouse->name }}</option>
                @endforeach
            </select>
            @error('item.*.warehouse_id')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="form-group col-md-6">
            <select class="form-control @error('item.*.location_id') is-invalid @enderror" name="item[{{ $iterator }}][location_id]" id="location_id">
                <option value="">Please pick location</option>
                @foreach($locations as $location)
                <option value="{{ $location->id }}">{{ $location->name }}</option>
                @endforeach
            </select>
            @error('item.*.location_id')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="form-group col-md-6">
            <input type="text" class="form-control" name="item[{{ $iterator }}][vat]" id="vat" value="{{ old('item.*.vat') }}" />
            @error('item.*.vat')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
    </div>
</div>
@php $iterator++; @endphp
@endforeach
@else
<div class="form-group row-purchased">
    <div class="form-row">
        <div class="form-group col-md-4">
            <select name="item[0][item_name]" id="item_name" class="form-control @error('item.*.item_name') is-invalid @enderror item-name">
                <option value="">Please pick item</option>
                @foreach($items as $item)
                    <option value="{{ $item->id }}">{{ $item->name }}</option>
                @endforeach
            </select>
            
            @error('item.*.item_name')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="form-group col-md-2">
            <input type="number" placeholder="Item qty" class="form-control item-qty item_qty @error('item.*.item_qty') is-invalid @enderror" name="item[0][item_qty]" value="{{ @old('item.*.item_qty') }}" />
            @error('item.*.item_qty')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="form-group col-md-2">
            <input type="text" placeholder="Item purchase price" class="form-control purchase-price @error('item.*.purchase_price') is-invalid @enderror" name="item[0][purchase_price]" value="{{ @old('item.*.purchase_price') }}" />
            @error('item.*.purchase_price')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="form-group col-md-3">
            <input type="text" value="{{ old('item.*.expiration_date') }}" name="item[0][expiration_date]" placeholder="Expiration date" class="form-control @error('item.*.expiration_date') is-invalid @enderror" />
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
            <input type="text" class="form-control @error('item.*.lot') is-invalid @enderror" name="item[0][lot]" placeholder="Lot" value="{{ old('item.*.lot') }}" />
            @error('item.*.lot')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="form-group col-md-4">
            <input type="text" class="form-control @error('item.*.upc') is-invalid @enderror" name="item[0][upc]" placeholder="UPC Code" value="{{ old('item.*.upc') }}" />
            @error('item.*.upc')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="form-group col-md-4">
            <input type="text" class="form-control @error('item.*.ean') is-invalid @enderror" name="item[0][ean]" placeholder="EAN Code" value="{{ old('item.*.ean') }}" />
            @error('item.*.ean')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <select class="form-control @error('item.*.warehouse_id') is-invalid @enderror warehouse-id" name="item[0][warehouse_id]" id="warehouse_id">
                <option value="">Please pick warehouse</option>
                @foreach($warehouses as $warehouse)
                <option value="{{ $warehouse->id }}">{{ $warehouse->name }}</option>
                @endforeach
            </select>
            @error('item.*.warehouse_id')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="form-group col-md-6">
            <select class="form-control @error('item.*.location_id') is-invalid @enderror location-id" name="item[0][location_id]" id="location_id">
                <option value="">Please pick location</option>
                @foreach($locations as $location)
                    <option value="{{ $location->id }}">{{ $location->name }}</option>
                @endforeach
            </select>
            @error('item.*.location_id')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>
        <div class="form-group col-md-6">
            <input type="text" class="form-control" name="item[0][vat]" id="vat" value="{{ old('item.*.vat') }}" placeholder="VAT" />
        </div>
    </div>
</div>
@endif