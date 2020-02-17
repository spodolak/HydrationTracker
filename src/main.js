import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function displayWaterintake(name, age, body, region, activity) {
  console.log('gathered info:', name, age, body, region, activity );
  // here we will run the funciton to display suggested water intake based off the user info..
  // passobly call the backend function here to calculate as well, or maybe call it in the form, 
  // depending on what works best
}

$(document).ready(function() {
  $("#personal-info").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let age = $("#age").val();
    var body = $("#sex-or-bmi").val();
    let region = $("#location").val();
    let activity = $("#activity").val();
    $(".users-name").html(name);
    $("#personal-info").hide();
    $("form#goal").show();
    
    displayWaterintake(name, age, body, region, activity); 
  });
  $("#goal").submit(function(event) {
    event.preventDefault();
    let goal = $("#daily-goal").val();
    let waterBottle = $("#waterbottle").val();
    $("#goal").hide();
    $(".tracking").show();
    
    console.log('gathered info:', goal, waterBottle);
  });
});