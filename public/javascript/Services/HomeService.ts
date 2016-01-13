"use strict";
namespace app.Services{
    export class HomeService {
        public CountResource;

        public getCount() {
            return this.CountResource.get();
        }

        public addCount()   {
            //POST: /count
            //req.body = {num: 1 }
            return this.CountResource.save({ num: 1 }).$promise;
        }

        public deleteCount() {
            return this.CountResource.delete();
        }

        constructor(private $resource: ng.resource.IResourceService){
            this.CountResource = $resource("/count");
        }
    }
    angular.module("app").service("HomeService",HomeService);
}
