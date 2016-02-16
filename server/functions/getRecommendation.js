var request_yelp = require('./request_yelp');

module.exports = function(requestObj,res,diners){ //account for multiple diners

	request_yelp(requestObj,function(yelpErr,yelpRes,yelpBody){
		if (yelpErr){
			res.send(yelpErr);
		}
		var parsed = JSON.parse(yelpBody);
		var businesses = parsed.businesses;

		businesses.forEach(function(business) {
			business.weight = 0;
		})

		for (var i = 0; i < diners.length; i++) {
			businesses.forEach(function(business){
				var categories = business.categories;
				var sum = 0;
				categories.forEach(function(category){
					var categoryName = category[0];
					if (diners[i].categories[categoryName]){
						var numerator = diners[i].categories[categoryName][0] * diners[i].categories[categoryName][2];
						var denominator = diners[i].categories[categoryName][1];
						sum+=numerator/denominator;
					}
				})
				var weight = Math.pow(sum/categories.length+1,2);
				business.weight += weight;
			});
		}
		businesses.forEach(function(business) {
			business.weight = business.weight/diners.length;
		})

		var totalWeight = 0;
		businesses.forEach(function(business){
			totalWeight += business.weight;
		});

		//below returns recommendations in slightly shuffled way so as not to return same list everytime
		var recommendations = [];
		while (businesses.length) {
			var index = Math.random()*totalWeight;
			var current = 0;
			for (var i=0; i<businesses.length; i++){
				current+=businesses[i].weight;
				if (current>index) {
					break;
				}
			}
			totalWeight -= businesses[i].weight;
			recommendations.push(businesses.splice(i,1)[0]);
		};
		for (var i = 0; i < recommendations.length; i++) {
			if (recommendations[i].image_url) {
				recommendations[i].image_url = recommendations[i].image_url.slice(0, -6)+'o.jpg';
			}
		}
		res.json(recommendations);
	})

}
