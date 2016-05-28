angular.module('MyApp.services.Motion', [
  'MyApp.services.Cordova'
])

.service('getAcceleration', getAcceleration);

function getAcceleration(deviceReady, $document, $window, $rootScope, $log){
  try{
    return function(done) {
      deviceReady(function(){
        navigator.accelerometer.getCurrentAcceleration(function(acceleration){
          $rootScope.$apply(function(){
            done(acceleration);
          });
        }, function(error){
          $rootScope.$apply(function(){
            throw new Error('Unable to retreive position'+ error);
          });
        });
      });
    };
  }catch(e){
        $log.info("blad e: "+e);
  }
}