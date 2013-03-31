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
				   		'<button class="btn btn-danger" data-ng-show="place.userAdded" data-ng-click="directiveRemove(place)">' +
							'<i class="icon-minus icon-white"></i>' +
						'</button>' +
						'{{place.name}}' +
					'</span>'
	};
});

eatApp.directive('lastAddedPlace', function($log,LunchPlacesService){
	return{
		restrict: 'A',
		replace:false,
		scope : {},
		controller : function($scope, $element){
			
			$scope.hasUserAddedPlace = function(){
				$log.log('checking for user added place');
				return !!LunchPlacesService.getLastUserAddedPlace();
			}

			$scope.getLastUserAddedPlace = function(){
				$log.log('getting last user added place');
				return LunchPlacesService.getLastUserAddedPlace();
			}

		},
		template : '<div class="well" data-ng-show="hasUserAddedPlace()">' +
						'<h3>Last Place Added</h3>' + 
				   		'<place-entry place="getLastUserAddedPlace()"></place-entry>' +
				   	'</div>'
	};
});