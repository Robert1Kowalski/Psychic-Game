var letters = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var win = 0;
var losses = 0;
var GuessLeft = 9; // win and losses at 0 b/c it is the beginning of game

document.onkeyup = function () { // one giant function
                                // (1) IF the user input === the psychic guess, win total ++
                                // (2)  if guessesLeft hits zero, add one to the loss column;
                                // (3)  anything else subtracts one from guessesleft 



// need to build varaibles to hold the psychic value and user input value (event property?)
var psychicGuess = letters[Math.floor(Math.random() * letters.length)];
var userGuess =event.key;
var myGuess = userGuess; //why is it shadowing out my var names?

//now build if/else loop

//step 1 above 
if (userGuess = letters[Math.floor(Math.random() * letters.length )]){

if (userGuess === letters){
    wins++;
}
}
//step 2
else if (GuessLeft == 0){
    losses++;
    GuessesLeft = 9;
}
//step 3
else {
    GuessesLeft --;


}
}


///Still Need To Do:
// Figure out how to build reset into my four loop. ex: if (userGuess = letters){
    // wins++ ()"}"
    // else if (){
    // guessesLeft = 0
    // resestHTML (or something like that)
    
// figure out why the FUCK! my javascript wont link to my html
//cry
// 