var app = angular.module("myApplication", ['ngRoute'])

.config(function($locationProvider)
{
    $locationProvider.html5Mode(true);
});
