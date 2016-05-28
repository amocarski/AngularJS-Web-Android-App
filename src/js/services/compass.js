angular.module('MyApp.services.Compass', [
  'MyApp.services.Cordova'
])
.service('watchHeadingCompass', watchHeadingCompass);

function watchHeadingCompass(deviceReady, $document, $window, $rootScope, $log){

	this.watchCompass = watchCompass;

    function watchCompass(freq, done) {
      deviceReady(function(){
        navigator.compass.watchHeading(function(heading){
          $rootScope.$apply(function(){
            return done(heading);
          });
        }, function(error){
          $rootScope.$apply(function(){
            throw new Error('Unable to retreive position'+ error);
          });
        }, freq);
      });
    };

}