
/**
 * @ngdoc module
 * @name a8m.code-mirror.directive
 *
 * @description
 * angular code mirror directive
 */
angular.module('a8m.angular-code-mirror.directive', [])
  .directive('codeMirror', codeMirrorDirective);

/**
 * @ngdoc Directive
 * @param prettifyFactory
 * @returns {}
 * @example
 * <code-mirror land="java" model="scope.model"></code-mirror>
 */
function codeMirrorDirective(prettifyFactory) {
  return {
    restrict: 'E',
    compile: function(tElm, tAttr, transcluse) {

      //create <pre> root element and bind it prettify class
      var preElm = angular.element('<pre></pre>')
        .addClass('prettyprint');

      //create <code> element and bind it appropriate class
      var codeElm = angular.element('<code></code>')
        .addClass('language-' + lowercase(tAttr.lang));

      preElm.append(codeElm);
      //replace tElm with new preElm
      tElm.replaceWith(preElm[0]);

      return linkFn
    }

  };

  /*
   * Directive link function
   * @param scope
   * @param elm
   * @param attr
   */
  function linkFn(scope, elm, attr) {

    //find <code> block
    var codeElm = elm.find('code');

    scope.$watch(attr.model, function(nVal) {
      if(nVal) {
        codeElm.empty();
        codeElm.html(prettifyFactory.one(nVal));
      }
    });

  }
}
