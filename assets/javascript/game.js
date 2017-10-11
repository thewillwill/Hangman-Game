   // GLOBAL VARIABLES
   var message = document.getElementById("message");
   var wordPlaceHolder = document.getElementById("word-placeholder");
   var guessesText = document.getElementById("guesses-text");
   var lossesText = document.getElementById("losses");
   var tiesText = document.getElementById("ties");
   var guessedText = document.getElementById("guessed-letters");

   var winsText = document.getElementById("wins-text");
   var lossesText = document.getElementById("losses-text");

   var capitalCities = ['Berlin'];
   var capitalCity = "";
   var capitalCityChars = [];

   var placeholderChars = [];


   var guesses = 0;
   var guessedLetters = [];

   var numCorrectLetters = 0;
   var maxGuesses = 5;
   var blankLetter = '_';

   var wins = 0;
   var losses = 0;

   var newGame = true;

   // decide what to do with input
   document.onkeyup = function(event) {
       console.log("User Pressed: " + event.key)
       //reset text on screen
       resetMessages();
       if (newGame) {
           console.log("new game")
           //this is a new game
           resetVariables();
           chooseRandomCity(); //city stored in global variable
           writePlaceHolder(blankLetter); // write a line for each letter in the word
       } else {
           checkGuess(event.key);
       }
   };

   //pick a random city from the list
   function chooseRandomCity() {
       // pick a random city from array and make chars lower case
       capitalCity = capitalCities[Math.floor(Math.random() * capitalCities.length)].toLowerCase();
       capitalCityChars = capitalCity.split(''); //create an array of the characters
       //create a array of blank Characters of the same length of the capitalCity
       for (var i = capitalCityChars.length - 1; i >= 0; i--) {
           placeholderChars[i] = blankLetter;
       }
       console.log("capitalCity: " + capitalCity);
   }

   //check user guess against word
   function checkGuess(letter) {
      var letterFound = false;
       // check if letter not already tried
       if (guessedLetters.includes(letter)) {
           message.innerHTML = "You have already guessed that key";
       } else {
           //check letter exists in answer
           for (var i = 0; i < capitalCityChars.length; i++) {
               // console.log(letter + " equal to " + capitalCityChars[i]);
               if (capitalCityChars[i] == letter) {
                   letterFound = true;
                   numCorrectLetters++;
                   console.log(letter + " exists at pos: " + i);
                   writeLetter(i, letter); // write letter at position           
               }
           }

           guessedLetters.push(letter); //add that letter to the guessed array
           

           if (letterFound) {
               //don't increase guess count
           } else {
               // letter not found, display that letter as a guess
               guessedText.innerHTML = guessedText.innerHTML + " " + letter;
               guesses++;
               guessesText.innerHTML = guesses;
           }

           if (numCorrectLetters == capitalCity.length) {
               // all letters Gueses, user wins, game over
               wins ++;
               winsText.innerHTML = wins;
               message.innerHTML = "Nice, you are off to: " + capitalCity + " Press any key to start again";
               displayAnswer();
               newGame = true; //user won the game


           } else if (guesses == maxGuesses) {
               // all guesses used, game over
               losses ++;
               lossesText.innerHTML = losses;
               message.innerHTML = "Too Late, flight departed. Press Any key to start again";
               displayAnswer();
               newGame = true;
           }
       }

   }

   function resetMessages() {
       message.innerHTML = "";
   }

   function resetVariables() {
       console.log("Variables reset");
       newGame = false; //no longer a new game
       message.innerHTML = "";
       guesses = 0;
       guessedLetters = [];
       numCorrectLetters = 0;
       wordPlaceHolder.innerHTML = "";
       guessedText.innerHTML = "";
   }

   function writeLetter(letterPos, letter) {
       placeholderChars[letterPos] = letter;
       wordPlaceHolder.innerHTML = placeholderChars.join(" ");
   }

   function writePlaceHolder() {
       // console.log("writing placeholder"+ placeholderChars.join(' '));
       wordPlaceHolder.innerHTML = placeholderChars.join(" ");
   }

   function displayAnswer() {
       wordPlaceHolder.innerHTML = capitalCity;
   }