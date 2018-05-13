(function() {
    angular
        .module('LifeBoat')
        .factory('localStorageService', localStorageService);

    function localStorageService($localStorage) {

        var localStorage = {};

        localStorage.remove = function(key) {
            $localStorage[key] = false;
        };

        localStorage.set = function(key, data) {
            $localStorage[key] = data;
        };

        localStorage.get = function(key) {
            return $localStorage[key];
        };
        localStorage.clearAll = function() {
           $localStorage.$reset();
        };
        
        return localStorage;
    };
})();