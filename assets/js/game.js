// PRESS SPACE BAR TO START
    // event listener for space bar

// Create fundamental variables
var selectedCountry;
var guessedLetter;
var wins = 0;
var losses = 0;
var lettersAlreadyGuessed = [];
var guessesLeft;

 // Create array of countries
var countries = ["china" , "india" , "united states" , "indonesia" , "brazil" , "pakistan" , "nigeria" , "bangladesh" , "russia" , "japan" , "mexico" , "philippines" , "ethiopia" , "vietnam" , "egypt" , "iran" , "congo" , "germany" , "turkey" , "thailand" , "france" , "united kingdom" , "italy" , "burma" , "south africa" , "tanzania" , "korea, south" , "spain" , "colombia" , "kenya" , "ukraine" , "argentina" , "algeria" , "poland" , "uganda" , "iraq" , "sudan" , "canada" , "morocco" , "afghanistan" , "malaysia" , "venezuela" , "peru" , "uzbekistan" , "nepal" , "saudi arabia" , "yemen" , "ghana" , "mozambique" , "north korea"]


// CHOOSE RANDOM OBJECT FROM countries[] ARRAY
var selectedCountry = countries[Math.floor(Math.random() * countries.length)];
console.log(selectedCountry);

// Count letters in selectedCountry
var letterCount = selectedCountry.valueOf();
console.log(letterCount);
console.log(letterCount.length);

// for every characted in letterCount, add underscode to h1 span 
// e.g "colombia" will be printed as _ _ _ _ _ _ _ _

//find a way to see if letter is present in selectedCountry

// if letter matches selectedCountry, add it to Word 
    //find position of letter in string
    // Remove underscore(s) and replace with letters
    // e.g guessedLetter = "o"; will update Word to _ o _ o _ _ _ _

// if letter does not  match
    // Remove one guessesLeft;

// // Append selectedCountry to Word: h1 span - THIS IS TEMPORARY
var getWord = document.getElementById("appendWord");
getWord.innerHTML = " " + selectedCountry;


// Ask user to guess letter
var guessedLetter = prompt("Choose letter");
console.log(guessedLetter);


// console.log(guessedLetter.includes(selectedCountry)); // false