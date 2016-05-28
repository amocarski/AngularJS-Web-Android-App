angular.module('MyApp.services.Geolocation', [
  'MyApp.services.Cordova'
])

.factory('getCurrentPosition', getCurrentPosition);

function getCurrentPosition(deviceReady, $document, $window, $rootScope, $log){
  try{
    return function(done) {
      deviceReady(function(){
        navigator.geolocation.getCurrentPosition(function(position){
          $rootScope.$apply(function(){
            done(position);
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