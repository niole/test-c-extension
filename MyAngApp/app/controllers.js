'use strict';

var MadMenAppControllers = angular.module('MadMenAppControllers', []);

/*declare the services you will use as an argument to controller
the dependency injector will look at these to look up dependencies*/

MadMenAppControllers.controller('MadMenCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('mentions/mentions.json').success(function(data) {
      $scope.index = 0;
      $scope.mentions = data;
      $scope.displayTweet = data[0].tweet;

      $scope.setTweet= function(i) {
        if ( i === data.length ) {
          i = 0;
        }

        $scope.index = i;
        $scope.displayTweet = data[i].tweet;

      };
    });

    $scope.orderProp = 'age';
  }]);

MadMenAppControllers.controller('CharacterTweetCtrl', ['$http', '$scope', '$routeParams',
  function($http, $scope, $routeParams) {
    $http.get('mentions/mentions.json').success(function(data) {
      $scope.mentions = data;
    });
    $scope.character = $routeParams.character;
  }]);
