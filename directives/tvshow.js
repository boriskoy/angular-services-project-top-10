app.directive('tvShow', function() {
  return {
		restrict: 'E',
  	scope: {
      info: '='
    },
    templateUrl: 'js/directives/tvshow.html'
  };
});
