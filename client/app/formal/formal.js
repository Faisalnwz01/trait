'use strict';

angular.module('linkedinFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('formal', {
        url: '/formal',
        templateUrl: 'app/formal/formal.html',
        controller: 'FormalCtrl'
      });
  });