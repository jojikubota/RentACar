var index = angular.module('index',[]);

index.controller('indexController', function($scope, $http, $window) {
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

});