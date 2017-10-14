(function () {
  'use strict';

  angular
          .module('P90')
          .controller('putController', putController);

  putController.$inject = ['$scope', 'databaseService', '$log'];

  function putController($scope, ajax, $log) {
    $scope.data = {};
    $scope.respuesta = '';
    $scope.procesar = function () {
      ajax.metodoput($scope.data).then(function successCallback(response) {
        $scope.respuesta = response.data.mensaje;
        $log.info(response);
      }, function errorCallback(response) {
        $log.error(response);
      });

    };

  }
})();