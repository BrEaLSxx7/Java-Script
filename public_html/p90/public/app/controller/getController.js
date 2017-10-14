(function () {
  'use strict';

  angular
          .module('P90')
          .controller('getController', getController);

  getController.$inject = ['$scope', 'databaseService', '$log'];

  function getController($scope, ajax, $log) {
    $scope.data = {};
    $scope.respuesta = '';
    $scope.procesar = function () {
      ajax.metodoget($scope.data).then(function successCallback(response) {
        $scope.respuesta = response.data.mensaje;
        $log.info(response);
      }, function errorCallback(response) {
        $log.error(response);
      });

    };

  }
})();