angular.module('MyApp.controllers.Compass', [
	'MyApp.services.Compass'
])

.controller('CompassController', CompassController);

function CompassController(watchHeadingCompass, $rootScope, $log){
  	var vm = this;
  	vm.options = {
  		frequency: 2000	// update every 2 seconds
  	};

	watchHeadingCompass.watchCompass(vm.options, function(data){
		vm.compassData = data.magneticHeading;
	});

}