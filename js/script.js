

$(document).ready(function() {

	var country = "USA";

	var settings = {
		"async": true,
		"crossDomain": true,
		"url": `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=${country}`,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
			"x-rapidapi-key": "209b88513bmshbc9ff320e04d9e1p1f5294jsnc0b4d120644a"
		}
	}
	
	$.ajax(settings).done(function (response) {
		console.log(response);
		console.log(response.data.covid19Stats[0].province);
	});
	
	  });