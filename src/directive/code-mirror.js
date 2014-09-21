
/**
 * @ngdoc module
 * @name ng-code-mirror.directive
 *
 * @description
 * angular code mirror directive
 */
angular.module('ng-code-mirror.directive', ['ng-code-mirror.prettify'])
  .directive('codeMirror', ['prettify', codeMirrorDirective]);

/**
 * @ngdoc Directive
 * @param prettify
 * @returns {}
 * @example
 * <code-mirror land="java" model="scope.model"></code-mirror>
 */
function codeMirrorDirective(prettify) {
  return {
    restrict: 'EAC',
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
    //determine if to add line numbers or not
    var lineNumbers = scope.$eval(attr.lineNumbers) || false;

    scope.$watch(attr.model, function(nVal) {
      if(nVal) {
        codeElm.empty();
        //replace all tag chars with their entity
        codeElm.html(prettify.one(
          nVal.replace(/</g, '&lt;').replace(/>/g,'&gt;'),
          attr.lang || '',
          lineNumbers
        ));
      }
    });

  }
}
