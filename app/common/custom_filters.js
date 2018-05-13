(function () {
    'use strict'
    angular
        .module('LifeBoat')

        .filter('tinyToEnabledDisabled', function () {
            return function (input) {
                if (input == 1)
                    return 'Enabled';
                else
                    return 'Disabled';

            }
        })

        .filter('TinyIntToBoolean', function () {
            return function (input) {
                if (input == 1)
                    return true;
                else
                    return false;

            }
        })

        .filter('TinyIntToYN', function () {
            return function (input) {
                if (input == 1)
                    return 'Y';
                else
                    return 'N';

            }
        })

        .filter('BooleanToTinyInt', function () {
            return function (input) {
                if (input == true)
                    return 1;
                else
                    return 0;

            }

        })


})();