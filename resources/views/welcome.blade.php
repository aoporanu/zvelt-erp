<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ env('APP_NAME') }}</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
        </style>
        <link type="text/css" href="/css/app.css" rel="stylesheet" />
    </head>
    <body>
        <div id="app" class="flex-center position-ref full-height">
            <p>
                <router-link to="/items">Items</router-link>
                <router-link to="/item/create">Create Item</router-link>
                <router-link to="/example">ExampleComponent</router-link>
                <router-link to="/login">Login</router-link>
                <router-link to="/register">Register</router-link>
            </p>
            <div class="content">
                <div class="title m-b-md">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="/js/app.js"></script>
    </body>
</html>
