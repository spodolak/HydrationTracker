export class WeatherService {
	async getWeatherByCityState(city, state) {
		try{
			let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},state=${state}&appid=${process.env.API_KEY}`);
			let jsonifiedResponse;
			console.log(response);
			if (response.ok && response.status == 200) {
				jsonifiedResponse = await response.json();
			} else {
				jsonifiedResponse = false;
			}
			return jsonifiedResponse;
		} catch(error) {
			return false;
		}
	}
}

  // API LOGIC FOR MAIN.JS
// $("#personal-info").submit(function(event) {
// 	event.preventDefault();
// 	const state = $("#state").val();
// 	const city = $("#city").val();
// 	(async () => {
// 		let weatherService = new WeatherService();
// 		const response = await weatherService.getWeatherByCityState(city);
// 		getElements(response);
// 	})();
// });


// function getElements(response) {
// 	if(response) {
// 		let humidity = response.main.humidity;
// 		let temp = response.main.temp;  
// 		console.log(humidity);
// 		console.log(temp);
// 	} else {
// 		console.log(`There was an error handling your request`);
// 	}
// }
