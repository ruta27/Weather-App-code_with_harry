

var myModal = new bootstrap.Modal(document.getElementById('Modal'), {});

// first method
document.getElementById("weatherSearch").addEventListener('click', function (e) {

	e.preventDefault();

	var city = e.path[1][0].value;

	//console.log(city);

	weather.innerHTML = city;

	// requesting for data using rapid API


	var options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '18608b161cmsh434caee79c4219ep1dc0e8jsnb93a5bfcd0e8',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options).then(function (response) {
		return response.json();
	}).then(function (response) {
		max_temp.innerHTML = response.max_temp;
		min_temp.innerHTML = response.min_temp;
		temprature.innerHTML = response.temp;
		humidity_pct.innerHTML = response.humidity;
		cloudpct.innerHTML = response.cloud_pct;
		windspeed.innerHTML = response.wind_speed;
		winddegree.innerHTML = response.wind_degrees;

		if ("error" in response) {
			console.log("yes error is there");

			myModal.toggle();
		} else {
			dynamicrows(response, city);
		}
	}).catch(function (err) {
		console.error(err);
	});
});

function dynamicrows(response, city) {

	var table_El = document.querySelector('tbody');

	table_El.innerHTML += '<tr>\n\t<td><b>' + city + '</b></td>\n\t<td>' + response.cloud_pct + '</td>\n\t<td>' + response.feels_like + '</td>\n\t<td>' + response.humidity + '</td>\n\t<td>' + response.max_temp + '</td>\n\t<td>' + response.min_temp + '</td>\n\t<td>' + response.sunrise + '</td>\n\t<td>' + response.sunset + '</td>\n\t<td>' + response.temp + '</td>\n\t<td>' + response.wind_degrees + '</td>\n\t<td>' + response.wind_speed + '</td>\n\t</tr>';

	console.log(response);
}

//second tarika
document.getElementById("weatherSearch").onclick = function (t) {
	t.preventDefault();
};



	
