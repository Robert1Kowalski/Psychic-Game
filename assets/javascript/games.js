var letters = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var win = 0;
var losses = 0;
var GuessLeft = 9; // win and losses at 0 b/c beginning of game

document.onkeyup = function () {
                                // (1) IF the user input === the psychic guess, win total ++
                                // (2)  if guessesLeft hits zero, add one to the loss column;
                                // (3) if the guess is less than 0 characters (no input) do nothing;
                                // (4)  anything else subtracts one from guessesleft 



// need to build varaibles to hold the psychic value and user input value (event property?)
var psychicGuess = letters[Math.floor(Math.random() * letters.length)];
var userGuess =event.key;
var myGuess = userGuess;

//now build if/else loop

if (){

}

else if (){


}

else(){


}
}


///Still Need To Do:
// build function for resetGuessses.  To reset the game I need to build a function that resets the page when defaultGuessesLeft = 0 
//funciton resetGuesses (){
// 
//}
// figure out why the FUCK! my javascript wont link to my html
//cry
// 