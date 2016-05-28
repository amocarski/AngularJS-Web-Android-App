angular.module('MyApp.controllers.Motion', [
	'MyApp.services.Cordova',
	'MyApp.services.Motion',
])

.controller('MotionController', MotionController);

function MotionController(getAcceleration, $log){
  	var vm = this;
  	vm.updateAcceleration = updateAcceleration;


	function updateAcceleration(){
		getAcceleration(function(data){
			vm.acceleration = data;
			vm.accelerationX = vm.acceleration.x;
			vm.accelerationY = vm.acceleration.y;
			vm.accelerationZ = vm.acceleration.z;  
		});
	}
}