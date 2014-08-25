'use strict';

describe('prettifyProvider', function() {

  beforeEach(module('ng-code-mirror.prettify', function($provide) {

    $provide.value('$window', {
      prettyPrint: jasmine.createSpy('global'),
      prettyPrintOne: jasmine.createSpy('one')
    });
  }));

  it('should call $window.functionName', inject(function($window, prettify) {

    prettify.global('args');
    prettify.one('arg');

    expect($window.prettyPrint).toHaveBeenCalledWith('args');
    expect($window.prettyPrintOne).toHaveBeenCalledWith('arg');

  }));

});