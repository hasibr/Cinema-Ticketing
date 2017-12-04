app.controller("ContentCtrl", function ($scope, $firebaseArray, paginate) {
  const moviesRef = firebase.database().ref('movies');
  const theatreRef = firebase.database().ref('theatres');

  const movies = $firebaseArray(moviesRef);
  const theatres = $firebaseArray(theatreRef);

  $scope.myInterval = 0;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  $scope.selectedMovie = null;

  $scope.theatres = theatres;
  $scope.filteredMovies = [];

  movies.$loaded(function(movies) {
    $scope.movies = _.chunk(movies, 6);
    $scope.filteredMovies = movies;
  });

  $scope.setSelectedMovie = function(movie) {
    $scope.selectedMovie = movie;
  };

  $scope.filterMovies = function() {
    if (!$scope.selectedTheatre) {
      return;
    }

    const theatre = _.find($scope.theatres, function(theatre) {
      return theatre.name === $scope.selectedTheatre;
    });

    if (!theatre) {
      return;
    }

    $scope.filteredMovies =_.filter(movies, function(movie) {
      return _.has(movie.showtimes, theatre.id);
    });
  }


  $scope.formatImgName = function(name) {
    return (name || '').toLowerCase().replace(/\W+/g, '') + '.jpg';
  };

});