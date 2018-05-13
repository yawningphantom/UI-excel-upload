(function () {
    'use strict';
  
    angular
      .module('LifeBoat')
      .service('ajaxService', ajaxService);
  
    function ajaxService($q, $http, Configuration) {
      var service = {};
  
      service.send = function (api, data, method) {
        console.log(Configuration.ApiHost+api)
        var def = $q.defer();
        $http({
          url:  Configuration.ApiHost+api,
          method: method,
          data: data,
        }).then(function (res) {
          def.resolve(res);
        },function (err) {
            console.log(err)
          
        });
        return def.promise;
      }
  
      return service;
    }
  })();
  