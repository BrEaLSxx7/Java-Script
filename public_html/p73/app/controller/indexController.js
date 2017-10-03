( ()=> {
	'use strict';

	angular
		.module('MyApp')
		.controller('indexController', indexController);

	indexController.$inject = ['$scope', '$state', '$log'];

	function indexController($scope, $state, $log) {
		$scope.msg = "Hola, este es mi script número 73 en JavaScript con AngularJS y Bootstrap.";
		$log.log($scope.msg);
		$log.warn($scope.msg);
		$log.info($scope.msg);
		$log.error($scope.msg);
		$log.debug($scope.msg);
	}
})();