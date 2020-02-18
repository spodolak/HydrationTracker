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


