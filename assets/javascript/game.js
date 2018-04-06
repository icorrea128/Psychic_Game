var wins = 0;
var losses = 0; 
var GuessLeft = 9;
var Guess = [,];

function randomLetter() {
    var Letter = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
  
    for (var i = 0; i < 1; i++)
      Letter += possible.charAt(Math.floor(Math.random() * possible.length));
    return Letter;
  }

    document.onkeyup = function(event) {
    var userguess = event.key;
    var GuessSoFar = Guess + userguess;
    Guess.fill(GuessSoFar);
    function randomLetter() {
      var Letter = "";
      var possible = "abcdefghijklmnopqrstuvwxyz";
    
      for (var i = 0; i < 1; i++)
        Letter += possible.charAt(Math.floor(Math.random() * possible.length));
      return Letter;
    }

    if ( userguess === randomLetter()){
      wins++;
      GuessLeft = 9;
      Guess = [,];
    }
    else if (userguess != randomLetter()){
      GuessLeft--;
    }
    if (GuessLeft === 0){
      losses++;
      GuessLeft = 9;
      Guess = [,];
    }

    var html ="<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left " + GuessLeft + "</p>" +
    "<p>Your guesses so far " + GuessSoFar + "</p>";
  
  document.querySelector("#game").innerHTML = html;

}

