

$(document).ready(function(){
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=USA",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
			"x-rapidapi-key": "f8c62c6da0msh66a624b29081a48p18af92jsnc6d3dfbee09f"
		}
	}
	$.ajax(settings).done(function (response) {
		console.log(response);
		for(var i = 0; i < response.data.covid19Stats.length; i++)
		console.log(response.data.covid19Stats[i].province);
		
	})
});