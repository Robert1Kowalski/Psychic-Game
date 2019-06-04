var letters = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var randomLetter = "";
var winCount = 0;
var lossCount = 0;
var guessesLeft = 0;
var guessedLetter = [];
var defaultGuessesLeft = 9;

window.addEventListener("keypress", onKeyPress, false);
game(); 
function game(){
    guessedLetter = [];
    resetGuesses();
    generateRandomLetter();
    console.log(randomLetter) // just to check
}


function onKeyPress(){
 if (letters.includes(letters, 0) && guessedLetters.includes(letters,0) === false){
     guessedLetter.push(letter);
     printKeyPressed (letter);
     guessesLeft --;
     displayonScreen("guessesLeft")
 }
}

function generateRandomLetter(){
    randomLetter = letters[Math.floor(Math.random()*letters.length)]
}

function resetGuesses (){
    // guessesLeft = resetGuesses ??
    
}
///Still Need To Do:
// build function for resetGuessses.  To reset the game I need to build a function that resets the page when defaultGuessesLeft = 0 
//funciton resetGuesses (){
// 
//}
// figure out why the FUCK! my javascript wont link to my html
//cry
// 