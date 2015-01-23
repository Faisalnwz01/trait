'use strict';

angular.module('linkedinFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tweetdata', {
        url: '/tweetdata',
        templateUrl: 'app/tweetdata/tweetdata.html',
        controller: 'TweetdataCtrl'
      });
  });