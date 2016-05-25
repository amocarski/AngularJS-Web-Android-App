angular.module('MyApp.services.Forecast', [])

.factory('getWeather', getWeather);

function getWeather($http, $log){
  return function(lat, lng, done) {

    $http({method: 'GET', url: 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&APPID=4c8970f2c1f0e3ec68c56ff13698ecd4&units=metric'})
        .success(function(data, status, headers, config) {
          // $log.info("data objekt: "+JSON.stringify(data, null, 4));
          done(data.name, data.weather[0].description);
        })
        .error(function(data, status, headers, config) {
          throw new Error('Unable to get weather');
        });
  };
}