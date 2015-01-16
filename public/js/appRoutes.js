angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
		.when('/search', {
			templateUrl: 'views/search.html',
			controller: 'searchController'
		})
		.when('/upload', {
			templateUrl: 'views/upload.html',
			controller: 'uploadController'
		})
	$locationProvider.html5Mode(true);

}]);