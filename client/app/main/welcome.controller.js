'use strict';

angular.module('linkedinFullstackApp')
	.controller('WelcomeCtrl', function($scope, $http, socket, $linkedIn, $state, Auth, ngDialog) {

	
$scope.getWatsonData = function(){
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

				//console.log($scope.profileInformation.traitObj)


				$http.post('/api/users/getWatson', $scope.profileInformation).success(function(data) {
					console.log(data)

				})
			})
}
	

		$scope.getWatsonData()
			// $http.get('/api/users/me').success(function(ProfileData) {
			// 	console.log(ProfileData)

			// })

		$scope.update = function() {
			$http.post('api/users/update', $scope.profileInformation).success(function(data) {
				console.log("Update to database Complete")
			});
		}

	});