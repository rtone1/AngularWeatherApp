(function(){
  console.log('Lets do this!');

  var app = angular.module( 'weatherApp', [] );

  app.controller( 'WeatherController', ['$http', function($http){
    var weather = this;
    weather.forecasts = [];
    $http.get('http://api.wunderground.com/api//forecast10day/q/IL/Chicago.json').success(function(data){
      var options = data;
      weather.forecasts = options.forecast.simpleforecast.forecastday;
    });
  }]);






})(); //END OF CLOUSER
