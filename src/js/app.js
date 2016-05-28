angular.module('MyApp', [
	'ngRoute',
	'mobile-angular-ui',
	'MyApp.controllers.Main',
	'MyApp.controllers.Motion',
	'MyApp.controllers.Compass',
	'mobile-angular-ui.gestures'
])

.config(function($routeProvider) {
  $routeProvider
	.when('/', {
		templateUrl:'home.html',  
		reloadOnSearch: false,
		controller: 'MainController',
		controllerAs: 'main'
	})
	.when('/motion', {
		templateUrl:'motion.html',  
		reloadOnSearch: false,
		controller: 'MotionController',
		controllerAs: 'motion'
	})
	.when('/compass', {
		templateUrl:'compass.html',  
		reloadOnSearch: false,
		controller: 'CompassController',
		controllerAs: 'compass'
	});
});