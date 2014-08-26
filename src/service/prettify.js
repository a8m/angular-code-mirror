
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

  var theme;

  /**
   * @ngdoc method
   * @description
   * sets different theme to prettify code block
   * @param themeName
   * @returns {prettifyProvider}
   */
  this.setTheme = function(themeName) {
    theme = themeName;
    return this;
  };

  this.$get = ['$window', function($window) {

    return {
      global: $window.prettyPrint,
      one: $window.prettyPrintOne
    };

  }]
}
