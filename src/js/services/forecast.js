// API from http://openweathermap.org/api

angular.module('MyApp.services.Forecast', [])
.service('getWeather', getWeather);

function getWeather($http, $log){

	this.getCurrentWeather = getCurrentWeather;
	this.getFiveDaysWeather = getFiveDaysWeather;

	function getCurrentWeather(lat, lng, done) {
		$http({method: 'GET', url: 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&APPID=4c8970f2c1f0e3ec68c56ff13698ecd4&units=metric'})
		    .success(function(data, status, headers, config) {
		    	return done(data);
		    })
		    .error(function(data, status, headers, config) {
		      throw new Error('Unable to get weather');
		    });
	};

	function getFiveDaysWeather(city, done) {
		$http({method: 'GET', url: 'http://api.openweathermap.org/data/2.5/forecast?q='+city+'&cnt=5&APPID=4c8970f2c1f0e3ec68c56ff13698ecd4&units=metric'})
		    .success(function(data, status, headers, config) {
		     return done(data);
		    })
		    .error(function(data, status, headers, config) {
		      throw new Error('Unable to get five days weather');
		    });
	};

}