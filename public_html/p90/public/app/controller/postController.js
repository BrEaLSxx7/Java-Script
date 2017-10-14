(function () {
  'use strict';

  angular
          .module('P90')
          .controller('postController', postController);

  postController.$inject = ['$scope', 'databaseService', '$log'];

  function postController($scope, ajax, $log) {
    $scope.data = {};
    $scope.respuesta = '';
    $scope.procesar = function () {
      ajax.metodopost($scope.data).then(function successCallback(response) {
        $scope.respuesta = response.data.mensaje;
        $log.info(response);
      }, function errorCallback(response) {
        $log.error(response);
      });

    };

  }
})();