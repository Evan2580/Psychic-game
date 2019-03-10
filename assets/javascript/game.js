
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wrongLetters = [];
var wins = 0;
var loses = 0;
var randomLetter = [];
var guesses = 9;

function lossFunction(){
  wrongLetters.push(event.key);
  document.getElementById("chosenLetters").innerHTML = wrongLetters;
  document.getElementById("losses").innerHTML = loses;



}
function winsFunction(win) {
  wins++;
  console.log(wins);
  document.getElementById("wins").innerHTML = wins;
  resetGame();
}

function resetGame (){
   wrongLetters = [];
   guesses = 9;
   randomLetter = letters[Math.floor(Math.random() * letters.length)];
   console.log(randomLetter);

}
  resetGame();

  document.onkeyup = function (event) {
    // console.log("EA" + randomLetter);
  if (wrongLetters.length !== 9 ){
    document.getElementById("guessesLeft").innerHTML = guesses;
    guesses--;
    if (event.key === randomLetter) {

      console.log("You win: ");
      winsFunction(wins);

    }
    else if (event.key !== randomLetter){
      lossFunction();
  }

  } else {
    loses++;
    lossFunction();
    resetGame();
  };
}
