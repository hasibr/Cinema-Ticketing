app.directive('stateLoadingIndicator', function($rootScope) {
  return {
    restrict: 'E',
    templateUrl: '/views/loading.html',
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