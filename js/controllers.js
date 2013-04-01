eatApp.controller("LunchPlaceListCtrl", function($scope, $log, $timeout, LunchPlacesService){
	
	$scope.nearLocation = "Sudbury, MA";

	$scope.lunchPlaces = LunchPlacesService.lunchPlaces;

	var timer=false;
	$scope.$watch('nearLocation', function(){
		if(timer){
			$timeout.cancel(timer)
		}  
		timer= $timeout(function(){
			$log.log("getting places near " + $scope.nearLocation);
			LunchPlacesService.loadLunchPlaces($scope.nearLocation);
		},500)
	});

	$scope.addNewPlace = function(){
		if(!!$scope.newPlaceName && $scope.newPlaceName != ""){
			var place = { name : $scope.newPlaceName };
			LunchPlacesService.addPlace(place);
			$scope.newPlaceName = "";
		}
	}

	$scope.loadLunchPlaces = function(nearLocation){
		$log.log("getting places near " + nearLocation);
		LunchPlacesService.loadLunchPlaces(nearLocation);
	}
});