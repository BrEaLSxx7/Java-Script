	'use strict';

	angular
		.module('MyApp')
		.controller('indexController', indexController);
	indexController.$inject = ['$scope', '$state', '$log'];
	function indexController($scope, $state, $log) {
		$scope.msg;
		$scope.people = [];
		$scope.add = function () {
	$scope.people.unshift($scope.contact);
	delete $scope.contact;

};
	}