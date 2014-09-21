'use strict';

describe('codeMirrorDirective', function() {

  var element;

  //directive compilation
  function compileElm(code) {
    return function($compile, $rootScope) {
      element = angular.element('<div>' + code  + '</div>');
      $compile(element)($rootScope);
    }
  }
  //expect default compilation
  function expectCompile() {
    return function() {
      var pre = element.find('pre')[0],
        code = element.find('code')[0];

      expect(pre.nodeName).toBe('PRE');
      expect(code.nodeName).toBe('CODE');
    }
  }
  //expect has classes
  function expectClasses(className) {
    return function() {
      var pre = angular.element(element.find('pre')[0]),
        code = angular.element(element.find('code')[0]);

      expect(pre.hasClass('prettyprint')).toBeTruthy();
      expect(code.hasClass('language-'+ className)).toBeTruthy();
    }
  }

  beforeEach(module('ng-code-mirror.directive'));

  //compile phase
  describe('compilePhase', function() {

    it('should compile and replace to <pre> element with <code> child', inject(
      compileElm('<code-mirror></code-mirror>'),
      expectCompile()
    ));

    it('should compile and bind classes', inject(
      compileElm('<code-mirror lang="java"></code-mirror>'),
      expectClasses('java'),
      compileElm('<code-mirror lang="PHP"></code-mirror>'),
      expectClasses('php')
    ));

  });

  //linkFn handle
  describe('linkFn handle', function() {

    it('should call pretty.one function every changing', inject(
      compileElm('<code-mirror model="code.text"></code-mirror>'),
      function($rootScope, prettify) {

        var pSpy = spyOn(prettify, 'one'),
          str = 'ABCDEFGHIJ'.split('');

        $rootScope.code = { text: '' };

        str.forEach(function(i) {
          $rootScope.code.text = i;
          $rootScope.$digest();
          expect(pSpy).toHaveBeenCalledWith(i, '', false);
        });
      }
    ));

    it('should call pretty.one with lang and line numbes as true if set', inject(
      compileElm('<code-mirror model="code.text" line-numbers="true" lang="js"></code-mirror>'),
      function($rootScope, prettify) {

        var pSpy = spyOn(prettify, 'one');

        $rootScope.code = { text: 'My Text' };
        $rootScope.$digest();
        expect(pSpy).toHaveBeenCalledWith('My Text', 'js', true);
      }
    ));

    it('should replace element content every changing', inject(
      compileElm('<code-mirror model="js"></code-mirror>'),
      function($rootScope) {
        var html;

        $rootScope.js = 'foo = bar';
        $rootScope.$digest();
        //store the current html content
        html = element.html();
        expect(element.html()).toBe(html);

        $rootScope.js = 'function foo() { return bar; }';
        $rootScope.$digest();
        //after model changing
        expect(element.html()).not.toBe(html);
      }
    ));

  });


});
