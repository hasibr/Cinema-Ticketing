const app = angular.module('movie-times',  ['ui.router', 'ngAnimate']);

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
		templateUrl: 'content.html',
		controller: 'ContentCtrl',
        resolve: {
          movies: function(googleFetch) {
            return googleFetch('getAllMovies');
          }
        }
      }
	}
  })
});

app.service("googleFetch", function($q) {
  return function(fn, args, callback) {
    var deferred = $q.defer();
    google.script.run.withSuccessHandler(function(response) {
      try {
        var data = JSON.parse(response);
      } catch (e) {
        var data = response;
      }
      if (callback) {
        callback(data);
      } else {
        deferred.resolve(data);
      }
    })[fn](args);
    
    return deferred.promise;
  }
});

app.service("getUrl", function($q) {
  return function () { 
    var deferred = $q.defer();
    google.script.url.getLocation(function(location) {
      deferred.resolve(location.parameters);
    });
    return deferred.promise;
  }
});

app.directive('stateLoadingIndicator', function($rootScope) {
  return {
    restrict: 'E',
    templateUrl: 'loading.html',
    replace: true,
    link: function(scope, element, attrs) {
      scope.isStateLoading = false;
 
      $rootScope.$on('$stateChangeStart', function() {
        scope.isStateLoading = true;
      });
      $rootScope.$on('$stateChangeSuccess', function() {
        scope.isStateLoading = false;
      });      
      $rootScope.$on('$viewContentLoading', function() {
        scope.isStateLoading = true;
      }); 
    }
  };
});

app.controller("ContentCtrl", function ($scope, movies) {
  $scope.movies = movies;
});