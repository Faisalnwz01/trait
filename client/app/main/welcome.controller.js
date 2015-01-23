'use strict';

angular.module('linkedinFullstackApp')
	.controller('WelcomeCtrl', function($scope, d3, $http, socket, $linkedIn, $state, Auth, ngDialog) {

	

		$scope.getWatsonData = function() {
			$http.get('/api/users/me').success(function(ProfileData) {
				$scope.profileInformation = ProfileData;
				console.log(ProfileData)
				var watsonDataSting = 'testing '
					//$scope.watsonDat = {profileInformation.linkedin.positions.values}
				for (var i = 0; i < $scope.profileInformation.linkedin.positions.values.length; i++) {
					watsonDataSting += $scope.profileInformation.linkedin.positions.values[i].summary
				};

				while (watsonDataSting.split(' ').length < 200) {
					watsonDataSting += watsonDataSting
				}

				// console.log($scope.profileInformation)
				$scope.profileInformation.traitObj = watsonDataSting
				$scope.profileInformation.watsonData;
				$scope.update()
					//console.log('$scope.profileInformation.watsonData', $scope.profileInformation.watsonData)

				//console.log($scope.profileInformation.traitObj)


				$http.post('/api/users/getWatson', $scope.profileInformation).success(function(data) {
					console.log(data)

				})
				d3.pieChart($scope.profileInformation);
			})

		}
		  $scope.getWatsonData()
		

		$scope.update = function() {
			$http.post('api/users/update', $scope.profileInformation).success(function(data) {
				console.log("Update to database Complete")
			});
		}

		$scope.data = {
      selectedIndex : 0,
      secondLocked : true,
      secondLabel : "Item Two"
    };
    $scope.next = function() {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    };
    $scope.previous = function() {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };
  



	});