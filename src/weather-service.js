//Weather Service Business Logic
 export class WeatherService {
  async getWeatherByZip(zip) {
    try {
      let response = await fetch(`api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=761d5c2bc936d3c8372d3bddb84020f0`);
      let jsonifiedResponse;
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


