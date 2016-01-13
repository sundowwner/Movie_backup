"use strict";
var app;
(function (app) {
    angular.module("app", ["ngRoute", "ngResource"])
        .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when("/", {
            templateUrl: "/lib/templates/home.html",
            controller: app.Controllers.HomeController,
            controllerAs: "vm"
        }).otherwise("/");
        $locationProvider.html5Mode(true);
    });
})(app || (app = {}));
