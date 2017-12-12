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
 
  CrystalImage = $("<img>");
  console.log(numberOptions[i])
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
  
 
  CrystalImage.attr("data-crystalvalue", numberOptions[i]);


  $("#crystals").append(CrystalImage);
  
}
$(".crystal-image").on("click", function() {

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;
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

});

