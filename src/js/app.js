angular.module('MyApp', [
  'ngRoute',
  'mobile-angular-ui',
  'MyApp.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {
  	templateUrl:'home.html',  
  	reloadOnSearch: false,
  	controller: 'MainController',
  	controllerAs: 'main'
  });
});