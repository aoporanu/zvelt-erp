@if($errors->has('item'))
    @php $count = count($errors->first('item') @endphp
    @foreach($errors->first('item'))
        <div class="row row-purchased">
            <div class="row">
                <div class="col">
                    <input type="text" placeholder="Item name"
                           class="form-control @error('item.*.item_name') is-invalid @enderror item-name"
                           name="item[][item_name]" value="{{ @old('item.*.item_name') }}"/>
                    @error('item.*.item_name')
                    <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                    @enderror
                </div>
                <div class="col">
                    <input type="number" placeholder="Item qty"
                           class="form-control item-qty item_qty @error('item.*.item_qty') is-invalid @enderror"
                           name="item[][item_qty]" value="{{ @old('item.*.item_qty') }}"/>
                    @error('item.*.item_qty')
                    <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                    @enderror
                </div>
                <div class="col">
                    <input type="text" placeholder="Item purchase price"
                           class="form-control purchase-price @error('item.*.purchase_price') is-invalid @enderror"
                           name="item[][purchase_price]" value="{{ @old('item.*.purchase_price') }}"/>
                    @error('item.*.purchase_price')
                    <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                    @enderror
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <input type="text" value="{{ old('item.*.expiration_date') }}" name="item[][expiration_date]"
                           placeholder="Expiration date"
                           class="form-control @error('item.*.expiration_date') is-invalid @enderror"/>
                    @error('item.*.expiration_date')
                    <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                    @enderror

                </div>
                <a href="#" class="btn btn-danger remove-row">
                    <i class="fas fa-minus-square"></i>
                </a>
            </div>
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control @error('item.*.lot') is-invalid @enderror"
                           name="item[][lot]" placeholder="Lot" value="{{ old('item.*.lot') }}"/>
                    @error('item.*.lot')
                    <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                    @enderror
                </div>
                <div class="col">
                    <input type="text" class="form-control @error('item.*.upc') is-invalid @enderror"
                           name="item[][upc]" placeholder="UPC Code" value="{{ old('item.*.upc') }}"/>
                    @error('item.*.upc')
                    <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                    @enderror
                </div>
                <div class="col">
                    <input type="text" class="form-control @error('item.*.ean') is-invalid @enderror"
                           name="item[][ean]" placeholder="EAN Code" value="{{ old('item.*.ean') }}"/>
                    @error('item.*.ean')
                    <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                    @enderror
                </div>

            </div>

        </div>
        @else
            <div class="row row-purchased">
                <div class="row">
                    <div class="col">
                        <input type="text" placeholder="Item name"
                               class="form-control @error('item.*.item_name') is-invalid @enderror item-name"
                               name="item[][item_name]" value="{{ @old('item.*.item_name') }}"/>
                        @error('item.*.item_name')
                        <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                        @enderror
                    </div>
                    <div class="col">
                        <input type="number" placeholder="Item qty"
                               class="form-control item-qty item_qty @error('item.*.item_qty') is-invalid @enderror"
                               name="item[][item_qty]" value="{{ @old('item.*.item_qty') }}"/>
                        @error('item.*.item_qty')
                        <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                        @enderror
                    </div>
                    <div class="col">
                        <input type="text" placeholder="Item purchase price"
                               class="form-control purchase-price @error('item.*.purchase_price') is-invalid @enderror"
                               name="item[][purchase_price]" value="{{ @old('item.*.purchase_price') }}"/>
                        @error('item.*.purchase_price')
                        <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                        @enderror
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <input type="text" value="{{ old('item.*.expiration_date') }}" name="item[][expiration_date]"
                               placeholder="Expiration date"
                               class="form-control @error('item.*.expiration_date') is-invalid @enderror"/>
                        @error('item.*.expiration_date')
                        <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                        @enderror

                    </div>
                    <a href="#" class="btn btn-danger remove-row">
                        <i class="fas fa-minus-square"></i>
                    </a>
                </div>
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control @error('item.*.lot') is-invalid @enderror"
                               name="item[][lot]" placeholder="Lot" value="{{ old('item.*.lot') }}"/>
                        @error('item.*.lot')
                        <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                        @enderror
                    </div>
                    <div class="col">
                        <input type="text" class="form-control @error('item.*.upc') is-invalid @enderror"
                               name="item[][upc]" placeholder="UPC Code" value="{{ old('item.*.upc') }}"/>
                        @error('item.*.upc')
                        <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                        @enderror
                    </div>
                    <div class="col">
                        <input type="text" class="form-control @error('item.*.ean') is-invalid @enderror"
                               name="item[][ean]" placeholder="EAN Code" value="{{ old('item.*.ean') }}"/>
                        @error('item.*.ean')
                        <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                        @enderror
                    </div>

                </div>

            </div>
        @endif
