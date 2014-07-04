(function(){
	var app = angular.module('components', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'app/views/index.html',
			controller: 'IndexCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
	});
})();