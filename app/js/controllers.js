'use strict';

/* Controllers */

var DSController = angular.module('DSController', []);

DSController.controller('HomeCtrl', function HomeCtrl($scope) {

});

DSController.controller('MyCtrl2', [function() {

}]);

DSController.controller('NavBar', function NavBar($scope){
	$scope.links = [
		{
  		"lebel": "Home",
  		"url": "#/home"
		},
		{  		
  		"lebel": "Shops",
  		"url": "#/shops"
		}
	];
  $scope.settings = function(){
    alert('Settings');
  }
});

