
//(function() {
  const config = {
    apiKey: "AIzaSyDa4KgFGpTmjVuCKsNDTF4gIYniKF6_21w",
    authDomain: "movieticketing-project.firebaseapp.com",
    databaseURL: "https://movieticketing-project.firebaseio.com",
    projectId: "movieticketing-project",
    storageBucket: "movieticketing-project.appspot.com",
    messagingSenderId: "1033260268462"
  };
  
  firebase.initializeApp(config);
  
  var app = angular.module('movie-times', ['ngAnimate', 'ui.router', 'firebase', 'ui.bootstrap']);
  
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
//})();

