// PRESS SPACE BAR TO START
    // event listener for space bar

// Create fundamental variables
// var selectedCountry;
var wordLetters;
var guessedLetter;
var wins = 0;
var losses = 0;
var lettersAlreadyGuessed = [];
var guessesLeft = 12;
var wordDisplay; // what renders on the index.html file right next to WORD:
var getWord = document.getElementById("appendWord"); // targets appendWord ID.

 // Array of countries (REMOVE ARRAYS WITH TWO WORDS)
var countries = ["china" , "india" , "indonesia" , "brazil" , "pakistan" , "nigeria" , "bangladesh" , "russia" , "japan" , "mexico" , "philippines" , "ethiopia" , "vietnam" , "egypt" , "iran" , "congo" , "germany" , "turkey" , "thailand" , "france" , "italy" , "burma", "tanzania" , "panama" , "spain" , "colombia" , "kenya" , "ukraine" , "argentina" , "algeria" , "poland" , "uganda" , "iraq" , "sudan" , "canada" , "morocco" , "afghanistan" , "malaysia" , "venezuela" , "peru" , "uzbekistan" , "nepal", "yemen" , "ghana" , "mozambique"];

// Array of letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Countries that have been chosen already
var usedCountries = [];

// Letters that have been chosen already
var usedLetters = [];

// CHOOSE RANDOM OBJECT FROM countries[] ARRAY
function selectedCountry() {
    return countries[Math.floor(Math.random() * countries.length)];
    // console.log("The random country is " + selectedCountry);
}

function countAndAppend() {
    for (var i = 0; i < wordLetters.length; i++) {
        // Checks if User guess is correct
        if (wordLetters[i] === guessedLetter) {
            // if the user guess is correct, render the letter instead of the underscore. 
            $("#wordDisplay").append('<span id="' + wordLetters[i] + '">' + wordLetters[i] + '</span>')
        } 
        else {
            // If guess is wrong, all the letters stay in underscores
            $("#wordDisplay").append('<span id="' + wordLetters[i] + '"> _ </span>');

        }
    }
}

// User Presses Space
$(window).keypress(function (e) {
    if (e.key === ' ' || e.key === 'Spacebar') {
      // ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
      e.preventDefault()
      console.log('Space pressed')
      // Select Country from Array
      selectedCountry();
      // Break down the selectedWord into individual letters
      wordLetters = Array.from(selectedCountry());
      // Ask user to guess letter
      guessedLetter = prompt("Choose letter").toLowerCase();
      console.log("you chose " + guessedLetter);
      countAndAppend();
    }
})


