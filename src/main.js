import { IndividualWaterIntake } from './water-intake-calculation.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { WeatherService } from './weather-service.js';
import { gsap } from 'gsap';
//DRAGABILITY ----------------------------------------------------------
Draggable.create(".icon", {
  bounds:"svg",

  onDrag: function() {
    if (this.hitTest("#bottle")) {
      TweenLite.to(this.target, 0.6, {opacity:0, scale:0, svgOrigin:"400 400"});
      // user.waterintake += bottleval
    }
  }
});

//API FUNCTIONALITY ----------------------------------------------------------

async function getWeatherStats (city, state, user) {
  let weatherService = new WeatherService();
  const response = await weatherService.getWeatherByCityState(city, state);
  await getElements(response, user);
}

function getElements(response, user) {
	if(response) {
		user.humidity = response.main.humidity;
		user.temperature = response.main.temp;  
		console.log(user.humidity);
		console.log(user.temperature);
	} else {
		console.log(`There was an error handling your request`);
	}
}

//DISPLAY FUNCTIONALITY ----------------------------------------------------------
function displayWaterintake(name, age, body, region, activity) {
  console.log('gathered info:', name, age, body, region, activity );
  // here we will run the funciton to display suggested water intake based off the user info..
  // passobly call the backend function here to calculate as well, or maybe call it in the form, 
  // depending on what works best
}

function changeHowtoCalculate() {
$("#sex-or-bmi").change(function() {
  if ($(this).val() === "bmi") {
    $(".bmi").show();
    $(".sexs").hide();
  } else {
    $(".bmi").hide();
    $(".sexs").show();
  }
});
let it = $("#sex-or-bmi")
it.trigger("change");
console.log('it:', it )
} 

$(document).ready(function() {
  let user = new IndividualWaterIntake();
  changeHowtoCalculate()
  $("#personal-info").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let age = $("#age").val();
    let sex = $("#sex").val();
    let weight = $("#weight").val();
    let height = $("#height").val();
    let city = $("#city").val();
    let state = $("#state").val();
    let activity = $("#activity").val();
    let caffeineIntake = $("#coffee").val();
    $("#personal-info").hide();
    $("form#goal").show();
    $(".users-name").html(name);

    let stateLower = state.toLowerCase();

    user.addUserInput(age, sex, height, weight, caffeineIntake, activity, city, stateLower)
    user.calculateUserBmi() //provide bmi property to user
    getWeatherStats(city, stateLower, user);
    user.calculateHydrationGoal() //calculate hydration suggestions based off user properties
    console.log('your hydraation goal is:', user.hydrationGoal);
    console.log('now user bmi is:', user.bmi);
    

    displayWaterintake(name, age, sex, height, weight, city, state, activity); 
    });
  $("#goal").submit(function(event) {
    event.preventDefault();
    let goal = $("#daily-goal").val();
    let waterBottle = $("#waterbottle").val();
    $("#goal").hide();
    $(".tracking").show();

    console.log('more gathered info:', goal, waterBottle);
  });
});

