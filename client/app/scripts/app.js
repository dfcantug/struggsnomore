'use strict';
/*global angular*/
/**
* @ngdoc overview
* @name clientApp
* @description
* # clientApp
*
* Main module of the application.
*/
angular.module('clientApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'firebase'
]).config(function ($routeProvider) {
      $routeProvider
      .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
      })
      .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
      })
      .otherwise({
            redirectTo: '/'
      });
});
