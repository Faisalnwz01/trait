'use strict';

angular.module('linkedinFullstackApp')
  .controller('LoginCtrl', function ($scope, Auth, $modal, $location, $window) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };


    //the start of the model *********************
    $scope.openModal = function() {
      $scope.modal = $modal.open({
        templateUrl: '../../components/modal/dataModal.html',
        scope: $scope
      })
    };

  });
