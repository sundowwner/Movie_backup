"use strict";
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(HomeService) {
                this.HomeService = HomeService;
            }
            HomeController.prototype.getCount = function () {
                this.count = this.HomeService.getCount();
            };
            HomeController.prototype.addCount = function () {
                this.HomeService.addCount();
            };
            HomeController.prototype.deleteCount = function () {
                return this.HomeService.deleteCount();
            };
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
        angular.module("app").controller("HomeController", HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
