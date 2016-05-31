angular.module('radar.dashboard', [ 'radar.dashboard.controller' ]).config(
		[ '$routeProvider', function($routeProvider) {
			$routeProvider.when('/', {
				controller : 'DashBoardController',
				templateUrl : 'views/dashboard/dashboard.html'
			});
		} ]);
