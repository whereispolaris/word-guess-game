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
        // 2. Create a variable named "letterBtn" equal to $("<button>");
        letterBtn = $("<button>");
        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        letterBtn.addClass("letter-button");
        // 4. Then give each "letterBtn" an attribute called "data-letter", with a value eqaual to "letters[i]"
        letterBtn.attr("data-letter", letters[i]);
        // 5. Then give each "letterBtn" a text equal to "letters[i]".
        letterBtn.text(letters[i]);
        // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        $("#letterBank").append(letterBtn);
    }
}



$( document ).ready(function() {
    // function that chooses country from array
    selectedCountry();
    // Break down the selectedWord into individual letters
    wordLetters = Array.from(selectedCountry());
    countAndAppend();
    // Removes previous message
    $( "#message" ).empty();
    // Appends new message to div
    $( "#message" ).append( '<p>Press the button to start guessing!</p>' );
    renderLetterButtons();
});

// Guesses Left - SPAN FOR NOW
$("#guessesLeft").append(" " + guessesLeft);

$("#wins").append(" " + wins);
$("#losses").append(" " + losses);

// Write event that runs letterchec() when user presses key. 
function letterCheck() {
    // Temporary prompt for user to choose key 
    for (var i = 0; i < wordLetters.length; i++) {
        console.log(wordLetters[i]);
        // Check if guessedLetter matches letters in wordLetters array.
        if (wordLetters[i] === guessedLetter) {
        // Target ID="wordLetters[i]" and  replace with "A"
        $("#" + wordLetters[i]).replaceWith(wordLetters[i]);
        }
    }
}

// When User Presses letter, prompt shows up
function activatePrompt() {
    guessedLetter = prompt("Choose a letter");
    letterCheck();
}