eatApp.directive('placeEntry', function(LunchPlacesService){
	return {
		restrict: 'E',
		scope : {
			place:'='
		},
		controller : function($scope, $element){
			
			$scope.directiveRemove = function(place){
				LunchPlacesService.removePlace(place);
			}

		},
		template: 	'<span>' +
				   		'<button class="btn btn-danger" data-ng-show={{place.userAdded}} data-ng-click="directiveRemove(place)">' +
							'<i class="icon-minus icon-white"></i>' +
						'</button>' +
						'{{place.name}}' +
					'</span>'
	};
});