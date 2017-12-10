$(document).ready(function () {

var counter;
var targetNumber;
var WinCounter= 0;
var LoseCounter= 0;
var CrystalImage;
var numberOptions;
var  FirstTimeSetup=1;

function Intialize(){
counter = 0;
targetNumber = Math.floor((Math.random() * 120) + 19);
numberOptions = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1),Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)];
$("#Wins").text("Wins: "+ WinCounter);
$("#Loses").text("Lose: "+ LoseCounter);
$("#Number-Goal").text("Target Number: "+ targetNumber);
$("#CurrentTotal").text( "Your total score is: "+ counter);

for (var i = 0; i < numberOptions.length; i++) {
  // For each iteration, we will create an CrystalImage
  CrystalImage = $("<img>");
  console.log(numberOptions[i])
  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  CrystalImage.addClass("crystal-image");
  switch (i){
  case 0: CrystalImage.attr("src", "Assets/images/Rock1.png");
  break
  case 1: CrystalImage.attr("src", "Assets/images/Rock2.png");
  break
  case 2: CrystalImage.attr("src", "Assets/images/Rock3.png");
  break
  case 3: CrystalImage.attr("src", "Assets/images/Rock4.png");
  break
  }
  
  // those satanists, you have to have the path from the html the whole time
  // Each CrystalImage will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  CrystalImage.attr("data-crystalvalue", numberOptions[i]);
  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
//  if (FirstTimeSetup===1)

  $("#crystals").append(CrystalImage);
  
}
$(".crystal-image").on("click", function() {
  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
  
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;
  // All of the same game win-lose logic applies. So the rest remains unchanged.
  $("#CurrentTotal").text( "Your total score is: "+ counter);
  if (counter === targetNumber) {
    WinCounter = WinCounter + 1;
    $("#crystals").empty();
    Intialize();
  }
  else if (counter >= targetNumber) {
    
    LoseCounter = LoseCounter + 1;
    $("#crystals").empty();
    Intialize();
  }
});
}

Intialize();


// Now for the hard part. Creating multiple crystals each with their own unique number value.
// We begin by expanding our array to include four options.

// This time, our click event applies to every single crystal on the page. Not just one.

});

// To do
// Intialize function 
// 