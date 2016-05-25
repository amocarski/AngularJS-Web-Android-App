angular.module('MyApp.services.Beckend', [
  'MyApp.services.Cordova'
])

.service('BackendService', BackendService);

function BackendService(){
	this.users = ['John', 'James', 'Jake'];
	this.getUsers = getUsers;

	function getUsers(){
		return this.users;
	}
}