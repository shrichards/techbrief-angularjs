eatApp.directive('placeEntry', function(){
	return {
		restrict: 'E',
		scope : {
			place:'='
		},
		template: 	'<span>' +
				   		'<button class="btn btn-danger" data-ng-show={{place.userAdded}} data-ng-click="removePlace(place)">' +
							'<i class="icon-minus icon-white"></i>' +
						'</button>' +
						'{{place.name}}' +
					'</span>'
	};
});