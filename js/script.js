$(document).ready(function () { // DocRdy start

	$( "myDataTable" ).empty();

	$('.mySearchBtn').click(function (e) {
		
		e.preventDefault();
		


		//alert("Handler for .click() called.");

		let country = $('.myInputCountry').val();
		console.log(country);

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
			//console.log(response);
			let results = response;
			//console.log(results);

			let province = results.data.covid19Stats;
			//console.log(province);


			function getResults() { //get results func starts


				for (let i = 0; i < province.length; i++) {

					let state = province[i].province;

					let number = i + 1;
					let confirmed = province[i].confirmed;
					let deaths = province[i].deaths;
					let recovered = province[i].recovered;

					$('.myDataTable').append('<tr><td>' + number + '</td> <td>' + state + '</td> <td>' + confirmed + '</td><td>' + deaths + '</td>  <td>' + recovered + '</td>  </tr>');

				}

			} //get results func end
			getResults();


		});

	});


}); // DocRdy end


