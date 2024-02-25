<!doctype html>
<html lang="ru">
<head>
    {{ Vite::useBuildDirectory('app/client') }}
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link href="{{ Vite::asset('resources/client/assets/scss/main.scss') }}" rel="stylesheet">

    @vite('resources/client/app.js')

    @inertiaHead
</head>
    <body>
        @inertia

        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
    </body>
</html>