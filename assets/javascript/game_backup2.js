   // ----- todo ----
   // 1. remove spaces from cities X
   // 2. only accept letters -> REGEX?
   // 3. flight cancelled -> add stamp with absolute box or add icon
   // 4. 



   // GLOBAL VARIABLES
   var message = document.getElementById("message");
   var wordPlaceHolder = document.getElementById("word-placeholder");
   var guessesText = document.getElementById("guesses-text");
   var lossesText = document.getElementById("losses");
   var tiesText = document.getElementById("ties");
   var guessedText = document.getElementById("guessed-letters");
   var firstNameText = document.getElementById("first-name-text");
   var lastNameText = document.getElementById("last-name-text");

   var winsText = document.getElementById("wins-text");
   var lossesText = document.getElementById("losses-text");
   var capitalCities2 = [["Abu Dhabi","United Arab Emirates"],["Abuja","Nigeria"],["Accra","Ghana"],["Adamstown","Pitcairn"],["Addis Ababa","Ethiopia"],["Algiers","Algeria"],["Alofi","Niue"],["Amman","Jordan"],["Amsterdam","Netherlands"],["Andorra la Vella","Andorra"],["Ankara","Turkey"],["Antananarivo","Madagascar"],["Apia","Samoa"],["Ashgabat","Turkmenistan"],["Asmara","Eritrea"],["Astana","Kazakhstan"],["Asuncion","Paraguay"],["Athens","Greece"],["Avarua","Cook Islands"],["Baghdad","Iraq"],["Baku","Azerbaijan"],["Bamako","Mali"],["Bandar Seri Begawan","Brunei"],["Bangkok","Thailand"],["Bangui","Central African Republic"],["Banjul","Gambia"],["BasseTerre","Guadeloupe"],["Basseterre","Saint Kitts and Nevis"],["Beijing","China"],["Beirut","Lebanon"],["Belgrade","Serbia"],["Belmopan","Belize"],["Berlin","Germany"],["Bern","Switzerland"],["Bishkek","Kyrgyzstan"],["Bissau","Guinea-Bissau"],["Bogota","Colombia"],["Brasília","Brazil"],["Bratislava","Slovakia"],["Brazzaville","Republic of the Congo"],["Bridgetown","Barbados"],["Brussels","Belgium"],["Bucharest","Romania"],["Budapest","Hungary"],["Buenos Aires","Argentina"],["Bujumbura","Burundi"],["Cairo","Egypt"],["Canberra","Australia"],["Caracas","Venezuela"],["Castries","Saint Lucia"],["Cayenne","French Guiana"],["Charlotte Amalie","United States Virgin Islands"],["Chisiau","Moldova"],["Cockburn Town","Turks and Caicos Islands"],["Conakry","Guinea"],["Copenhagen","Denmark"],["Dakar","Senegal"],["Damascus","Syria"],["Dhaka","Bangladesh"],["Dili","East Timor (Timor-Leste)"],["Djibouti","Djibouti"],["Dodoma","Tanzania"],["Doha","Qatar"],["Douglas","Isle of Man"],["Dublin","Ireland"],["Dushanbe","Tajikistan"],["Edinburgh of the Seven Seas","Tristan da Cunha"],["El Aioun","Sahrawi Arab Democratic Republic [c]"],["Episkopi Cantonment","Akrotiri and Dhekelia"],["Flying Fish Cove","Christmas Island"],["FortdeFrance","Martinique"],["Freetown","Sierra Leone"],["Funafuti","Tuvalu"],["Gaborone","Botswana"],["George Town","Cayman Islands"],["Georgetown","Ascension Island"],["Georgetown","Guyana"],["Gibraltar","Gibraltar"],["Grozny","Chechnya"],["Guatemala City","Guatemala"],["Gustavia","Saint Barthélemy"],["Hagatna","Guam"],["Hamilton","Bermuda"],["Hanga Roa","Easter Island"],["Hanoi","Vietnam"],["Harare","Zimbabwe"],["Hargeisa","Somaliland"],["Havana","Cuba"],["Helsinki","Finland"],["Hong Kong","Hong Kong"],["Honiara","Solomon Islands"],["Islamabad","Pakistan"],["Jakarta","Indonesia"],["Jamestown","Saint Helena"],["Jerusalem","Israel"],["Juba","South Sudan"],["Kabul","Afghanistan"],["Kampala","Uganda"],["Kathmandu","Nepal"],["Khartoum","Sudan"],["Kiev","Ukraine"],["Kigali","Rwanda"],["King Edward Point","South Georgia and the South Sandwich Islands"],["Kingston","Jamaica"],["Kingston","Norfolk Island"],["Kingstown","Saint Vincent and the Grenadines"],["Kinshasa","Democratic Republic of the Congo"],["Kuala Lumpur","Malaysia"],["Kuwait City","Kuwait"],["Libreville","Gabon"],["Lilongwe","Malawi"],["Lima","Peru"],["Lisbon","Portugal"],["Ljubljana","Slovenia"],["Lomé","Togo"],["London","United Kingdom"],["Luanda","Angola"],["Lusaka","Zambia"],["Luxembourg","Luxembourg"],["Madrid","Spain"],["Majuro","Marshall Islands"],["Malabo","Equatorial Guinea"],["Male","Maldives"],["Mamoudzou","Mayotte"],["Managua","Nicaragua"],["Manama","Bahrain"],["Manila","Philippines"],["Maputo","Mozambique"],["Marigot","Saint Martin"],["Maseru","Lesotho"],["Mata-Utu","Wallis and Futuna"],["Mbabane","Swaziland"],["Mexico City","Mexico"],["Minsk","Belarus"],["Mogadishu","Somalia"],["Monaco","Monaco"],["Monrovia","Liberia"],["Montevideo","Uruguay"],["Moroni","Comoros"],["Moscow","Russia"],["Muscat","Oman"],["Nairobi","Kenya"],["Nassau","Bahamas"],["Naypyidaw","Myanmar"],["NDjamena","Chad"],["New Delhi","India"],["Ngerulmud","Palau"],["Niamey","Niger"],["Nicosia","Cyprus"],["Nicosia","Northern Cyprus"],["Nouakchott","Mauritania"],["Nouméa","New Caledonia"],["Nukualofa","Tonga"],["Nuuk","Greenland"],["Oranjestad","Aruba"],["Oslo","Norway"],["Ottawa","Canada"],["Ouagadougou","Burkina Faso"],["Pago Pago","American Samoa"],["Palikir","Federated States of Micronesia"],["Panama City","Panama"],["Papeete","French Polynesia"],["Paramaribo","Suriname"],["Paris","France"],["Philipsburg","Sint Maarten"],["Phnom Penh","Cambodia"],["Plymouth","Montserrat"],["Podgorico","Montenegro"],["Port Louis","Mauritius"],["Port Moresby","Papua New Guinea"],["Port Vila","Vanuatu"],["PortauPrince","Haiti"],["Port of Spain","Trinidad and Tobago"],["Porto-Novo","Benin"],["Prague","Czech Republic"],["Praia","Cape Verde"],["Pretoria","South Africa"],["Pristina","Kosovo"],["Pyongyang","North Korea"],["Quito","Ecuador"],["Rabat","Morocco"],["Reykjavík","Iceland"],["Riga","Latvia"],["Riyadh","Saudi Arabia"],["Road Town","British Virgin Islands"],["Rome","Italy"],["Roseau","Dominica"],["Saint-Denis","Réunion"],["Saipan","Northern Mariana Islands"],["San Jose","Costa Rica"],["San Juan","Puerto Rico"],["San Marino","San Marino"],["San Salvador","El Salvador"],["Aden","Yemen"],["Santiago","Chile"],["Santo Domingo","Dominican Republic"],["Sao Tome","São Tomé and Príncipe"],["Sarajevo","Bosnia and Herzegovina"],["Seoul","South Korea"],["Singapore","Singapore"],["Skopje","Republic of Macedonia"],["Sofia","Bulgaria"],["Sri Jayawardenepura","Sri Lanka"],["St Georges","Grenada"],["St Helier","Jersey"],["St Johns","Antigua and Barbuda"],["St Peter Port","Guernsey"],["St Pierre","Saint Pierre and Miquelon"],["Stanley","Falkland Islands"],["Stepanakert","Nagorno-Karabakh Republic"],["Stockholm","Sweden"],["La Paz","Bolivia"],["Sukhumi","Abkhazia"],["Suva","Fiji"],["Taipei","Taiwan"],["Tallinn","Estonia"],["Tarawa","Kiribati"],["Tashkent","Uzbekistan"],["Tbilisi","Georgia"],["Tegucigalpa","Honduras"],["Tehran","Iran"],["Thimphu","Bhutan"],["Tirana","Albania"],["Tiraspol","Transnistria"],["Tokyo","Japan"],["Torshavn","Faroe Islands"],["Tripoli","Libya"],["Tskhinvali","South Ossetia"],["Tunis","Tunisia"],["Ulaanbaatar","Mongolia"],["Vaduz","Liechtenstein"],["Valletta","Malta"],["The Valley","Anguilla"],["Vatican City","Vatican City"],["Victoria","Seychelles"],["Vienna","Austria"],["Vientiane","Laos"],["Vilnius","Lithuania"],["Warsaw","Poland"],["Washington","United States"],["Wellington","New Zealand"],["West Island","Cocos (Keeling) Islands"],["Willemstad","Curaçao"],["Windhoek","Namibia"],["Yamoussoukro","Côte d Ivoire"],["Yaounde","Cameroon"],["Yaren","Nauru"],["Yerevan","Armenia"],["Zagreb","Croatia"]];
   var capitalCity = "";
   var capitalCityChars = [];
   var country ="";
   var placeholderChars = [];


   var guesses = 0;
   var guessedLetters = [''];

   var numCorrectLetters = 0;
   var maxGuesses = 8;
   var blankLetter = '_';

   var wins = 0;
   var losses = 0;

   var newGame = true;
   var nameNotEntered = true;

   var spaceHere = "-";

   function enterName() {
       //put first name and last name in
       console.log("First: " + document.getElementById('firstNameInput').value + "Last: " + document.getElementById('lastNameInput').value);
       firstNameText.innerHTML = document.getElementById('firstNameInput').value;
       lastNameText.innerHTML = document.getElementById('lastNameInput').value;

       //hide the instructions and name input
       console.log("Hide the Jumbotron")
       document.getElementById('jumbotron-visible').id = "jumbotron-hidden";
       document.getElementById('ticket-container-hidden').id = "ticket-container-visible";
       nameNotEntered = false;
       setupNewGame()
   }

   function setupNewGame() {
       console.log("new game")

       //this is a new game

       document.getElementById('stamp-visible').id = "stamp-hidden";

       resetVariables();
       chooseRandomCity(); //city stored in global variable
       writePlaceHolder(); // write a line for each letter in the word
       resetMessages(); //reset message to user with instructions 

   }

   // decide what to do with input
   document.onkeyup = function(event) {
       var keycode = event.keyCode;
       console.log("User Pressed: " + event.key + " keycode " + keycode);
           //if user hasn't submitted name don't do anything with Input
           if (nameNotEntered) {
               return; //wait for user to submit name
           } else if (newGame) {
               setupNewGame();
           } else {
                   //check if valid letter entered on keyboard
       if (keycode < 65 || keycode > 90) {
           message.innerHTML = "Please choose a letter from a-z on the keyboard";
           return;
       } else { //user entered a valid letter
               checkGuess(event.key); //check if the letter exists in the word
           }

       }
   };

   //pick a random city from the list
   function chooseRandomCity() {
       // pick a random city from array and make chars lower case
       randomIndex = Math.floor(Math.random() * capitalCities.length);
       capitalCity = capitalCities[randomIndex][0].toLowerCase(); //remove spaces
       country = capitalCities[randomIndex][1];
       capitalCityChars = capitalCity.split(''); //create an array of the characters
       //create a array of blank Characters of the same length of the capitalCity
       for (var i = capitalCityChars.length - 1; i >= 0; i--) {
            //check for space character and display, else display blank line

            console.log("chars: " + capitalCityChars[i]);

            var spaceChar = /\s/g;
            if(capitalCityChars[i].match(spaceChar)) {
                placeholderChars[i] = spaceHere;
                 console.log("found a space at " + i);
            }
            else {
            placeholderChars[i] = blankLetter;
           }
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
               if (capitalCityChars[i] == spaceHere) { //check for space character and display it after first guess
                  writeLetter(i, " ");
               }if (capitalCityChars[i] == letter) {
                   letterFound = true;
                   numCorrectLetters++;
                   console.log(letter + " exists at pos: " + i);
                   writeLetter(i, letter); // write letter at position           
               }

               else if (capitalCityChars[i] == letter) {
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
               // letter not found, add that letter as a guess
               // remove prevailing blankLetter marker
               guessedText.innerHTML = (guessedText.innerHTML + " " + letter).replace(blankLetter, "");
               guesses++;
               guessesText.innerHTML = guesses; //display new number of guesses to user
           }
           //check if they have guessed all of the letters (excluding spaces)
           if (numCorrectLetters == capitalCity.replace(" ", "").length) {
               // all letters Gueses, user wins, game over
               wins++;
               winsText.innerHTML = wins;
               message.innerHTML = "Nice, you are off to the capital of  " + country + ". Press any key to start again";
               displayAnswer();
               newGame = true; //user won the game


           } else if (guesses == maxGuesses) {
               // all guesses used, game over
               losses++;
               lossesText.innerHTML = losses;
               message.innerHTML = "Too Late, you missed your flight to " + country + ".  Press Any key to start again";
               document.getElementById('stamp-hidden').id = "stamp-visible";
               displayAnswer();
               newGame = true;
           }
       }

   }

   function resetMessages() {
       message.innerHTML = "Guess the name of the destination city by typing one letter at a time. You have " + maxGuesses + " total guesses before your flight leaves";
   }

   function resetVariables() {
       console.log("Variables reset");
       newGame = false; //no longer a new game
       message.innerHTML = "";
       guesses = 0;
       guessedLetters = [""];
       numCorrectLetters = 0;
       placeholderChars = [""];
       wordPlaceHolder.innerHTML = "";
       guessedText.innerHTML = blankLetter;
   }

   function writeLetter(letterPos, letter) {
       placeholderChars[letterPos] = letter;
       wordPlaceHolder.innerHTML = placeholderChars.join("");
   }

   function writePlaceHolder() {
       console.log("writing placeholder"+ placeholderChars.join(""));
       wordPlaceHolder.innerHTML = placeholderChars.join("");
   }

   function displayAnswer() {
       wordPlaceHolder.innerHTML = capitalCity;
   }