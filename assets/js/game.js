// PRESS SPACE BAR TO START
    // event listener for space bar

// Create fundamental variables
var selectedCountry;
var guessedLetter;
var wins = 0;
var losses = 0;
var lettersAlreadyGuessed = [];

 // Create array of countries
var countries = ["china" , "india" , "united states" , "indonesia" , "brazil" , "pakistan" , "nigeria" , "bangladesh" , "russia" , "japan" , "mexico" , "philippines" , "ethiopia" , "vietnam" , "egypt" , "iran" , "congo" , "germany" , "turkey" , "thailand" , "france" , "united kingdom" , "italy" , "burma" , "south africa" , "tanzania" , "korea, south" , "spain" , "colombia" , "kenya" , "ukraine" , "argentina" , "algeria" , "poland" , "uganda" , "iraq" , "sudan" , "canada" , "morocco" , "afghanistan" , "malaysia" , "venezuela" , "peru" , "uzbekistan" , "nepal" , "saudi arabia" , "yemen" , "ghana" , "mozambique" , "north korea"]


// CHOOSE RANDOM OBJECT FROM countries[] ARRAY
var selectedCountry = countries[Math.floor(Math.random() * countries.length)];
console.log(selectedCountry);

// Count letters in selectedCountry
var letterCount = selectedCountry.valueOf();
console.log(letterCount.length);

// for every characted in letterCount, add underscode to h1 span


// // Append selectedCountry to Word: h1 span
var getWord = document.getElementById("appendWord");
getWord.innerHTML = " " + selectedCountry;


// Ask user to guess letter
var guessedLetter = prompt("Choose letter");
console.log(guessedLetter);


// console.log(guessedLetter.includes(selectedCountry)); // false