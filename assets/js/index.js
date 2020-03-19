//master
//release
//development
$(document).ready(function() {

    var country = "USA";

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=US",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		"x-rapidapi-key": "75dc33b5ddmshffa568272725104p100b3fjsn243554d73b59"
	}
}

$.ajax(settings).done(function (response) {
    console.log(response);
    console.log(result.data.covid19Stats[0].province);
});

});