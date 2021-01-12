<div class="sidebar sidebar-style-2" data-background-color="dark2">
    <div class="sidebar-wrapper scrollbar scrollbar-inner">
        <div class="sidebar-content">
            <div class="user">
                <div class="avatar-sm float-left mr-2"></div>
                <div class="info">
                    <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
								<span>
                                    @auth
                                        {{ auth()->user()->name }}
                                    @else
                                        N/A User
                                    @endauth
									<span class="user-level">Administrator</span>
									<span class="caret"></span>
								</span>
                    </a>
                    <div class="clearfix"></div>

                    <div class="collapse in" id="collapseExample">
                        <ul class="nav">
                            <li>
                                <a href="#profile">
                                    <span class="link-collapse">My Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="#edit">
                                    <span class="link-collapse">Edit Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="#settings">
                                    <span class="link-collapse">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul class="nav nav-primary">
                <li class="nav-item  @if(
                    in_array('dashboard', 
                    explode('/', url()->current())
                    )
                    ) active submenu @else @endif">
                    <a data-toggle="collapse" href="#dashboard" class="collapsed" aria-expanded="false">
                        <i class="fas fa-home"></i>
                        <p>Dashboard</p>
                        <span class="caret"></span>
                    </a>
                    <div class="collapse @if(
                    in_array('dashboard', 
                    explode('/', url()->current())
                    )
                    ) show @else @endif" id="dashboard">
                        <ul class="nav nav-collapse">
                            <li>
                                <a href="../demo1/index.html">
                                    <span class="sub-item">Dashboard 1</span>
                                </a>
                            </li>
                            <li>
                                <a href="../demo2/index.html">
                                    <span class="sub-item">Dashboard 2</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item @if(
                    in_array('items', 
                    explode('/', url()->current())
                    )
                    ) active submenu @else @endif">
                    <a href="#items" class="collapsed" data-toggle="collapse" aria-expanded="false">
                        <i class="fas fa-sitemap"></i>
                        <p>Items</p>
                        <span class="caret"></span>
                    </a>
                    <div class="collapse @if(
                    in_array('items', 
                    explode('/', url()->current())
                    )
                    ) show @else @endif" id="items">
                        <ul class="nav nav-collapse">
                            <li>
                                <a href="{{ route('items.index') }}">
                                    <span class="sub-item">Items Index</span>
                                </a>
                            </li>
                            <li>
                                <a href="{{ route('items.create') }}">
                                    <span class="sub-item">Create Item</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item @if(
                    in_array('purchase', 
                    explode('/', url()->current())
                    )
                    ) active submenu @else @endif">
                    <a data-toggle="collapse" href="#purchases" class="collapsed" aria-expanded="false">
                        <i class="fas fa-shopping-bag"></i>
                        <p>Purchases</p>
                        <span class="caret"></span>
                    </a>
                    <div class="collapse @if(
                    in_array('purchase', 
                    explode('/', url()->current())
                    )
                    ) show @else @endif" id="purchases">
                        <ul class="nav nav-collapse">
                            <li>
                                <a href="{{ route('purchase.index') }}">
                                    <span class="sub-item">Purchases Index</span>
                                </a>
                            </li>
                            <li>
                                <a href="{{ route('purchase.create') }}">
                                    <span class="sub-item">Purchase more items</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item @if(
                    in_array('warehouse', 
                    explode('/', url()->current())
                    )
                    ) active submenu @else @endif">
                    <a data-toggle="collapse" href="#warehouse" class="collapsed" aria-expanded="false">
                        <i class="fas fa-industry"></i>
                        <p>Warehouse</p>
                        <span class="caret"></span>
                    </a>
                    <div class="collapse @if(
                    in_array('warehouse', 
                    explode('/', url()->current())
                    )
                    ) show @else @endif" id="warehouse">
                        <ul class="nav nav-collapse">
                            <li>
                                <a href="{{ route('warehouse.index') }}">
                                    <span class="sub-item">Warehouse Index</span>
                                </a>
                            </li>
                            <li>
                                <a href="{{ route('warehouse.create') }}">
                                    <span class="sub-item">Create Warehouse</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item @if(
                    in_array('invoices', 
                    explode('/', url()->current())
                    )
                    ) active submenu @else @endif">
                    <a data-toggle="collapse" href="#invoice" class="collapsed" aria-expanded="false">
                        <i class="fas fa-file-invoice"></i>
                        <p>Invoices</p>
                        <span class="caret"></span>
                    </a>
                    <div class="collapse @if(
                    in_array('invoices', 
                    explode('/', url()->current())
                    )
                    ) show @else @endif" id="invoice">
                        <ul class="nav nav-collapse">
                            <li>
                                <a href="{{ route('invoices.index') }}">
                                    <span class="sub-item">Invoice Index</span>
                                </a>
                            </li>
                            <li>
                                <a href="{{ route('invoices.create') }}">
                                    <span class="sub-item">Create Invoice</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item @if(
                    in_array('locations', 
                    explode('/', url()->current())
                    )
                    ) active submenu @else @endif">
                    <a data-toggle="collapse" href="#location" class="collapsed" aria-expanded="false">
                        <i class="fas fa-globe"></i>
                        <p>Locations</p>
                        <span class="caret"></span>
                    </a>
                    <div class="collapse @if(
                    in_array('locations', 
                    explode('/', url()->current())
                    )
                    ) show @else @endif" id="location">
                        <ul class="nav nav-collapse">
                            <li>
                                <a href="{{ route('locations.index') }}">
                                    <span class="sub-item">Locations Index</span>
                                </a>
                            </li>
                            <li>
                                <a href="{{ route('locations.create') }}">
                                    <span class="sub-item">Create location</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item @if(
                    in_array('packagings', 
                    explode('/', url()->current())
                    )
                    ) active submenu @else @endif">
                    <a data-toggle="collapse" href="#packaging" class="collapsed" aria-expanded="false">
                        <i class="fas fa-gift"></i>
                        <p>Packaging</p>
                        <span class="caret"></span>
                    </a>
                    <div class="collapse @if(
                    in_array('packagings', 
                    explode('/', url()->current())
                    )
                    ) show @else @endif" id="packaging">
                        <ul class="nav nav-collapse">
                            <li>
                                <a href="{{ route('packagings.index') }}">
                                    <span class="sub-item">Packaging Index</span>
                                </a>
                            </li>
                            <li>
                                <a href="{{ route('packagings.create') }}">
                                    <span class="sub-item">Create Packaging</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item @if(
                    in_array('suppliers', 
                    explode('/', url()->current())
                    )
                    ) active submenu @else @endif">
                    <a data-toggle="collapse" href="#supplier" class="collapsed" aria-expanded="false">
                        <i class="fas fa-ship"></i>
                        <p>Suppliers</p>
                        <span class="caret"></span>
                    </a>
                    <div class="collapse @if(
                    in_array('suppliers', 
                    explode('/', url()->current())
                    )
                    ) show @else @endif" id="supplier">
                        <ul class="nav nav-collapse">
                            <li>
                                <a href="{{ route('suppliers.index') }}">
                                    <span class="sub-item">Supplier Index</span>
                                </a>
                            </li>
                            <li>
                                <a href="{{ route('suppliers.create') }}">
                                    <span class="sub-item">Create Supplier</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item @if(
                    in_array('financials', 
                    explode('/', url()->current())
                    )
                    ) active submenu @else @endif">
                    <a data-toggle="collapse" href="#financial" class="collapsed" aria-expanded="false">
                        <i class="fas fa-money"></i>
                        <p>Financials</p>
                        <span class="caret"></span>
                    </a>
                    <div class="collapse @if(
                    in_array('financials', 
                    explode('/', url()->current())
                    )
                    ) show @else @endif" id="financial">
                        <ul class="nav nav-collapse">
                            <li>
                                <a href="{{ route('financials.index') }}">
                                    <span class="sub-item">Financial Index</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item @if(
                    in_array('shops', 
                    explode('/', url()->current())
                    )
                    ) active submenu @else @endif">
                    <a data-toggle="collapse" href="#shop" class="collapsed" aria-expanded="false">
                        <i class="fas fa-money"></i>
                        <p>Shops</p>
                        <span class="caret"></span>
                    </a>
                    <div class="collapse @if(
                    in_array('shops', 
                    explode('/', url()->current())
                    )
                    ) show @else @endif" id="shop">
                        <ul class="nav nav-collapse">
                            <li>
                                <a href="{{ route('financials.index') }}">
                                    <span class="sub-item">Financial Index</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item @if(
                    in_array('clients', 
                    explode('/', url()->current())
                    )
                    ) active submenu @else @endif">
                    <a data-toggle="collapse" href="#client" class="collapsed" aria-expanded="false">
                        <i class="fas fa-money"></i>
                        <p>Clients</p>
                        <span class="caret"></span>
                    </a>
                    <div class="collapse @if(
                    in_array('clients', 
                    explode('/', url()->current())
                    )
                    ) show @else @endif" id="client">
                        <ul class="nav nav-collapse">
                            <li>
                                <a href="{{ route('financials.index') }}">
                                    <span class="sub-item">Financial Index</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item @if(
                    in_array('orders', 
                    explode('/', url()->current())
                    )
                    ) active submenu @else @endif">
                    <a data-toggle="collapse" href="#order" class="collapsed" aria-expanded="false">
                        <i class="fas fa-money"></i>
                        <p>Orders</p>
                        <span class="caret"></span>
                    </a>
                    <div class="collapse @if(
                    in_array('orders', 
                    explode('/', url()->current())
                    )
                    ) show @else @endif" id="order">
                        <ul class="nav nav-collapse">
                            <li>
                                <a href="{{ route('financials.index') }}">
                                    <span class="sub-item">Financial Index</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
