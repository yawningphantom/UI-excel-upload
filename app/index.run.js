(function() {
	'use strict';
    angular
        .module('LifeBoat')
        .run(['$rootScope', '$state', '$stateParams',function($rootScope, $state, $stateParams, userValidate, InitializeApp) {

            $rootScope.$on("$stateChangeError", console.log.bind(console));

        }]);
})();