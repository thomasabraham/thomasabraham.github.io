(function () {
	var app = angular.module("WEBSITE", ['ngRoute']);
	app.config(['$routeProvider', function ($routeProvider) {
				$routeProvider.when('/', {
					templateUrl : 'templates/home.html',
					controller : 'HomeController',
					controllerAs : 'hc'
				}).when('/blog', {
					templateUrl : 'templates/blog.html',
					controller : 'BlogController',
					controllerAs : 'bc'
				}).otherwise({
					redirectTo : '/'
				});
			}
		]);
})();
