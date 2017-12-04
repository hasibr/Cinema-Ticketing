app.directive('stateLoadingIndicator', function ($rootScope) {
  return {
    restrict: 'E',
    templateUrl: '/views/loading.html',
    replace: true,
    link: function (scope, element, attrs) {
      scope.isStateLoading = false;

      $rootScope.$on('$stateChangeStart', function () {
        scope.isStateLoading = true;
      });
      $rootScope.$on('$stateChangeSuccess', function () {
        scope.isStateLoading = false;
      });
      $rootScope.$on('$viewContentLoading', function () {
        scope.isStateLoading = true;
      });
    }
  };
});

app.directive("repeatEnd", function () {
  return {
    restrict: "A",
    link: function (scope, element, attrs) {
      if (scope.$last) {
        // $('.carousel-showmanymoveone .item').each(function(){
        //   var itemToClone = $(this);
      
        //   for (var i=1;i<6;i++) {
        //     itemToClone = itemToClone.next();
      
        //     // wrap around if at end of item collection
        //     if (!itemToClone.length) {
        //       itemToClone = $(this).siblings(':first');
        //     }
      
        //     // grab item, clone, add marker class, add to collection
        //     itemToClone.children(':first-child').clone()
        //       .addClass("cloneditem-"+(i))
        //       .appendTo($(this));
        //   }
        // });
      }
    }
  };
});