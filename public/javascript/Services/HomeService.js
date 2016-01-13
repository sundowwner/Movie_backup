"use strict";
var app;
(function (app) {
    var Services;
    (function (Services) {
        var HomeService = (function () {
            function HomeService($resource) {
                this.$resource = $resource;
                this.CountResource = $resource("/count");
            }
            HomeService.prototype.getCount = function () {
                return this.CountResource.get();
            };
            HomeService.prototype.addCount = function () {
                return this.CountResource.save({ num: 1 }).$promise;
            };
            HomeService.prototype.deleteCount = function () {
                return this.CountResource.delete();
            };
            return HomeService;
        })();
        Services.HomeService = HomeService;
        angular.module("app").service("HomeService", HomeService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
