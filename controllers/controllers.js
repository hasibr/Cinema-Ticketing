app.controller("ContentCtrl", function ($scope, $firebaseArray) {
  const ref = firebase.database().ref('movies');
  $scope.movies = $firebaseArray(ref);
});