import { IndividualWaterIntake } from './water-intake-calculation.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { WeatherService } from './weather-service.js';
import { gsap } from 'gsap';
//DRAGABILITY ----------------------------------------------------------

//makes sure you can add waterbottle multiple times
const returnBottle = function () {
  // makes sure waterbottle doesnt exist
  $('#waterBottle').remove()
  console.log("returnBottle called")
  //creates new bottle
  $('.bottle').append('<img id="waterBottle"  src="https://pngimage.net/wp-content/uploads/2018/06/water-bottle-cartoon-png-6-200x200.png" />')
  //calls the drag function again, so it can be created for the new bottle created within this function
  initDrag()
  // adds the waterbottles value to currenthydration level value
  addHydrate(thisUser, parseInt($("#waterbottle").val()))
}

// the drag function
const initDrag = function () {
  //targets waterbottle as draggable
  Draggable.create("#waterBottle", {
    // allows us to see function is working while dragging
    onDragStart: function () {
      console.log("called")
    },
    //executes AFTER animation
    onDragEnd: function () {
      //informs us what is dragging- the plastic waterbottle
      console.log("this.target", this.target)
      //if target hits scope..
      if (this.hitTest("#bottle")) {
        console.log("this.target", this.target)
        //do this animation AND... ON COMPLETE, EXECUTE THIS FUNCTION
        TweenLite.to(this.target, 0.6, { opacity: 0, scale: 0, onComplete: returnBottle });

      }
    }
  });
}

//// old function. 
// Draggable.create(".icon", {
//   bounds: "svg",

//   // onDrag: function() {
//   onDragEnd: function () {
//     if (this.hitTest("#bottle")) {
//       TweenLite.to(this.target, 0.6, { opacity: 0, scale: 0, svgOrigin: "400 400" });
//       // user.waterintake += bottleval
//     }
//   }
// });

//API FUNCTIONALITY ----------------------------------------------------------

async function getWeatherStats(city, state, user) {
  let weatherService = new WeatherService();
  const response = await weatherService.getWeatherByCityState(city, state);
  await getElements(response, user);
}

function getElements(response, user) {
  if (response) {
    user.humidity = response.main.humidity;
    user.temperature = response.main.temp;
  } else {
    console.log(`There was an error handling your request`);
  }
}

//DISPLAY FUNCTIONALITY ----------------------------------------------------------
function changeHowtoCalculate() {
  $("#sex-or-bmi").change(function () {
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
  console.log('it:', it)
}

function addHydrate(user, ozs) {
  console.log(`addHydrate(${user.currentHydrationLevel}, ${ozs})`)
  user.currentHydrationLevel = user.currentHydrationLevel += ozs
  console.log('hydratations', user.currentHydrationLevel);
  $("#currentHydro").html(user.currentHydrationLevel);
  // progress bar manip
  let percentHydro = (user.currentHydrationLevel / user.hydrationGoal) * 100
  console.log('percent', percentHydro)
  // let percentHydro = user.currentHydrationLevel 
  $('#bar').css("width", percentHydro + "%");
  reachedGoal(user);
}

function reachedGoal(user) {
  if (user.currentHydrationLevel >= user.hydrationGoal) {
    user.currentHydrationLevel = 0;
    $("#currentHydro").html(user.currentHydrationLevel);
    user.fishIndex++;
    $('.fish-'+ user.fishIndex).fadeIn();
    alert('You did it!!');
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

//make this a global variable so we can access user's current hydration level in the return bottle function
let thisUser = ""

$(document).ready(function () {
  let user = new IndividualWaterIntake();
  thisUser = user
  changeHowtoCalculate()
  initDrag()
  //informations form ---------------------------------------------------------------------------------------
  $("#personal-info").submit(function (event) {
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
  $("#goal").submit(function (event) {
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
  $("#addWaterButton").click(function () {
    $("form#select-water-amount").show()
  })
  $("form#select-water-amount").submit(function (event) {
    event.preventDefault();
    let ozs = parseInt($("#thequantity").val());
    addHydrate(user, ozs);
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    $("form#select-water-amount").hide();
  });
});


