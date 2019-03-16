

$(document).ready(function(){

    var targetNumber = [];
    targetNumber = Math.floor((Math.random() * (120 - 19) +  19));
    $("#number-to-guess").text(targetNumber);






  var counter = 0;
  var numberOptions = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1),];



    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image p-2");
    imageCrystal.attr("src", "assets/images/Blue-diamond2.png");
    imageCrystal.attr("data-crystalvalue", numberOptions[0]);


    $("#crystal-1").append(imageCrystal);



    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image p-2");
    imageCrystal.attr("src", "assets/images/Green-diamond2.png");
    imageCrystal.attr("data-crystalvalue", numberOptions[1]);


    $("#crystal-2").append(imageCrystal);



    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image p-2");
    imageCrystal.attr("src", "assets/images/Red-diamond2.png");
    imageCrystal.attr("data-crystalvalue", numberOptions[2]);


    $("#crystal-3").append(imageCrystal);



    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image p-2");
    imageCrystal.attr("src", "assets/images/Purple-diamond2.png");
    imageCrystal.attr("data-crystalvalue", numberOptions[3]);


    $("#crystal-4").append(imageCrystal);


  var win = 0;
  var lose = 0;

  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#result").text(counter);

    if (counter === targetNumber) {
      $("#win-message").text("You win!");
      win++;
      $("#win").text(win);
      start();
    }



    else if (counter >= targetNumber) {
      $("#lose-message").text("You lose!!");
      lose++;
      $("#lose").text(lose);
      start();
    }

  });




})
