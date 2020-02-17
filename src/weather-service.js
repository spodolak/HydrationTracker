//Weather Service Business Logic
 class WeatherService {
  async getWeatherByZip(zip) {
    try {
      let response = await fetch(`api.openweathermap.org/data/2.5/weather?zip=${zip},&appid={process.env.API_KEY}`);
      let jsonifiedResponse;
      if(response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      }else{
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
  } catch {
      return false;
    }
  }
}


//UI logic
$(document).ready(function() {
  alert("hi!");
  // const zip = $("#zip-code").val();
  const zip = 97209;
  // $("#zip-code").val("");

  (async () => {
    let weatherService = new WeatherService();
    const response = await weatherService.getWeatherByZip(zip);
    console.log(response.main.humidity);
    // getElements(response);
  
  })();
  
  function getElements(response) {
    if(response) {
      $("body").text(`${response.main.humidity}%`);  
      // $(".showTemp").text(`${response.main.temp}degrees.`);
    }else{
      $(".showHumidity").text(`There was an error handling your request.`);
      // $(".showTemp").text(`Please check yoiur inputs and try again!`);
    }
  }


});