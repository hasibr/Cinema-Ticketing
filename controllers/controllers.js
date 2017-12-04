app.controller("ContentCtrl", function ($scope, $firebaseArray, paginate) {
  const ref = firebase.database().ref('movies');
  const movies = $firebaseArray(ref);

  $scope.myInterval = 0;
  $scope.noWrapSlides = false;
  $scope.active = 0;

  movies.$loaded(function(movies) {
    $scope.movies = _.chunk(movies, 6);
  })

  $scope.formatImgName = function(name) {
    return (name || '').toLowerCase().replace(/\W+/g, '') + '.jpg';
  };

});