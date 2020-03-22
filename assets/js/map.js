document.addEventListener('DOMContentLoaded', function () {

	var states = [];

	
	$(document).ready(function () { // DocRdy start

		let country = "";
		let state = "";
		let stateID = [];
		let province = "";
		let confirmed = [];
		let deaths = [];
		let recovered = [];
		let confirmedArray = [];



	



		$("myDataTable").empty();

		$('.mySearchBtn').click(function (e) {

			e.preventDefault();

			country = $('.myInputCountry').val();

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

			$(".myDataTable").empty();

			$.ajax(settings).done(function (response) {
				//console.log(response);
				let results = response;
				//console.log("Results is: " + results);

				province = results.data.covid19Stats;
				//console.log(province);


				function getResults() { //get results func starts


					for (let i = 0; i < province.length; i++) {

						state = province[i].province;
						let number = i + 1;
						confirmed = province[i].confirmed;
						deaths = province[i].deaths;
						recovered = province[i].recovered;

						let obj = {
							state: state,
							intensity: confirmed,
							deaths: deaths,
							recovered: recovered
						}
						states.push(obj)
						stateID.push(states[i].state);
						confirmedArray.push(province[i].confirmed);



						$('.myDataTable').append('<tr><td>' + number + '</td> <td>' + state + '</td> <td>' + confirmed + '</td><td>' + deaths + '</td>  <td>' + recovered + '</td>  </tr>');

					}

				} //get results func end
				getResults();

				for (let i = 0; i < states.length; i++) {
					//console.log("states[i] is " + states[i]);
				}

				function mychart() {

					
					let countryLabel = country; //country name
	
					let dataChart = new Chart(myChart, {
						type: 'horizontalBar',
						data: {
							labels: stateID,
							datasets: [{
								label: countryLabel,
								data: confirmedArray,
								backgroundColor: "Grey"
							}]
						},
						options: {}
					})
					//chart end
				}
				mychart();
				

			});




			//chart start https://www.chartjs.org/docs/latest/charts/bar.html
			//$(".myDataTable").empty();
			
			// $(".myDataTable").ready(function() {
			// 	// auto refresh page after 1 second
			// 	setInterval('refreshPage()', 1000);
			// });

			// function mychart() {

			// 	let countryLabel = country; //country name


			// 	let dataChart = new Chart(myChart, {
			// 		type: 'horizontalBar',
			// 		data: {
			// 			labels: stateID,
			// 			datasets: [{
			// 				label: countryLabel,
			// 				data: confirmedArray,
			// 				backgroundColor: "Grey"
			// 			}]
			// 		},
			// 		options: {}
			// 	})
			// 	//chart end
			// }
			// mychart();

	



		});


	});
	

});