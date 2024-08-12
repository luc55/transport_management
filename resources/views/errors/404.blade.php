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


    <div id="preloader">
        <div class="preloader-wrapper">
            <div class="preloader-default">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>

    <!-- Error Section Start -->
    <div class="error-area vh d-flex" data-background="images/bg/404.jpg" data-overlay-light="94">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="error-inner text-center">
                        <h1 class="error-title">4<span class="text-primary-color">0</span>4</h1>
                        <h2 class="error-text">@lang('error.error_message')</h2>
                        <a class="cs-btn-one btn-md btn-primary-color" href="{{url('/')}}">@lang('error.return_home')</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Error Section End -->

	<!-- Integrated important scripts here -->
	<script src="{{ asset('frontend/js/jquery.v1.12.4.min.js') }}"></script>
	<script src="{{ asset('frontend/js/bootstrap.min.js') }}"></script>
	<script src="{{ asset('frontend/js/jquery-core-plugins.js') }}"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.matchHeight/0.7.2/jquery.matchHeight.js" integrity="sha512-S2SvZGyr848abU9tlAkvQvyW+lg+dru96R5ymzoC49wSDwaw8cGNrWz0DceIbeXG6Ot1S3Oy8o1xv7gdvZ+X0w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<script src="{{ asset('frontend/js/main.js') }}"></script>
	

</body>

</html>
