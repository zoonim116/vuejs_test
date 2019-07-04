<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-100">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="d-flex flex-column h-100">
<main role="main" class="flex-shrink-0">
    <div id="app">
        <app></app>
    </div>
</main>
<footer class="footer mt-auto py-3">
    <div class="container">
        <span class="text-muted">Place sticky footer content here.</span>
    </div>
</footer>
<!-- Scripts -->
<script src="{{ mix('js/app.js') }}" defer></script>
</body>
</html>
