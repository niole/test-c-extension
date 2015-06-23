'use strict';
var MadMenServices = angular.module('MadMenServices', ['ngResource']);

MadMenServices.factory('CharTweets', ['$resource',
  function($resource){
    return $resource('mentions/:charMentions.json', {}, {
      query: {method:'GET', params:{charMentions:'mentions'}, isArray:true}
    });
}]);
