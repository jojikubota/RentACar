
var index = angular.module('index',['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

index.controller('indexController', function($scope, $http, $window) {
	$scope.searchResult = [];
	$scope.displayResults = [];
  	$scope.currentPage = 1;
  	$scope.numPerPage = 5;
  	$scope.maxSize = 5;
  	$scope.searchQuery = '';

	$scope.onload= function(){
		   // $scope.carsData = data.car;
	};

	$scope.carSelected = function(){
		console.log("Selected "+document.getElementById("car1").value);
		var carFromUI = document.getElementById("car1").value;
		for(i in $scope.carsData){
			var temp = $scope.carsData[i].name+" "+$scope.carsData[i].type;
			if(temp===carFromUI){
				$window.location.href = "/cardetails?id="+$scope.carsData[i].id;
			}
		}
	};

	$scope.displayCars = function(){
		console.log($scope.searchQuery);
		if($scope.searchQuery.charAt(0)=='*') return;
		$http({
			url:'/getCars?query='+$scope.searchQuery,
			data: {'query': $scope.searchQuery},
			method: 'GET',
			responseType: "json",
			headers: {'Content-Type': 'application/json'}
		}).success(function(data) {
			$scope.searchResult = data.data;
			if($scope.searchResult.length>$scope.numPerPage){
				$scope.displayResults = $scope.searchResult.slice(1, $scope.numPerPage+1);	
			} else {
				$scope.displayResults = $scope.searchResult;
			}
			$scope.subsearch='';
			
		}).error(function(data) {
			console.log("Error encountered in displayCars. Please try again.");
		});
	};

	  $scope.$watch('currentPage', function() {
	    var begin =  (($scope.currentPage - 1) * $scope.numPerPage);
    	var end = begin + $scope.numPerPage;
	    $scope.displayResults = $scope.searchResult.slice(begin, end);
	  });
	  

});
