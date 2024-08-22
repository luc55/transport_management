<body>
    <!-- begin #page-loader -->
    <div id="page-loader" class="fade in"><span class="spinner"></span></div>
    <!-- end #page-loader -->
    
    <!-- begin #page-container -->
    <div id="page-container" class="fade page-sidebar-fixed page-header-fixed">
        <!-- begin #header -->
        <div id="header" class="header navbar navbar-default navbar-fixed-top">
            <!-- begin container-fluid -->
            <div class="container-fluid">
                <!-- begin mobile sidebar expand / collapse button -->
                <div class="navbar-header">
                    <a href="{{url('/')}}" class="navbar-brand"><span class="navbar-logo"></span>SAHRAOUI</a>
                    <button type="button" class="navbar-toggle" data-click="sidebar-toggled">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <!-- end mobile sidebar expand / collapse button -->
                
                <!-- begin header navigation right -->
                <ul class="nav navbar-nav navbar-right">
                   
                    <li class="dropdown">
                        <a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle f-s-14">
                            <i class="fa fa-bell-o"></i>
                            <span class="label">0</span>
                        </a>
                        
                    </li>
                    <li class="dropdown navbar-user">
                        <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
                            <img src="{{asset ('assets/user-circle.png')}}" alt="" /> 
                            <span class="hidden-xs">{{Auth::user()->name}}</span> <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu animated fadeInLeft">
                            <li class="arrow"></li>
                            <li>
                                <form action="{{ route("logout")}}" method="POST">
                                    @csrf
                                    <button type="submit" class="dropdown-item">
                                        Se Déconnecter
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </li>
                </ul>
                <!-- end header navigation right -->

                 {{-- toast --}}
      
            </div>
            <!-- end container-fluid -->
        </div>
        <!-- end #header -->
        