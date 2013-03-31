eatApp.controller("LunchPlaceListCtrl", function($scope, LunchPlacesService){
	
	$scope.getLunchPlaces = function(){
		return LunchPlacesService.lunchPlaces;
	}

	$scope.addNewPlace = function(){
		if(!!$scope.newPlaceName && $scope.newPlaceName != ""){
			var place = { name : $scope.newPlaceName };
			LunchPlacesService.addPlace(place);
			$scope.newPlaceName = "";
		}
	}

	$scope.removePlace = function(place){
		LunchPlacesService.removePlace(place);
	}

	$scope.hasUserAddedPlace = function(){
		return !!LunchPlacesService.getLastUserAddedPlace();
	}

	$scope.getLastUserAddedPlace = function(){
		return LunchPlacesService.getLastUserAddedPlace();
	}
});