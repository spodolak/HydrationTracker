import { IndividualWaterIntake } from './water-intake-calculation.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { gsap } from 'gsap';
Draggable.create(".icon", {
  bounds:"svg",
  onDrag: function() {
    if (this.hitTest("#bottle")) {
      TweenLite.to(this.target, 0.6, {opacity:0, scale:0, svgOrigin:"400 400"});
      // user.waterintake += bottleval
    }
  }
});

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
    let location = $("#location").val();
    let activity = $("#activity").val();
    let caffeineIntake = $("#coffee").val();

    user.addUserInput(age, sex, height, weight, caffeineIntake, activity, location)
    console.log('users info', user.age, user.gender, user.height, user.weight, user.caffeineIntake, user.activity, user.location)
    $(".users-name").html(name);
    $("#personal-info").hide();
    $("form#goal").show();
    

    displayWaterintake(name, age, sex, height, weight, location, activity); 
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






