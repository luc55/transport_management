<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="UTF-8">
	<meta name="author" content="TKM">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="description" content="Magnificence conseil formation">
	<meta name="keywords" content=" Business, Consulting, Marketing, Agency, Creative, Formation coaching" />
	<title>@yield('titre')</title>
	<link href=" {{asset('frontend/images/logo.png')}} " rel="shortcut icon" type="image/png">
	<!-- Main Stylesheet -->
	<link rel="stylesheet" href="{{ asset('frontend/css/style.css') }}">
	<link rel="stylesheet" href="{{ asset('frontend/css/responsive.css') }}">
	<link rel="stylesheet" href="{{ asset('frontend/css/styles-main.css') }}" id="style-main">
	<link rel="stylesheet" href="{{ asset('frontend/css/styles-1.css') }}" >
	@section('headSection')
	@show
	
</head>

<body>
    <!-- Preloader Start -->
	<div class="preloader"></div>
	<!-- Preloader End -->

    @if (Session::get('locale') == 'en')
        <?php \Carbon\Carbon::setLocale('en'); ?>

    @else
        <?php \Carbon\Carbon::setLocale('fr'); ?>

    @endif


    @include('includes.header_site')
    @yield('body')
    @include('includes.footer_site')

    <!-- BACK TO TOP SECTION -->
	<div class="back-to-top bg-gradient-color">
		<i class="fab fa-angle-up"></i>
	</div>
	{{-- Custom script --}}
	@yield('scripts')
	<!-- Integrated important scripts here -->
	<script src="{{ asset('frontend/js/jquery.v1.12.4.min.js') }}"></script>
	<script src="{{ asset('frontend/js/bootstrap.min.js') }}"></script>
	<script src="{{ asset('frontend/js/jquery-core-plugins.js') }}"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.matchHeight/0.7.2/jquery.matchHeight.js" integrity="sha512-S2SvZGyr848abU9tlAkvQvyW+lg+dru96R5ymzoC49wSDwaw8cGNrWz0DceIbeXG6Ot1S3Oy8o1xv7gdvZ+X0w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<script src="{{ asset('frontend/js/main.js') }}"></script>
	

</body>

</html>