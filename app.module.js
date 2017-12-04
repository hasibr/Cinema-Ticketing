const app = angular.module('movie-times',  ['ui.router']);

app.run(function($rootScope, $state, $sce) {
  $rootScope.safeApply = function(fn) {
    var phase = this.$root.$$phase;
    if(phase == '$apply' || phase == '$digest') {
      if(fn && (typeof(fn) === 'function')) {
        fn();
	  }
	} else {
	  this.$apply(fn);
    }
  };
});

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      views: {
      'content': {
        templateUrl: './views/content.html',
        controller: 'ContentCtrl',
        resolve: {
        }
      }
    }
  })
});

