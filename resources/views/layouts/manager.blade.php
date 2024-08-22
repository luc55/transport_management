<!DOCTYPE html>
<html lang="fr">

<meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->

<head>
    <!-- meta section -->
    <title>Administration-Magnificence</title>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

    <link rel="icon" href="{{asset('frontend/images/logo.png')}}" type="image/x-icon">
    <!-- ./meta section -->



    <!-- ================== BEGIN BASE CSS STYLE ================== -->
    {{-- <link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"> --}}
    <link href="{{ asset('assets/plugins/jquery-ui/themes/base/minified/jquery-ui.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/plugins/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/plugins/fontawesome-5.15/css/all.css') }}" rel="stylesheet" />
    {{-- <link href="{{ asset('assets/plugins/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet" /> --}}
    <link href="{{ asset('assets/css/animate.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/css/style.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/css/style-responsive.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/css/theme/default.css') }}" rel="stylesheet" id="theme" />
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        .menu-caption {
            font-size: 13px;
            font-weight: 600;
            padding: 18px 15px 0px;
            text-transform: capitalize;
            position: relative;
            margin-top: 10px;
        }

        .menu-caption:first-child {
            margin-top: 0;
            border-top: none;
        }

        .monformulaire{
            min-width: 100%
        }

    </style>
    <!-- ================== END BASE CSS STYLE ================== -->

    <!-- ================== BEGIN PAGE LEVEL CSS STYLE ================== -->
    <link href="{{ asset('assets/plugins/jquery-jvectormap/jquery-jvectormap-1.2.2.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/plugins/bootstrap-calendar/css/bootstrap_calendar.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/plugins/gritter/css/jquery.gritter.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/plugins/morris/morris.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css') }}"
        rel="stylesheet" />

    <!-- ================== BEGIN PAGE LEVEL CSS STYLE ================== -->
    <link href="{{ asset('assets/plugins/jquery-file-upload/blueimp-gallery/blueimp-gallery.min.css') }}"
        rel="stylesheet" />
    <link href="{{ asset('assets/plugins/jquery-file-upload/css/jquery.fileupload.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/plugins/jquery-file-upload/css/jquery.fileupload-ui.css') }}" rel="stylesheet" />
    <!-- ================== END PAGE LEVEL CSS STYLE ================== -->

    <!-- ================== BEGIN BASE JS ================== -->
    <script src="{{ asset('assets/plugins/pace/pace.min.js') }}" type="text/javascript"></script>

    {{-- TIny CLoud  JS--}}
    <script src='https://cdn.tiny.cloud/1/lks9kik39804njyt6bvdzqzu0asvxknugd1lx8zp82szzor4/tinymce/5/tinymce.min.js' referrerpolicy="origin">
    </script>
    <script>
      tinymce.init({
        entity_encoding: 'raw'
        selector: 'textarea.monformulaire',
        plugins: 'link lists code fullscreen',
        menu: {
            edit: {title: 'edit', items: 'undo, redo, selectall'}
        },
        menubar: 'file edit view',
        toolbar: 'undo redo | styleselect | forecolor | bold italic | numlist bullist | alignleft aligncenter alignright alignjustify | outdent indent | link | fullscreen',
    });
    </script>

    <style type="text/css">
        .monformulaire {
            min-height: 400px;
        }

    </style>
     @section('headSection')
     @show

</head>
<!-- BEGIN BODY -->

<body class=" ">
    <!-- START TOPBAR -->


    @include('includes.header')

    @include('includes.sidebar')

    @yield('contenu')

    
       
    <!-- ================== BEGIN BASE JS ================== -->
    <script src="{{ asset('assets/plugins/jquery/jquery-1.9.1.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/jquery/jquery-migrate-1.1.0.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/jquery-ui/ui/minified/jquery-ui.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/bootstrap/js/bootstrap.min.js') }}"></script>
    <!--[if lt IE 9]>
        <script src="assets/crossbrowserjs/html5shiv.js"></script>
        <script src="assets/crossbrowserjs/respond.min.js"></script>
        <script src="assets/crossbrowserjs/excanvas.min.js"></script>
    <![endif]-->
    <script src="{{ asset('assets/plugins/slimscroll/jquery.slimscroll.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/jquery-cookie/jquery.cookie.js') }}"></script>
    <!-- ================== END BASE JS ================== -->

    <!-- ================== BEGIN PAGE LEVEL JS ================== -->
    <script src="{{ asset('assets/plugins/morris/raphael.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/morris/morris.js') }}"></script>
    <script src="{{ asset('assets/plugins/jquery-jvectormap/jquery-jvectormap-1.2.2.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/jquery-jvectormap/jquery-jvectormap-world-merc-en.js') }}"></script>
    <script src="{{ asset('assets/plugins/bootstrap-calendar/js/bootstrap_calendar.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/gritter/js/jquery.gritter.js') }}"></script>
    <script src="{{ asset('assets/js/dashboard-v2.min.js') }}"></script>


    <!-- ================== BEGIN PAGE LEVEL JS ================== -->
    <script src="{{ asset('assets/plugins/DataTables/media/js/jquery.dataTables.js') }}"></script>
    <script src="{{ asset('assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js') }}">
    </script>
    <script src="{{ asset('assets/js/table-manage-default.demo.min.js') }}"></script>
    <script src="{{ asset('assets/js/apps.min.js') }}"></script>


    <!-- ================== BEGIN PAGE LEVEL JS ================== -->
    <script src="{{ asset('assets/plugins/jquery-file-upload/js/vendor/jquery.ui.widget.js') }}"></script>
    <script src="{{ asset('assets/plugins/jquery-file-upload/js/vendor/tmpl.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/jquery-file-upload/js/vendor/load-image.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/jquery-file-upload/js/vendor/canvas-to-blob.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/jquery-file-upload/blueimp-gallery/jquery.blueimp-gallery.min.js') }}">
    </script>
    <script src="{{ asset('assets/plugins/jquery-file-upload/js/jquery.iframe-transport.js') }}"></script>
    <script src="{{ asset('assets/plugins/jquery-file-upload/js/jquery.fileupload.js') }}"></script>
    <script src="{{ asset('assets/plugins/jquery-file-upload/js/jquery.fileupload-process.js') }}"></script>
    <script src="{{ asset('assets/plugins/jquery-file-upload/js/jquery.fileupload-image.js') }}"></script>
    <script src="{{ asset('assets/plugins/jquery-file-upload/js/jquery.fileupload-audio.js') }}"></script>
    <script src="{{ asset('assets/plugins/jquery-file-upload/js/jquery.fileupload-video.js') }}"></script>
    <script src="{{ asset('assets/plugins/jquery-file-upload/js/jquery.fileupload-validate.js') }}"></script>
    <script src="{{ asset('assets/plugins/jquery-file-upload/js/jquery.fileupload-ui.js') }}"></script>
    <!--[if (gte IE 8)&(lt IE 10)]>
        <script src="{{ asset('assets/plugins/jquery-file-upload/js/cors/jquery.xdr-transport.js') }}"></script>
    <![endif]-->
    <script src="{{ asset('assets/js/form-multiple-upload.demo.min.js') }}"></script>
    {{-- <script  type="text/javascript" src="{{ asset("frontend/plugins/bootstrap-wysihtml5/wysihtml5-0.3.0.js") }}"></script>
<script  type="text/javascript" src="{{ asset("frontend/plugins/bootstrap-wysihtml5/bootstrap-wysihtml5.js") }}"></script>
<script  type="text/javascript" src="{{ asset("frontend/plugins/summernote/dist/summernote.min.js") }}"></script> --}}

    @section('footerSection')
    @show

    @section('scripts')
    @show

    <!-- ================== END PAGE LEVEL JS ================== -->



    <!-- ================== END PAGE LEVEL JS ================== -->

    <script>
        $(document).ready(function() {
            App.init();
            TableManageDefault.init();
            //DashboardV2.init();
            FormMultipleUpload.init();
        });

    </script>
    {{-- <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','../../../../www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-53034621-1', 'auto');
      ga('send', 'pageview');
    </script> --}}
    <!-- ================== END PAGE LEVEL JS ================== -->




</body>


</html>
