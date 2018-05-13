(function() {
  'use strict'
  angular
    .module('LifeBoat')
    .directive('fileInput', function($parse) {
      return {
        restrict: 'A', //the directive can be used as an attribute only
        link: function(scope, element, attrs) {
          element.bind('change', function() {
            $parse(attrs.fileInput)
              .assign(scope, elm[0].files)
            scope.$apply();
          });
        }
      };
    })
    .directive('maxLength', function() {
      return {
        restrict: "A",
        require: 'ngModel',
        link: function(scope, element, attrs, controller) {
          attrs.$set("ngTrim", "false");
          var limitLength = parseInt(attrs.maxLength, 10);
          scope.$watch(attrs.ngModel, function(newValue) {
            if (controller.$viewValue.length > limitLength) {
              var el = element[0];
              var start = el.selectionStart;
              var end = el.selectionEnd;
              var originalValue = controller.$viewValue;
              var formattedValue = originalValue.substring(0, limitLength);
              controller.$setViewValue(formattedValue);
              controller.$render();
              if (start === originalValue.length)
                el.setSelectionRange(formattedValue.length, formattedValue.length);
              else
                el.setSelectionRange(start, end);
            }
          });
        }
      };
    })
    // .directive('maxValue', function() {
    //   return {

    //   }
    // })
    .directive('stringToNumber', function() {
      return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
          ngModel.$parsers.push(function(value) {
            return '' + value;
          });
          ngModel.$formatters.push(function(value) {
            return parseFloat(value);
          });
        }
      };
    });

})();