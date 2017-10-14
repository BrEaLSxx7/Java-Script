(function () {
  'use strict';

  angular
          .module('P90')
          .controller('deleteController', deleteController);

  deleteController.$inject = ['$scope', 'databaseService', '$log'];

  function deleteController($scope, ajax, $log) {
    $scope.data = {};
    $scope.respuesta = '';
    $scope.procesar = function () {
      ajax.metododelete($scope.data).then(function successCallback(response) {
        $scope.respuesta = response.data.mensaje;
        $log.info(response);
      }, function errorCallback(response) {
        $log.error(response);
      });

    };

  }
})();