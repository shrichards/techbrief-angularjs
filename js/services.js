eatApp.service('LunchPlacesService', ['$resource', function($resource){
	// http://www.alexrothenberg.com/2013/02/11/the-magic-behind-angularjs-dependency-injection.html

	// Refactor this into its own service?
	this.foursquarePlacesResource = $resource(
			'https://api.foursquare.com/v2/venues/explore?near=:near&section=:section&client_id=:clientId&client_secret=:clientSecret&v=:versionDate',
			{
				near:'Sudbury, MA', 
				section:'food', 
				clientId:apiKeys.foursquare.clientId, 
				clientSecret:apiKeys.foursquare.clientSecret,
				versionDate:'20130401'
			},
			{
				getLunchPlaces : { method:'GET' }
			}
		);

	
	this.lunchPlaces = [];

	this.loadLunchPlaces = function(location){
		// why don't we assign this to a new empty array?
		this.lunchPlaces.length = 0;
		var myService = this;

		// This is ASYNC!
		var rawFoursquarePlaces  = this.foursquarePlacesResource.getLunchPlaces({near:location}, function(){
			var places = _.map(rawFoursquarePlaces.response.groups[0].items, function(item){ return {name: item.venue.name}});	
			_.each(places, function(p){ myService._addPlace(p)});
		});
	}

	this.addPlace = function(newPlace){
		newPlace.userAdded = true;
		this._addPlace(newPlace);
	};

	this._addPlace = function(newPlace)	{
		if(!_.some(this.lunchPlaces, function(p){ return p.name == newPlace.name; })){
			this.lunchPlaces[this.lunchPlaces.length] = newPlace;
		}
	};

	this.removePlace = function(remove){
		this.lunchPlaces = _.reject(this.lunchPlaces, function(p){ return p === remove; });
		var removeIndex = -1;
		for(var i = 0; i < this.lunchPlaces.length; i++){
			if(this.lunchPlaces[i].userAdded && this.lunchPlaces[i].name == remove.name){
				removeIndex = i;
				break;
			}
		}

		if(removeIndex > -1){
			this.lunchPlaces.splice(removeIndex, 1);
		}
	};

	this.getLastUserAddedPlace = function(){
		return _.last(
			_.filter(this.lunchPlaces, function(p){ return p.userAdded; })
		);
	};

}]);