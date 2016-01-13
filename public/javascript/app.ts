"use strict";

namespace app{
    angular.module("app", ["ngRoute", "ngResource"])
    .config(($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) => {
        $routeProvider.when("/", {
            templateUrl: "/lib/templates/home.html",
            controller: app.Controllers.HomeController,
            controllerAs: "vm"
        }).otherwise("/");
        $locationProvider.html5Mode(true);
    });
}
