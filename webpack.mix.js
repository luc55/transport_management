const mix = require('laravel-mix');

mix.js('resources/js/app.jsx', 'public/js')
   .react()
   .sass('resources/css/app.css', 'public/css')
;
