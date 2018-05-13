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
          url: 'http://localhost:3000/upload',
          transformRequest: angular.identity,
          method: "POST",
          data: fd,
          headers: {
            'Content-Type': undefined
          }
        })
        .then(function(result) {


          Highcharts.chart('container', {
            xAxis: {
              title: {
                text: 'previous period'
              },
              min: result.data.linearArray[0][0],
              max: result.data.linearArray[result.data.linearArray.length - 2][0]
            },
            yAxis: {
              title: {
                text: 'Latest period'
              },
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
          console.log(result.data.dataGraph2);
          Highcharts.chart('container1', {
            xAxis: {
              title: {
                text: 'percentage of bricks'
              },
              min: 0,
              max: 100
            },
            yAxis: {
              title: {
                text: 'Growth in percentage'
              },
              min: 0
            },
            title: {
              text: 'Simple Graph'
            },
            series: [{
              type: 'scatter',
              name: 'Data Points',
              data: result.data.dataGraph2,
              marker: {
                radius: 4
              }
            }]
          });

        })
    }

  }
})();