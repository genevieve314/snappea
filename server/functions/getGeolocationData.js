var google_api_key = require('../config.js').google_api_key;
var Q = require('q');
var request = require('request');

module.exports = function(){
	var deferred = Q.defer();

	request.post({url:'https://www.googleapis.com/geolocation/v1/geolocate?key='+google_api_key}, function(err, res, body){
	  if(err){
	    console.error("error:", err);
	    deferred.reject("error within google geolocation POST request");
	  }
	  if(!err && res.statusCode === 200){
	    deferred.resolve(JSON.parse(body))
	  }
	  else {
	    deferred.reject("alt error");
	  }
	});

	return deferred.promise;
}
