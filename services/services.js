app.service("getUrl", function($q) {
  return function () { 
    var deferred = $q.defer();
    google.script.url.getLocation(function(location) {
      deferred.resolve(location.parameters);
    });
    return deferred.promise;
  }
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