<!-- begin #sidebar -->
<div id="sidebar" class="sidebar">
    <!-- begin sidebar scrollbar -->
    <div data-scrollbar="true" data-height="100%">
        <!-- begin sidebar user -->
        <ul class="nav">
            <!--<li class="nav-profile">
                        <div class="image">
                            <a href="javascript:;"><img src="assets/img/user-13.jpg" alt="" /></a>
                        </div>
                        <div class="info">
                            Sean Ngu
                            <small>Front end developer</small>
                        </div>
                    </li>-->
        </ul>
        <!-- end sidebar user -->
        <!-- begin sidebar nav -->
        <ul class="nav">
            <li class="nav-header menu-caption">Navigation</li>
            <li class="has-sub active">
                        <a href="javascript:;">
                            <b class="caret pull-right"></b>
                            <i class="fa fa-laptop"></i>
                            <span>Dashboard</span>
                        </a>
                        <ul class="sub-menu">
                            <li><a href="/">Tableau de Bord</a></li>
                            <li class=""><a href="/">Statistique</a></li>
                        </ul>
            </li>

            <li class="menu-caption">
                <span>Accueil</span>
            </li>

            <li class="has-sub">
                <a href="javascript:;">
                    <b class="caret pull-right"></b>
                    <i class="fa fa-users"></i>
                    <span>Utilisateurs</span>
                </a>
                <ul class="sub-menu">
                    <li><a href="{{ url('user') }}">Liste des utilisateurs</a></li>
                </ul>
            </li>


            <li class="has-sub">
                <a href="javascript:;">
                    <b class="caret pull-right"></b>
                    <i class="fa fa-users"></i>
                    <span>Services</span>
                </a>
                <ul class="sub-menu">
                    <li><a href="{{ url('service') }}">Liste des services</a></li>
                </ul>
            </li>

            <li class="has-sub">
                <a href="javascript:;">
                    <b class="caret pull-right"></b>
                    <i class="fa fa-users"></i>
                    <span>Blogs</span>
                </a>
                <ul class="sub-menu">
                    <li><a href="{{ url('blog') }}">Liste des blogs</a></li>
                </ul>
            </li>

            <li class="has-sub">
                <a href="javascript:;">
                    <b class="caret pull-right"></b>
                    <i class="fa fa-users"></i>
                    <span>Agence</span>
                </a>
                <ul class="sub-menu">
                    <li><a href="{{ url('agency') }}">Liste des services</a></li>
                </ul>
            </li>

           
            
            

            <li><a href="javascript:;" class="sidebar-minify-btn" data-click="sidebar-minify"><i
                        class="fa fa-angle-double-left"></i></a></li>
            <!-- end sidebar minify button -->
        </ul>
        <!-- end sidebar nav -->
    </div>
    <!-- end sidebar scrollbar -->
</div>
<div class="sidebar-bg"></div>
<!-- end #sidebar -->
