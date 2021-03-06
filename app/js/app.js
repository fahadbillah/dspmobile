'use strict';


// Declare app level module which depends on filters, and services
var DSApp = angular.module('DSApp', [
  'ngRoute',
  'myApp.filters',
  'DSServices',
  'DSApp.directives',
  'DSController',
  'AngularGM'
])
DSApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/shops', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);


//var Map = angular.module('DSApp', ['AngularGM']);
