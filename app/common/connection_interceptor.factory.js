(function() {
    'use strict';
    angular
        .module('LifeBoat')
        .factory('connectionInterceptor', connectionInterceptor);

    function connectionInterceptor($q, $rootScope) {
        return {
            'requestError': function(rejection) {
                $rootScope.$broadcast('Http_rejection', rejection);
                 console.log('rejection', rejection)
            },
            'responseError': function(response) {
              console.log('response', response)
                $rootScope.$broadcast('Http_rejection', response);
            }
        }
    }
})();
