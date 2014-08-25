
/**
 * @ngdoc module
 * @name a8m.code-mirror.directive
 *
 * @description
 * angular code mirror directive
 */
angular.module('a8m.angular-code-mirror.directive', [])
  .directive('codeMirror', codeMirrorDirective)

function codeMirrorDirective(prettifyFactory) {
  return {
    restrict: 'E',
    compile: function(tElm, tAttr, transcluse) {

      var preElm = angular.element('<pre></pre>')
        .addClass('prettyprint');

      var codeElm = angular.element('<code></code>')
        .addClass('language-' + tAttr.lang);

      preElm.append(codeElm);

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

    var codeElm = elm.find('code');

    scope.$watch(attr.model, function(nVal) {
      if(nVal) {
        codeElm.empty();
        codeElm.html(prettifyFactory.one(nVal));
      }
    });

  }
}
