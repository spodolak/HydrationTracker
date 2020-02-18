import $ from 'jquery';
import { WeatherService } from './weather-service';


//UI logic
$(document).ready(function() {
    alert("hi!");
    // const zip = $("#zip-code").val();
    const zip = 97209;
    // $("#zip-code").val("");
  
    (async () => {
      let weatherService = new WeatherService();
      const response = await weatherService.getWeatherByZip(zip);
      console.log(response);
      // getElements(response);
    
    })();
    
    // function getElements(response) {
    //   if(response) {
    //     $("body").text(`${response.main.humidity}%`);  
    //     // $(".showTemp").text(`${response.main.temp}degrees.`);
    //   }else{
    //     $(".showHumidity").text(`There was an error handling your request.`);
    //     // $(".showTemp").text(`Please check yoiur inputs and try again!`);
    //   }
    // }
  });