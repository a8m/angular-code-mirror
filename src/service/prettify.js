
/**
 * @ngdoc module
 * @name ng-code-mirror.service
 *
 * @description
 * prettifyProvider
 */
angular.module('ng-code-mirror.prettify', [])
  .provider('prettify', prettifyProvider);

/**
  * @ngdoc provider
  * @description
  * wrap global google prettify api
  */
function prettifyProvider() {

  this.$get = ['$window', function($window) {

    return {
      global: $window.prettyPrint,
      one: $window.prettyPrintOne
    };

  }]
}
