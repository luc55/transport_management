<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->


<head>
    <meta charset="utf-8" />
    <title>SAHRAOUI| Connexion</title>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />
    
    <!-- ================== BEGIN BASE JS ================== -->
      
    
    <!-- ================== BEGIN BASE CSS STYLE ================== -->
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
    <link href="{{ asset("/assets/plugins/jquery-ui/themes/base/minified/jquery-ui.min.css")}}" rel="stylesheet" />
    <link href="{{ asset("/assets/plugins/bootstrap/css/bootstrap.min.css")}}" rel="stylesheet" />
    <link href="{{ asset("/assets/plugins/font-awesome/css/font-awesome.min.css")}}" rel="stylesheet" />
    <link href="{{ asset("/assets/css/animate.min.css")}}" rel="stylesheet" />
    <link href="{{ asset("/assets/css/style.min.css")}}" rel="stylesheet" />
    <link href="{{ asset("/assets/css/style-responsive.min.css")}}" rel="stylesheet" />
    <link href="{{ asset("/assets/css/theme/default.css")}}" rel="stylesheet" id="theme" />
    
    <!-- ================== END BASE CSS STYLE ================== -->
    
    <!-- ================== BEGIN BASE JS ================== -->
     <script src="{{asset ("/assets/plugins/pace/pace.min.js") }}" type="text/javascript"></script>
    <!-- ================== END BASE JS ================== -->
</head>
<body class="pace-top">
    <!-- begin #page-loader -->
    <div id="page-loader" class="fade in"><span class="spinner"></span></div>
    <!-- end #page-loader -->
    
    <div class="login-cover">
        <div class="login-cover-image"><img src="assets/img/login-bg/bg-1.jpg" data-id="login-cover-image" alt="" /></div>
        <div class="login-cover-bg"></div>
    </div>
    <!-- begin #page-container -->
    <div id="page-container" class="fade">
        <!-- begin login -->
        <div class="login login-v2" data-pageload-addclass="animated fadeIn">
            <!-- begin brand -->
            <div class="login-header">
                <div class="brand">
                    <span class=""></span> SAHRAOUI
                    <small>Connectez-vous à votre interface d'administration</small>
                </div>
                <div class="icon">
                   
                </div>
            </div>
            <!-- end brand -->
            <div class="login-content">
               <form class="form-horizontal" role="form" method="POST" action="{{ url('/login') }}">
                        {!! csrf_field() !!}

                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <label class="col-md-4 control-label">Adresse E-Mail </label>

                            <div class="col-md-6">
                                <input type="text" class="form-control" name="email" value="{{ old('email') }}">

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <label class="col-md-4 control-label">Mot de passe</label>

                            <div class="col-md-6">
                                <input type="password" class="form-control" name="password">

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    <i class="fa fa-btn fa-sign-in"></i>Connexion
                                </button>
                           {{-- get to register --}}
                                <a class="btn btn-link" href="{{ url('/register') }}">Créer un compte</a>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
        <!-- end login -->
        
       
        
       
    </div>
    <!-- end page container -->









        <!-- ================== BEGIN BASE JS ================== -->
    <script src="{{asset ("/assets/plugins/jquery/jquery-1.9.1.min.js") }}"></script>
    <script src="{{asset ("/assets/plugins/jquery/jquery-migrate-1.1.0.min.js") }}"></script>
    <script src="{{asset ("/assets/plugins/jquery-ui/ui/minified/jquery-ui.min.js") }}"></script>
    <script src="{{asset ("/assets/plugins/bootstrap/js/bootstrap.min.js") }}"></script>
    <!--[if lt IE 9]>
        <script src="assets/crossbrowserjs/html5shiv.js"></script>
        <script src="assets/crossbrowserjs/respond.min.js"></script>
        <script src="assets/crossbrowserjs/excanvas.min.js"></script>
    <![endif]-->
    <script src="{{asset ("/assets/plugins/slimscroll/jquery.slimscroll.min.js") }}"></script>
    <script src="{{asset ("/assets/plugins/jquery-cookie/jquery.cookie.js") }}"></script>
    <!-- ================== END BASE JS ================== -->
    
    
    <!-- ================== BEGIN PAGE LEVEL JS ================== -->
     <script src="{{asset ("/assets/js/login-v2.demo.min.js") }}"></script>
    <script src="{{asset ("/assets/js/apps.min.js") }}"></script>
    
    <!-- ================== END PAGE LEVEL JS ================== -->

    <script>
        $(document).ready(function() {
            App.init();
            LoginV2.init();
        });
    </script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','../../../../www.google-analytics.com/analytics.js','ga');
    
      ga('create', 'UA-53034621-1', 'auto');
      ga('send', 'pageview');
    </script>
</body>

<!-- Mirrored from seantheme.com/color-admin-v1.9/admin/html/login_v2.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 01 Apr 2016 15:24:14 GMT -->
</html>


















