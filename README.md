# unit-4-game

  // function randomNumberToGuess(){
  //   var targetNumber = [];

  //   for (var i = 0; i < 120; i++){

  //     var random = Math.floor((Math.random() * 120) + 19);

  //     targetNumber = random;

  //   }
  //   $("#number-to-guess").text(targetNumber);
  // }

  // h1 function




// function randomNumberToGuess(min, max){
//   var targetNumber = Math.floor(min + Math.random()*(max + 1 - min));
//   return targetNumber;
// }

// randomNumberToGuess(19, 120);
// console.log(targetNumber);

for (var i = 0; i < numberOptions.length; i++) {
  // }


    $(".crystal-image-1").on("click", function(){
    var crystalvalue = ($(this).attr("data-crystalvalue"));
    counter += crystalvalue;
  })

  alert("New Score: " + counter);
