(() => {
	'use strict';

	angular
		.module('MyApp')
		.controller('indexController', indexController);

	indexController.$inject = ['$scope', '$state', '$log'];

	function indexController($scope, $state, $log) {
		$scope.user = {};
		$scope.alertsuccess = false;
		$scope.ahora = true;
		$scope.validarInformacion = () => {
			$scope.alertsuccess = !false;
			$scope.msg = "Usted es una persona de " + $scope.user.edad + " años de edad, cuyo género bilógico es " + $scope.user.gender + " y su estado civil es " + $scope.user.estado;
		}
		$scope.reset = () => {
			$scope.alertsuccess = false;
		}
	 }
})();