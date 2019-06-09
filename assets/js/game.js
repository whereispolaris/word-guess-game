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

 // Array of countries (REMOVE ARRAYS WITH TWO WORDS)
var countries = ["china" , "india" , "indonesia" , "brazil" , "pakistan" , "nigeria" , "bangladesh" , "russia" , "japan" , "mexico" , "philippines" , "ethiopia" , "vietnam" , "egypt" , "iran" , "congo" , "germany" , "turkey" , "thailand" , "france" , "italy" , "burma", "tanzania" , "panama" , "spain" , "colombia" , "kenya" , "ukraine" , "argentina" , "algeria" , "poland" , "uganda" , "iraq" , "sudan" , "canada" , "morocco" , "afghanistan" , "malaysia" , "venezuela" , "peru" , "uzbekistan" , "nepal", "yemen" , "ghana" , "mozambique"];

// Array of letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Countries that have been chosen already
var usedCountries = [];

// Letters that have been chosen already
var usedLetters = [];

// CHOOSE RANDOM OBJECT FROM countries[] ARRAY
var selectedCountry = countries[Math.floor(Math.random() * countries.length)];
console.log("The random country is " + selectedCountry);

// Testing one single country
selectedCountry = "colombia";

// Break down the selectedWord into individual letters:
wordLetters = Array.from(selectedCountry);
console.log(wordLetters);

// Run loop that creates span element with class="LETTER" and appends to <h2 class="wordDisplay"> element
for (var i = 0; i < wordLetters.length; i++) {
    $("#wordDisplay").append('<span class="' + wordLetters[i] + ' notGuessed">' + wordLetters[i] + '</span>');
    // console.log(spanElement);
       //ADD CLASSs
}

// document.write(spanElement);

// ===== ALTERNATIVE LOOP =======
// wordLetters.forEach( function(element){
//     console.log(element);
//     var spanElement = document.createElement("span");
//     var spanContent = document.createTextNode(element);
//     spanElement.appendChild(spanContent);
//     document.write(spanElement);
//     //ADD CLASS
// });

// Count letters in selectedCountry
var letterCount = selectedCountry.length;
console.log(letterCount );




// for every characted in letterCount, add underscode to h1 span 

// e.g "colombia" will be printed as _ _ _ _ _ _ _ _
    // run a loop that renders html tag that will display blanks (_)


// Ask user to guess letter
// var guessedLetter = prompt("Choose letter").toLowerCase();
// console.log("you chose " + guessedLetter);

// find a way to see if letter is present in selectedCountry



// if letter matches selectedCountry, add it to wordDisplay

// if letter does not  match
    // Remove one guessesLeft;
