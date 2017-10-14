(function () {
    'use strict';

    angular
            .module('P90')
            .service('databaseService', databaseService);

    databaseService.$inject = ['$http', '$httpParamSerializerJQLike', 'urlSrv'];

    function databaseService($http, $httpParamSerializerJQLike, urlSrv) {

      this.metodoget = function (data) {
        return $http.get(urlSrv + data.nombre + '/' + data.edad);
      }

      this.metodopost = function (data) {
        return $http.post(urlSrv, $httpParamSerializerJQLike(data));
      }

      this.metodoput = function (data) {
        return $http.put(urlSrv, $httpParamSerializerJQLike(data));
      }

      this.metododelete = function (data) {
        return $http.delete(urlSrv, {data: $httpParamSerializerJQLike(data)});
      }

    }
})();