(function(){

	var cities = [
		{
			sport: 'NASCAR',
			athlete: "Kurt Busch",
			amount: 6000,
			donated_to: "Republicans",
			donated_how_many_times: 2
		},
		{
			sport: 'NASCAR',
			athlete: "Jeff Gordon",
			amount: 7800,
			donated_to: "Republicans",
			donated_how_many_times: 4
		},
		{
			sport: 'NASCAR',
			athlete: "Kevin Harvick",
			amount: 1000,
			donated_to: "Republicans",
			donated_how_many_times: 2
		},
		{
			sport: 'NASCAR',
			athlete: "Martin Truex Jr.",
			amount: 15000,
			donated_to: "Republicans and Democrats",
			donated_how_many_times: 10
		},
		{
			name: 'NASCAR',
			athlete: "Brian Vickers",
			amount: 7300,
			donated_to: "Republicans",
			donated_how_many_times: 4
		}
	];

	//var formatHelpers = {
	//	addCommas: function(value){
	//		return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	//}


	// Step 1: in the JavaScript, load the html from the template we made in index.html
	var templateHtml = $('#sport-template').html();
	 //console.log(templateHtml)
	var templateFactory = _.template(templateHtml);
	cities.forEach(function(cityData){
		_.extend(cityData);
		var this_citys_html_plus_data = templateFactory(cityData);
		console.log(cityData)
		console.log('-----');
		$('#container').append(this_citys_html_plus_data);
	});

	
}).call(this);