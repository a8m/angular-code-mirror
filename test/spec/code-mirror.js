'use strict';

describe('codeMirrorDirective', function() {

  var scope,
    element;

  //directive compilation
  function compileElm(code) {
    return function($compile, $rootScope) {
      element = $compile(angular.element(code))($rootScope.$new());
    }
  }
  //expectCompile
  function expectCompile() {
    return function() {
      expect(element).toEqual(1)
    }
  }

  beforeEach(module('ng-code-mirror.directive'));

  it('should compile and replace to <pre> element with <code> child', inject(
    compileElm('<code-mirror></code-mirror>'),
    expectCompile()
  ));

});
