
var cardetails = angular.module('cardetails',[]);

cardetails.controller('cardetailsController', function($scope, $http, $location) {

	$scope.car = {};
	$scope.onload= function(){
		$scope.loc = window.location.href;
		console.log("Loc: "+$scope.loc);
		$http.get('./data.json').success(function(data) {
		   $scope.carsData = data.car;
		   var index = $location.absUrl().indexOf('id=');
		   if(index>-1){
		   	var id = $location.absUrl().substring(index+3);
			   for(i in $scope.carsData){
					if(($scope.carsData[i].id+"")===id){
						$scope.car=$scope.carsData[i];
					}
				}
		   } else {
		   	$scope.car = $scope.carsData[0];
		   }
		   if($scope.car.id==null) {
		   		$scope.car = $scope.carsData[0];
		   }
		   console.log(JSON.stringify($scope.car));
		});
	};

});
