(() => {
	'use strict';

	angular
		.module('MyApp')
		.controller('indexController', indexController);

	indexController.$inject = ['$scope', '$state', '$log'];

	function indexController($scope, $state, $log) {
		$scope.user = {};
		$scope.alertsuccess = !false;
		$scope.ahora = !true;
		$scope.validarInformacion = () => {
			$scope.alertsuccess = false;
			$scope.msg = "Hola " + $scope.user.nombre + ", usted tiene "+ $scope.user.edad +" años de edad";
		},
		$scope.reset = () => {
			$scope.alertsuccess = !false;
		};
	 }
})();