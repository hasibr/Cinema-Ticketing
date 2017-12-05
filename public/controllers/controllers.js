(function() {
  
  app.controller("ContentCtrl", function ($scope, $firebaseArray) {
    const moviesRef = firebase.database().ref('movies');
    const theatreRef = firebase.database().ref('theatres');

    const movies = $firebaseArray(moviesRef);
    const theatres = $firebaseArray(theatreRef);

    $scope.myInterval = 0;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.selectedMovie = null;

    $scope.pickMovieTime = {};

    $scope.theatres = theatres;
    $scope.filteredMovies = [];

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];
    $scope.isDatePickerOpen = false;


    movies.$loaded(function(movies) {
      $scope.movies = _.chunk(movies, 6);
      $scope.filteredMovies = movies;
    });

    $scope.setSelectedMovie = function(movie) {
      $scope.selectedMovie = movie;
    };

    $scope.findMovie = function() {

      const movieShowTimes = _.find(movies, function(movie) {
        return $scope.pickMovieTime.selectedMovie === movie.name;
      });

      const theatre = _.find(theatres, function(theatre) {
        return theatre.address === $scope.pickMovieTime.selectedTheatre;
      });

      if (!movieShowTimes) {
        $scope.movieShowTimes = null;
        return;
      }

      $scope.movieShowTimes = movieShowTimes.showtimes[theatre.id];
    }

    $scope.filterMovies = function() {
      if (!$scope.selectedTheatre) {
        return;
      }

      const theatre = _.find($scope.theatres, function(theatre) {
        return theatre.address === $scope.pickMovieTime.selectedTheatre;
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

    $scope.today = function() {
      $scope.pickMovieTime.date = new Date();
    };

    $scope.today();

    $scope.clear = function() {
      $scope.pickMovieTime.date = null;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      maxDate: new Date(2017, 12, 11),
      minDate: new Date(),
      startingDay: 1
    };

    $scope.openDatePicker = function() {
      $scope.isDatePickerOpen = true;
    };

    $scope.setDate = function(year, month, day) {
      $scope.pickMovieTime.date = new Date(year, month, day);
    };

  });
})();