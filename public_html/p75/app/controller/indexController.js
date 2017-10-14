	'use strict';

	angular
		.module('MyApp')
		.controller('indexController', indexController);

	indexController.$inject = ['$scope', '$state', '$log'];
	function indexController($scope, $state, $log) {
		$scope.msg;
$scope.redi = function() {
			$state.go('facebook');
			console.log('hla');
		}
		$scope.$watch("msg", (newVal,oldVal) => {
			if (newVal===oldVal) {
				return;
			}
		$log.log($scope.msg);
		$log.warn($scope.msg);
		$log.info($scope.msg);
		$log.error($scope.msg);
		$log.debug($scope.msg);
		})
	}