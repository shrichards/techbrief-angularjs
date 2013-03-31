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
});