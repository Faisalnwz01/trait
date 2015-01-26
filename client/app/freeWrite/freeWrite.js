'use strict';

angular.module('linkedinFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('freeWrite', {
        url: '/freeWrite',
        templateUrl: 'app/freeWrite/freeWrite.html',
        controller: 'FreeWriteCtrl'
      });
  });