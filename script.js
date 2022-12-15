

	// first method
	document.getElementById("weatherSearch").addEventListener('click',function(e){

		e.preventDefault();	

		var city = e.path[1][0].value;

		console.log(city);

		weather.innerHTML =  city;





		// requesting for data using rapid API


		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '18608b161cmsh434caee79c4219ep1dc0e8jsnb93a5bfcd0e8',
				'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
			}
		};
		
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
			.then(response => response.json())
			.then(response => {
				max_temp.innerHTML = response.max_temp;
				min_temp.innerHTML = response.min_temp;
				temprature.innerHTML = response.temp;
				humidity_pct.innerHTML = response.humidity;
				cloudpct.innerHTML = response.cloud_pct;
				windspeed.innerHTML = response.wind_speed;
				winddegree.innerHTML = response.wind_degrees;


			})
			.catch(err => console.error(err));

	
	});





















	//second tarika
	document.getElementById("weatherSearch").onclick = function(t){
		t.preventDefault();
		
	}










	