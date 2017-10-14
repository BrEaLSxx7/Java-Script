(function () {
  'use strict';

  angular
          .module('P90')
          .config(config);
  angular.module('P90').constant('urlSrv', 'http://localhost/');

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

  function config($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.defaults.headers.delete = {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'};
    $urlRouterProvider.otherwise('/');
    $stateProvider
            .state('index', {
              url: '/',
              controller: 'indexController',
              templateUrl: 'app/view/inicio.html',
              resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ['app/controller/indexController.js']
                      }]);
                  }]
              }
            })
            .state('paginaGet', {
              url: '/get',
              controller: 'getController',
              templateUrl: 'app/view/get.html',
              resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ['app/controller/getController.js']
                      }]);
                  }]
              }
            })
            .state('paginaPost', {
              url: '/post',
              controller: 'postController',
              templateUrl: 'app/view/post.html',
              resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ['app/controller/postController.js']
                      }]);
                  }]
              }
            })
            .state('paginaPut', {
              url: '/put',
              controller: 'putController',
              templateUrl: 'app/view/put.html',
              resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ['app/controller/putController.js']
                      }]);
                  }]
              }
            })
            .state('paginaDelete', {
              url: '/delete',
              controller: 'deleteController',
              templateUrl: 'app/view/delete.html',
              resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ['app/controller/deleteController.js']
                      }]);
                  }]
              }
            });
  }
})();