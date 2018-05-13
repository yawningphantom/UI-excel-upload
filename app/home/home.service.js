(function() {
  'use strict';

  angular.module('LifeBoat')
    .service('fileUploadService', function($http, $q) {

      this.uploadFileToUrl = function(file, uploadUrl) {
        //FormData, object of key/value pair for form fields and values
        var fileFormData = new FormData();
        fileFormData.append('file', file);

        var deffered = $q.defer();
        $http.post(uploadUrl, fileFormData, {
          transformRequest: angular.identity,
          headers: {
            'Content-Type': undefined
          }

        }).success(function(response) {
          deffered.resolve(response);

        }).error(function(response) {
          deffered.reject(response);
        });

        return deffered.promise;
      }
    })

    .service('navService', [
      '$q',
      navService
    ]);

  function navService($q) {
    var menuItems = [{
        name: 'Dashboard',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: 'Admin Functions',
        icon: 'security',
        sref: '.master_data_partner'
      },
    ];

    return {
      loadMenuItems: function() {
        return $q.when(menuItems);
      }
    };
  }

})();