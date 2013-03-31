eatApp.filter("yummy", function(){
	return function(input){

		if(!!input && input.indexOf('Pizza') !== -1 )
			return input + ' (mmmmmmm pizza)';

		return input;
	};
})