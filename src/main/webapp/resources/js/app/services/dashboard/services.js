angular.module('radar.dashboard.services', []).service('DashBoardServices',
		function($http) {

			this.getApiStatus = function() {
				return $http.get("radar/status");
			}

		});