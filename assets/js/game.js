// PRESS SPACE BAR TO START

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

// Count number of letters in chosen word and add underscores instead of letters.
function countAndAppend() {
    for (var i = 0; i < wordLetters.length; i++) {
        $("#wordDisplay").append('<span id="' + wordLetters[i] + '"> _ </span>');
    }
}

// Display letter buttons on the page
function renderLetterButtons() {
    for (var i = 0; i < letters.length; i++) {
        $("#letterBank").append('<button id="' + letters[i] + 'Button">' + letters[i] + '</button>');
    }
}

renderLetterButtons();

// Guesses Left - SPAN FOR NOW
$("#guessesLeft").append(" " + guessesLeft);

// Guessed Letters
    // Add function that pushes letters to usedLetters array. 

// On Page load, append "Press SPACE to begin"
$( "#message" ).append( '<p>Press the SPACE button to begin!</p>' );

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
    countAndAppend();
    // Removes "Press SPACE to begin" message
    $( "#message" ).empty();
    // Appends new message to div
    $( "#message" ).append( '<p>Press any letter to start guessing!</p>' );
    }
});

// Write event that runs letterchec() when user presses key. 
function letterCheck() {
    // Temporary prompt for user to choose key
    guessedLetter = prompt("Enter one letter to gueess"); 
    for (var i = 0; i < wordLetters.length; i++) {
        console.log(wordLetters[i]);
        // Check if guessedLetter matches letters in wordLetters array.
        if (wordLetters[i] === guessedLetter)
        // Target ID="wordLetters[i]" and  replace with "A"
        $("#" + wordLetters[i]).replaceWith(wordLetters[i]);
        else {
            guessesLeft - 1;
             
        }
    }
}

// letterCheck() will keep runing untill all letters are guessed

// function buttonPress() {
//     letterCheck();
//     if ()
// }