eatApp.controller("LunchPlaceListCtrl", function($scope){
	
	$scope.lunchPlaces = [
		{ name : 'Sudbury Farms'},
		{ name : 'Lavender Asian Cuisine & Bar'},
		{ name : 'Sudbury Pizza'},
		{ name : 'Sudbury Coffee Works'},
		{ name : 'Rossini\'s'},
		{ name : 'Subway'}
	];

	$scope.addNewPlace = function(){
		if(!!$scope.newPlaceName && $scope.newPlaceName != ""){
			$scope.lunchPlaces[$scope.lunchPlaces.length] = { name: $scope.newPlaceName, userAdded: true };
			$scope.newPlaceName = '';
		}
	}

	$scope.removePlace = function(place){
		$scope.lunchPlaces = _.reject($scope.lunchPlaces, function(p){ return p === place; });
	}

});