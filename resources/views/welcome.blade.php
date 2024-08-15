<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config("app.name") }}</title>
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" />
    <link rel="stylesheet" href="{{ asset('css/animate.css') }}">
<link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
<link rel="stylesheet" href="{{ asset('css/flaticon-set-logistics.css') }}">
<link rel="stylesheet" href="{{ asset('css/fontawesome.css') }}">
<link rel="stylesheet" href="{{ asset('css/fontawesome-all.css') }}">
<link rel="stylesheet" href="{{ asset('css/jquery.fancybox.min.css') }}">
<link rel="stylesheet" href="{{ asset('css/jquery-ui.css') }}">
<link rel="stylesheet" href="{{ asset('css/linear.css') }}">
<link rel="stylesheet" href="{{ asset('css/owl.css') }}">
<link rel="stylesheet" href="{{ asset('css/responsive-old.css') }}">
<link rel="stylesheet" href="{{ asset('css/select2.min.css') }}">
<link rel="stylesheet" href="{{ asset('css/style.css') }}">
<link rel="stylesheet" href="{{ asset('css/style-app.css') }}">
<link rel="stylesheet" href="{{ asset('css/style-app3.css') }}">
<link rel="stylesheet" href="{{ asset('css/style-app4.css') }}">
<link rel="stylesheet" href="{{ asset('css/style-app5.css') }}">
<link rel="stylesheet" href="{{ asset('css/style-app6.css') }}">
<link rel="stylesheet" href="{{ asset('css/style-home9.css') }}">
<link rel="stylesheet" href="{{ asset('css/style-home10.css') }}">
<link rel="stylesheet" href="{{ asset('css/style-home11.css') }}">
<link rel="stylesheet" href="{{ asset('css/swiper.min.css') }}">
<link rel="stylesheet" href="{{ asset('css/tm-bs-mp.css') }}">
<link rel="stylesheet" href="{{ asset('css/tm-utility-classes.css') }}">
    @viteReactRefresh
    @vite('resources/js/app.jsx')
</head>
<body>
<div id="app"></div>
</body>
</html>
