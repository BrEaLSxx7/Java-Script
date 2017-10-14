(() => {
	'use strict';
	angular
		.module('MyApp')
		.config(config);
	config.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider'];
	function config($httpProvider, $stateProvider, $urlRouterProvider) {
		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
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
			.state('facebook', {
				url: '/facebook',
				controller: 'indexController',
				templateUrl: 'app/view/inicio.html',
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load([{
							files: ['app/controller/indexController.js']
						}]);
					}]
				}
			});
	}

})();