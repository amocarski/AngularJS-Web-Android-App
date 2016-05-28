angular.module('MyApp.services.Cordova', [])

.factory('deviceReady', deviceReady);

function deviceReady($log, $rootScope){
  return function(done) {
    if (typeof window.cordova === 'object') {
      document.addEventListener('deviceready', deviceready, false);

      function deviceready() {
        done();
      }
    } else {
      done();
    }
  };
}