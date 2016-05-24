angular.module('MyApp.services.Cordova', [])

.factory('deviceReady', function($log){
  return function(done) {
    if (typeof window.cordova === 'object') {
      document.addEventListener('deviceready', function () {
        done();
      }, false);
    } else {
      done();
    }
  };
});