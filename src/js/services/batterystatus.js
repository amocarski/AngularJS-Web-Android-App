angular.module('MyApp.services.batteryStatus', [
  'MyApp.services.Cordova'
])

.factory('batteryStatus', batteryStatus);

function batteryStatus(deviceReady, $document, $window, $rootScope, $log){
  return function(done) {
    deviceReady(function(){
      navigator.geolocation.getCurrentPosition(function(position){
        $rootScope.$apply(function(){
          done(position);
        });
      }, function(error){
        $rootScope.$apply(function(){
          throw new Error('Unable to retreive position');
        });
      });
    });
  };
}