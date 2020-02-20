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
      if (this.hitTest(".vase")) {
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
  chooseVase(percentHydro);
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

function chooseVase(percentHydro) {
  console.log('in. perc = ', percentHydro )
  if (percentHydro < 10) {
    $(".vase").remove();
    $(".pictures").html(`<a  id="empty" href="https://imgur.com/Yyp9bcy"><img class="vase" src="https://i.imgur.com/Yyp9bcy.png" title="source: imgur.com" /></a>`);
  } else if (percentHydro >= 10 && percentHydro <20) {
    $(".vase").remove();
    $(".pictures").append(`<a  id="v10" href="https://imgur.com/q5NREHV"><img class="vase" src="https://i.imgur.com/q5NREHV.png" title="source: imgur.com" /></a>`)
  } else if (percentHydro >= 20 && percentHydro <30) {
    $(".vase").remove();
    $(".pictures").append(`<a  id="v20" href="https://imgur.com/pjVCtOp"><img class="vase" src="https://i.imgur.com/pjVCtOp.png" title="source: imgur.com" /></a>`)
  } else if (percentHydro >= 30 && percentHydro <40) {
    $(".vase").remove();
    $(".pictures").append(`<a  id="v30" href="https://imgur.com/dzqAq3y"><img class="vase" src="https://i.imgur.com/dzqAq3y.png" title="source: imgur.com" /></a>`)
  } else if (percentHydro >= 40 && percentHydro <50) {
    $(".vase").remove();
    $(".pictures").append(`<a  id="v40" href="https://imgur.com/BiOIaac"><img class="vase" src="https://i.imgur.com/BiOIaac.png" title="source: imgur.com" /></a>`)
  } else if (percentHydro >= 50 && percentHydro <60) {
    $(".vase").remove();
    $(".pictures").append(`<a  id="v50" href="https://imgur.com/4p7QaP2"><img class="vase" src="https://i.imgur.com/4p7QaP2.png" title="source: imgur.com" /></a>`)
  } else if (percentHydro >= 60 && percentHydro <70) {
    $(".vase").remove();
    $(".pictures").append(`<a  id="v60" href="https://imgur.com/k6Cc5uP"><img class="vase" src="https://i.imgur.com/k6Cc5uP.png" title="source: imgur.com" /></a>`)
  } else if (percentHydro >= 70 && percentHydro <80) {
    $(".vase").remove();
    $(".pictures").append(`<a  id="v70" href="https://imgur.com/ysofOnp"><img class="vase" src="https://i.imgur.com/ysofOnp.png" title="source: imgur.com" /></a>`)
  } else if (percentHydro >= 80 && percentHydro <90) {
    $(".vase").remove();
    $(".pictures").append(`<a  id="v80" href="https://imgur.com/358md37"><img class="vase" src="https://i.imgur.com/358md37.png" title="source: imgur.com" /></a>`)
  } else if (percentHydro >= 90 && percentHydro <100) {
    $(".vase").remove();
    $(".pictures").append(`<a  id="v90" href="https://imgur.com/l0grCux"><img class="vase" src="https://i.imgur.com/l0grCux.png" title="source: imgur.com" /></a>`)
  } else if (percentHydro >= 100) {
    $(".vase").remove();
    $(".pictures").append(`<a  id="v100" href="https://imgur.com/pkhzFjj"><img class="vase" src="https://i.imgur.com/pkhzFjj.png" title="source: imgur.com" /></a>`)
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


