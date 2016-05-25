angular.module('MyApp.controllers.Main', [
	'MyApp.services.Cordova',
	'MyApp.services.Geolocation',
	'MyApp.services.Beckend',
	'MyApp.services.Forecast'
])

.controller('MainController', MainController);

function MainController(BackendService, getCurrentPosition, getWeather){
  	var vm = this;
  	// vm.users = BackendService.getUsers();

	getCurrentPosition(function(position){
		getWeather(
		  position.coords.latitude, 
		  position.coords.longitude, 
		  function(location, weather){
		    vm.location = location;
		    vm.weather = weather;
		  });
	});

}