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
                <li class="nav-item active">
                    <a data-toggle="collapse" href="#dashboard" class="collapsed" aria-expanded="false">
                        <i class="fas fa-home"></i>
                        <p>Dashboard</p>
                        <span class="caret"></span>
                    </a>
                    <div class="collapse" id="dashboard">
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
                <li class="nav-item">
                    <a href="#items" class="collapsed" data-toggle="collapse" aria-expanded="false">
                        <i class="fas fa-item"></i>
                        <p>Items</p>
                        <span class="caret"></span>
                    </a>
                    <div class="collapse" id="items">
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
                <li class="nav-item">
                    <a data-toggle="collapse" href="#purchases" class="collapsed" aria-expanded="false">
                        <i class="fas fa-shopping-bag"></i>
                        <p>Purchases</p>
                        <span class="caret"></span>
                    </a>
                    <div class="collapse" id="purchases">
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
                <li class="nav-section">
							<span class="sidebar-mini-icon">
								<i class="fa fa-ellipsis-h"></i>
							</span>
                    <h4 class="text-section">Components</h4>
                </li>
            </ul>
        </div>
    </div>
</div>
