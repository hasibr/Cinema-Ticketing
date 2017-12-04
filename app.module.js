const config = {
  apiKey: "AIzaSyDs1sr83w3QQiFc2UV08_UkjbBaWK3RlO4",
  authDomain: "movie-times-c50f1.firebaseapp.com",
  databaseURL: "https://movie-times-c50f1.firebaseio.com",
  projectId: "movie-times-c50f1",
};

firebase.initializeApp(config);

var app = angular.module('movie-times', ['ui.router', 'firebase', 'ui.bootstrap']);

app.run(function($rootScope, $state, $sce) {
  $rootScope.safeApply = function(fn) {
    const phase = this.$root.$$phase;
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
        controller: 'ContentCtrl'
      }
    }
  })
});

