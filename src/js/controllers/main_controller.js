angular.module('MyApp.controllers.Main', [
	'MyApp.services.Cordova',
	'MyApp.services.Geolocation',
	'MyApp.services.Forecast'
])

.controller('MainController', MainController);

function MainController(getCurrentPosition, getWeather, $log){
  	var vm = this;
  	vm.submit = submit;

	getCurrentPosition(function(position){
		getWeather.getCurrentWeather(
		  position.coords.latitude, 
		  position.coords.longitude, 
		  function(data){
		  	vm.weatherData = data;
		  	vm.location = vm.weatherData.name;
		  	vm.weatherDescription = vm.weatherData.weather[0].description;
		  	vm.tempMax = vm.weatherData.main.temp_max;
		  	vm.tempMin = vm.weatherData.main.temp_min;
			vm.humidity = vm.weatherData.main.humidity;	    
		  });
	});

	function submit(valid){
		if(!valid) return;

		getWeather.getFiveDaysWeather(vm.cityName, function(data){
			vm.weatherFiveDaysData = data;
			vm.location2 = vm.weatherFiveDaysData.city.name;
			vm.days = vm.weatherFiveDaysData.list;
		});
	}
}