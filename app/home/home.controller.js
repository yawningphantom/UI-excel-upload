(function() {
  'use strict';
  angular
    .module('LifeBoat')
    .controller('homeCtrl', homeCtrl);

  function homeCtrl($http, $mdSidenav, $state, $scope, $mdToast, fileUploadService, localStorageService, $mdDialog) {
    $scope.filesChanged = function(elm) {
      $scope.files = elm.files;
      $scope.$apply;
    }
    var self = this;

    self.upload = function() {
      console.log("called");

      var fd = new FormData();
      angular.forEach($scope.files, function(file) {
        fd.append('file', file)
      })
      $http({
          url: 'http://206.189.203.145:3000/upload',
          transformRequest: angular.identity,
          method: "POST",
          data: fd,
          headers: {
            'Content-Type': undefined
          }
        })
        .then(function(result) {
          console.log(result.data);

          Highcharts.chart('container', {
            xAxis: {
              min: 121000,
              max: 58309374
            },
            yAxis: {
              min: 0
            },
            title: {
              text: 'Scatter plot with regression line'
            },
            series: [{
              type: 'line',
              name: 'Regression Line',
              data: result.data.linearArray,
              marker: {
                enabled: false
              },
              states: {
                hover: {
                  lineWidth: 0
                }
              },
              enableMouseTracking: false
            }, {
              type: 'scatter',
              name: 'Observations',
              data: result.data.regArray,
              marker: {
                radius: 4
              }
            }]
          });

        })
    }

  }
})();