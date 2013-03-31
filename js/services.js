eatApp.service('LunchPlacesService', function(){
	
	this.lunchPlaces = [
		{ name : 'Sudbury Farms'},
		{ name : 'Lavender Asian Cuisine & Bar'},
		{ name : 'Sudbury Pizza'},
		{ name : 'Sudbury Coffee Works'},
		{ name : 'Rossini\'s'},
		{ name : 'Subway'}
	];

	this.addPlace = function(newPlace)
	{
		newPlace.userAdded = true;
		if(!_.some(this.lunchPlaces, function(p){ return p.name == newPlace.name; })){
			this.lunchPlaces[this.lunchPlaces.length] = newPlace;
		}
	};

	this.removePlace = function(remove){
		this.lunchPlaces = _.reject(this.lunchPlaces, function(p){ return p === remove; });
	};

	this.getLastUserAddedPlace = function(){
		return _.last(
			_.filter(this.lunchPlaces, function(p){ return p.userAdded; })
		);
	};

});