eatApp.directive('placeEntry', function(){
	return {
		restrict: 'E',
		scope : {
			place:'=',
			remove:'&'
		},
		template: 	'<span>' +
				   		'<button class="btn btn-danger" data-ng-show={{place.userAdded}} data-ng-click="remove()">' +
							'<i class="icon-minus icon-white"></i>' +
						'</button>' +
						'{{place.name}}' +
					'</span>'
	};
});