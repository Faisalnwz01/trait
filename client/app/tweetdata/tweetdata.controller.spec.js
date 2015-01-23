'use strict';

describe('Controller: TweetdataCtrl', function () {

  // load the controller's module
  beforeEach(module('linkedinFullstackApp'));

  var TweetdataCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TweetdataCtrl = $controller('TweetdataCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
