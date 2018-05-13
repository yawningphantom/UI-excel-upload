  (function() {
    'use strict';
    angular
      .module('LifeBoat')
      .config(function($stateProvider, $urlRouterProvider, $cryptoProvider, $httpProvider, $compileProvider, $mdAriaProvider) {

        $urlRouterProvider.otherwise("/");
        $mdAriaProvider.disableWarnings(); // Temporary to disable aria warnings

        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'app/home/home.html',
            controller: 'homeCtrl',
            controllerAs: 'home'
          })


      });

  })();