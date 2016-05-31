angular.module('radar.dashboard.controller', [ 'radar.dashboard.services' ])
		.controller('DashBoardController', function($scope, DashBoardServices) {
			$scope.dashboardMessage = "Welcom to spicejet radar page";
			DashBoardServices.getApiStatus().success(function(data) {
				$scope.isApiRunning = data;
			});

		});
