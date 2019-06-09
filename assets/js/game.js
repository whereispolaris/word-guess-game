// PRESS SPACE BAR TO START
    // event listener for space bar

// Create fundamental variables
var selectedCountry;
var wordLetters;
var guessedLetter;
var wins = 0;
var losses = 0;
var lettersAlreadyGuessed = [];
var guessesLeft = 12;
var wordDisplay; // what renders on the index.html file right next to WORD:
var getWord = document.getElementById("appendWord"); // targets appendWord ID.

// CREATE FUNCTIONS 

// CREATE AN ARRAY FOR THE LETTERS
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var usedCountries = [];

 // Create array of countries (REMOVE ARRAYS WITH TWO WORDS)
var countries = ["china" , "india" , "indonesia" , "brazil" , "pakistan" , "nigeria" , "bangladesh" , "russia" , "japan" , "mexico" , "philippines" , "ethiopia" , "vietnam" , "egypt" , "iran" , "congo" , "germany" , "turkey" , "thailand" , "france" , "italy" , "burma", "tanzania" , "korea, south" , "spain" , "colombia" , "kenya" , "ukraine" , "argentina" , "algeria" , "poland" , "uganda" , "iraq" , "sudan" , "canada" , "morocco" , "afghanistan" , "malaysia" , "venezuela" , "peru" , "uzbekistan" , "nepal", "yemen" , "ghana" , "mozambique"];


// CHOOSE RANDOM OBJECT FROM countries[] ARRAY
var selectedCountry = countries[Math.floor(Math.random() * countries.length)];
console.log("The random country is " + selectedCountry);

// Count letters in selectedCountry
var letterCount = selectedCountry.length;
console.log(letterCount );


// Break down the selectedWord into individual letters:
wordLetters = Array.from(selectedCountry);
console.log(wordLetters);

// for every characted in letterCount, add underscode to h1 span 

// e.g "colombia" will be printed as _ _ _ _ _ _ _ _
    // run a loop that renders html tag that will display blanks (_)


// Ask user to guess letter
var guessedLetter = prompt("Choose letter");
console.log("you chose " + guessedLetter);

// find a way to see if letter is present in selectedCountry



// if letter matches selectedCountry, add it to wordDisplay

// if letter does not  match
    // Remove one guessesLeft;
