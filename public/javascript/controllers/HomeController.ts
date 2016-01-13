"use strict";
namespace app.Controllers{
    export class HomeController {
        public count;


        public getCount()   {
            //this.count = { num: 0 } on first button click
            this.count = this.HomeService.getCount();

        }

        public addCount()   {
            this.HomeService.addCount();
        }

        public deleteCount() {
            return this.HomeService.deleteCount();
        }
        constructor(private HomeService: app.Services.HomeService)  {}

    }

    angular.module("app").controller("HomeController",HomeController);
}
