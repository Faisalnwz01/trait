'use strict';

describe('Controller: FreeWriteCtrl', function () {

  // load the controller's module
  beforeEach(module('linkedinFullstackApp'));

  var FreeWriteCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FreeWriteCtrl = $controller('FreeWriteCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
