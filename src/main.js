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
	} else {
		console.log(`There was an error handling your request`);
	}
}

//DISPLAY FUNCTIONALITY ----------------------------------------------------------
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

function addHydrate(user, ozs) {
  user.currentHydrationLevel = user.currentHydrationLevel += ozs
  console.log('hydratations',user.currentHydrationLevel);
  $("#currentHydro").html(user.currentHydrationLevel);
  // progress bar manip
  let percentHydro =  (user.currentHydrationLevel / user.hydrationGoal ) * 100
  console.log('percent',percentHydro)
  // let percentHydro = user.currentHydrationLevel 
  $('#bar').css("width", percentHydro + "%");
  reachedGoal(user);
}

function reachedGoal(user) {
  if (user.currentHydrationLevel >= user.hydrationGoal) {
    alert('You did it!!');
    user.currentHydrationLevel = 0;
    $("#currentHydro").html(user.currentHydrationLevel);
    // user.createFish()
  }
}

//  STRETCH GOAL : reset current hydro at midnight everyday with something like this
// function resettingHydro(user) {
//   let midnight = unix time representative?
//   setInterval(() => {
//     user.currentHydrationLevel = 0
//     $("#currentHydro").html(user.currentHydrationLevel);

//   } midnight)

// }

$(document).ready(function() {
  let user = new IndividualWaterIntake();
  changeHowtoCalculate()
  //informations form ---------------------------------------------------------------------------------------
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
    $("#hydrationGoal").html(user.hydrationGoal);
    $("#cups").html(user.hydrationGoalCup);
    console.log('now user bmi is:', user.bmi);
  });
  // goal form-------------------------------------------------------------------------------------------------
  $("#goal").submit(function(event) {
    event.preventDefault();
    // $("#hydrationGoal").html(user.hydrationGoal);
    let goal = $("#daily-goal").val();
    let waterBottle = $("#waterbottle").val();
    $("#goal").hide();
    $(".track").show();

    //append information
    user.hydrationGoal = goal; //incase function is backend?
    $("#usersBottle").html(waterBottle); //display waterbottle ozs
    $("#usersGoal").html(goal); //Display users goal at top
    $("#currentHydro").html(user.currentHydrationLevel); //start hydro at 0
  });
  // tracking ------------------------------------------------------------------------------------------------ 
  $("#addWaterButton").click(function(){
    $("form#select-water-amount").show()
  })
  $("form#select-water-amount").submit(function(event) {
    event.preventDefault();
    let ozs = parseInt($("#quantity").val());
    addHydrate(user, ozs);
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    $("form#select-water-amount").hide();
  });
});

