   // ----- todo ----
   // 1. Use document ready listener then move javascript to bottom of html


   //==========================================================
   // Variables
   //==========================================================

   var message1 = document.getElementById("message1");
   var message2 = document.getElementById("message2");
   var wordPlaceHolder = document.getElementById("word-placeholder");
   var guessesText = document.getElementById("guesses-text");
   var winsText = document.getElementById("wins-text");
   var lossesText = document.getElementById("losses-text");
   var tiesText = document.getElementById("ties");
   var guessedText = document.getElementById("guessed-letters");
   var firstNameText = document.getElementById("first-name-text");
   var lastNameText = document.getElementById("last-name-text");
   var boardingTimeText = document.getElementById("boarding-time-text");
   var airlineTitle = document.getElementById("airline-title");



   //2D Array of Capital Cities and Countries
   var worldCapitals = [
       ["Abu Dhabi", "United Arab Emirates"],
       ["Abuja", "Nigeria"],
       ["Accra", "Ghana"],
       ["Adamstown", "Pitcairn"],
       ["Addis Ababa", "Ethiopia"],
       ["Algiers", "Algeria"],
       ["Alofi", "Niue"],
       ["Amman", "Jordan"],
       ["Amsterdam", "Netherlands"],
       ["Andorra la Vella", "Andorra"],
       ["Ankara", "Turkey"],
       ["Antananarivo", "Madagascar"],
       ["Apia", "Samoa"],
       ["Ashgabat", "Turkmenistan"],
       ["Asmara", "Eritrea"],
       ["Astana", "Kazakhstan"],
       ["Asuncion", "Paraguay"],
       ["Athens", "Greece"],
       ["Avarua", "Cook Islands"],
       ["Baghdad", "Iraq"],
       ["Baku", "Azerbaijan"],
       ["Bamako", "Mali"],
       ["Bandar Seri Begawan", "Brunei"],
       ["Bangkok", "Thailand"],
       ["Bangui", "Central African Republic"],
       ["Banjul", "Gambia"],
       ["BasseTerre", "Guadeloupe"],
       ["Basseterre", "Saint Kitts and Nevis"],
       ["Beijing", "China"],
       ["Beirut", "Lebanon"],
       ["Belgrade", "Serbia"],
       ["Belmopan", "Belize"],
       ["Berlin", "Germany"],
       ["Bern", "Switzerland"],
       ["Bishkek", "Kyrgyzstan"],
       ["Bissau", "Guinea-Bissau"],
       ["Bogota", "Colombia"],
       ["Brasília", "Brazil"],
       ["Bratislava", "Slovakia"],
       ["Brazzaville", "Republic of the Congo"],
       ["Bridgetown", "Barbados"],
       ["Brussels", "Belgium"],
       ["Bucharest", "Romania"],
       ["Budapest", "Hungary"],
       ["Buenos Aires", "Argentina"],
       ["Bujumbura", "Burundi"],
       ["Cairo", "Egypt"],
       ["Canberra", "Australia"],
       ["Caracas", "Venezuela"],
       ["Castries", "Saint Lucia"],
       ["Cayenne", "French Guiana"],
       ["Charlotte Amalie", "United States Virgin Islands"],
       ["Chisiau", "Moldova"],
       ["Cockburn Town", "Turks and Caicos Islands"],
       ["Conakry", "Guinea"],
       ["Copenhagen", "Denmark"],
       ["Dakar", "Senegal"],
       ["Damascus", "Syria"],
       ["Dhaka", "Bangladesh"],
       ["Dili", "East Timor (Timor-Leste)"],
       ["Djibouti", "Djibouti"],
       ["Dodoma", "Tanzania"],
       ["Doha", "Qatar"],
       ["Douglas", "Isle of Man"],
       ["Dublin", "Ireland"],
       ["Dushanbe", "Tajikistan"],
       ["Edinburgh of the Seven Seas", "Tristan da Cunha"],
       ["El Aioun", "Sahrawi Arab Democratic Republic [c]"],
       ["Episkopi Cantonment", "Akrotiri and Dhekelia"],
       ["Flying Fish Cove", "Christmas Island"],
       ["FortdeFrance", "Martinique"],
       ["Freetown", "Sierra Leone"],
       ["Funafuti", "Tuvalu"],
       ["Gaborone", "Botswana"],
       ["George Town", "Cayman Islands"],
       ["Georgetown", "Ascension Island"],
       ["Georgetown", "Guyana"],
       ["Gibraltar", "Gibraltar"],
       ["Grozny", "Chechnya"],
       ["Guatemala City", "Guatemala"],
       ["Gustavia", "Saint Barthélemy"],
       ["Hagatna", "Guam"],
       ["Hamilton", "Bermuda"],
       ["Hanga Roa", "Easter Island"],
       ["Hanoi", "Vietnam"],
       ["Harare", "Zimbabwe"],
       ["Hargeisa", "Somaliland"],
       ["Havana", "Cuba"],
       ["Helsinki", "Finland"],
       ["Hong Kong", "Hong Kong"],
       ["Honiara", "Solomon Islands"],
       ["Islamabad", "Pakistan"],
       ["Jakarta", "Indonesia"],
       ["Jamestown", "Saint Helena"],
       ["Jerusalem", "Israel"],
       ["Juba", "South Sudan"],
       ["Kabul", "Afghanistan"],
       ["Kampala", "Uganda"],
       ["Kathmandu", "Nepal"],
       ["Khartoum", "Sudan"],
       ["Kiev", "Ukraine"],
       ["Kigali", "Rwanda"],
       ["King Edward Point", "South Georgia and the South Sandwich Islands"],
       ["Kingston", "Jamaica"],
       ["Kingston", "Norfolk Island"],
       ["Kingstown", "Saint Vincent and the Grenadines"],
       ["Kinshasa", "Democratic Republic of the Congo"],
       ["Kuala Lumpur", "Malaysia"],
       ["Kuwait City", "Kuwait"],
       ["Libreville", "Gabon"],
       ["Lilongwe", "Malawi"],
       ["Lima", "Peru"],
       ["Lisbon", "Portugal"],
       ["Ljubljana", "Slovenia"],
       ["Lomé", "Togo"],
       ["London", "United Kingdom"],
       ["Luanda", "Angola"],
       ["Lusaka", "Zambia"],
       ["Luxembourg", "Luxembourg"],
       ["Madrid", "Spain"],
       ["Majuro", "Marshall Islands"],
       ["Malabo", "Equatorial Guinea"],
       ["Male", "Maldives"],
       ["Mamoudzou", "Mayotte"],
       ["Managua", "Nicaragua"],
       ["Manama", "Bahrain"],
       ["Manila", "Philippines"],
       ["Maputo", "Mozambique"],
       ["Marigot", "Saint Martin"],
       ["Maseru", "Lesotho"],
       ["Mata-Utu", "Wallis and Futuna"],
       ["Mbabane", "Swaziland"],
       ["Mexico City", "Mexico"],
       ["Minsk", "Belarus"],
       ["Mogadishu", "Somalia"],
       ["Monaco", "Monaco"],
       ["Monrovia", "Liberia"],
       ["Montevideo", "Uruguay"],
       ["Moroni", "Comoros"],
       ["Moscow", "Russia"],
       ["Muscat", "Oman"],
       ["Nairobi", "Kenya"],
       ["Nassau", "Bahamas"],
       ["Naypyidaw", "Myanmar"],
       ["NDjamena", "Chad"],
       ["New Delhi", "India"],
       ["Ngerulmud", "Palau"],
       ["Niamey", "Niger"],
       ["Nicosia", "Cyprus"],
       ["Nicosia", "Northern Cyprus"],
       ["Nouakchott", "Mauritania"],
       ["Nouméa", "New Caledonia"],
       ["Nukualofa", "Tonga"],
       ["Nuuk", "Greenland"],
       ["Oranjestad", "Aruba"],
       ["Oslo", "Norway"],
       ["Ottawa", "Canada"],
       ["Ouagadougou", "Burkina Faso"],
       ["Pago Pago", "American Samoa"],
       ["Palikir", "Federated States of Micronesia"],
       ["Panama City", "Panama"],
       ["Papeete", "French Polynesia"],
       ["Paramaribo", "Suriname"],
       ["Paris", "France"],
       ["Philipsburg", "Sint Maarten"],
       ["Phnom Penh", "Cambodia"],
       ["Plymouth", "Montserrat"],
       ["Podgorico", "Montenegro"],
       ["Port Louis", "Mauritius"],
       ["Port Moresby", "Papua New Guinea"],
       ["Port Vila", "Vanuatu"],
       ["PortauPrince", "Haiti"],
       ["Port of Spain", "Trinidad and Tobago"],
       ["Porto-Novo", "Benin"],
       ["Prague", "Czech Republic"],
       ["Praia", "Cape Verde"],
       ["Pretoria", "South Africa"],
       ["Pristina", "Kosovo"],
       ["Pyongyang", "North Korea"],
       ["Quito", "Ecuador"],
       ["Rabat", "Morocco"],
       ["Reykjavík", "Iceland"],
       ["Riga", "Latvia"],
       ["Riyadh", "Saudi Arabia"],
       ["Road Town", "British Virgin Islands"],
       ["Rome", "Italy"],
       ["Roseau", "Dominica"],
       ["Saint-Denis", "Réunion"],
       ["Saipan", "Northern Mariana Islands"],
       ["San Jose", "Costa Rica"],
       ["San Juan", "Puerto Rico"],
       ["San Marino", "San Marino"],
       ["San Salvador", "El Salvador"],
       ["Aden", "Yemen"],
       ["Santiago", "Chile"],
       ["Santo Domingo", "Dominican Republic"],
       ["Sao Tome", "São Tomé and Príncipe"],
       ["Sarajevo", "Bosnia and Herzegovina"],
       ["Seoul", "South Korea"],
       ["Singapore", "Singapore"],
       ["Skopje", "Republic of Macedonia"],
       ["Sofia", "Bulgaria"],
       ["Sri Jayawardenepura", "Sri Lanka"],
       ["St Georges", "Grenada"],
       ["St Helier", "Jersey"],
       ["St Johns", "Antigua and Barbuda"],
       ["St Peter Port", "Guernsey"],
       ["St Pierre", "Saint Pierre and Miquelon"],
       ["Stanley", "Falkland Islands"],
       ["Stepanakert", "Nagorno-Karabakh Republic"],
       ["Stockholm", "Sweden"],
       ["La Paz", "Bolivia"],
       ["Sukhumi", "Abkhazia"],
       ["Suva", "Fiji"],
       ["Taipei", "Taiwan"],
       ["Tallinn", "Estonia"],
       ["Tarawa", "Kiribati"],
       ["Tashkent", "Uzbekistan"],
       ["Tbilisi", "Georgia"],
       ["Tegucigalpa", "Honduras"],
       ["Tehran", "Iran"],
       ["Thimphu", "Bhutan"],
       ["Tirana", "Albania"],
       ["Tiraspol", "Transnistria"],
       ["Tokyo", "Japan"],
       ["Torshavn", "Faroe Islands"],
       ["Tripoli", "Libya"],
       ["Tskhinvali", "South Ossetia"],
       ["Tunis", "Tunisia"],
       ["Ulaanbaatar", "Mongolia"],
       ["Vaduz", "Liechtenstein"],
       ["Valletta", "Malta"],
       ["The Valley", "Anguilla"],
       ["Vatican City", "Vatican City"],
       ["Victoria", "Seychelles"],
       ["Vienna", "Austria"],
       ["Vientiane", "Laos"],
       ["Vilnius", "Lithuania"],
       ["Warsaw", "Poland"],
       ["Washington", "United States"],
       ["Wellington", "New Zealand"],
       ["West Island", "Cocos (Keeling) Islands"],
       ["Willemstad", "Curaçao"],
       ["Windhoek", "Namibia"],
       ["Yamoussoukro", "Côte d Ivoire"],
       ["Yaounde", "Cameroon"],
       ["Yaren", "Nauru"],
       ["Yerevan", "Armenia"],
       ["Zagreb", "Croatia"]
   ];

   var usaCapitals = [
       ["Montgomery", "Alabama"],
       ["Juneau", "Alaska"],
       ["Phoenix", "Arizona"],
       ["Little Rock", "Arkansas"],
       ["Sacramento", "California"],
       ["Denver", "Colorado"],
       ["Hartford", "Connecticut"],
       ["Dover", "Delaware"],
       ["Tallahassee", "Florida"],
       ["Atlanta", "Georgia"],
       ["Honolulu", "Hawaii"],
       ["Boise", "Idaho"],
       ["Springfield", "Illinois"],
       ["Indianapolis", "Indiana"],
       ["Des Moines", "Iowa"],
       ["Topeka", "Kansas"],
       ["Frankfort", "Kentucky"],
       ["Baton Rouge", "Louisiana"],
       ["Augusta", "Maine"],
       ["Annapolis", "Maryland"],
       ["Boston", "Massachusetts"],
       ["Lansing", "Michigan"],
       ["Saint Paul", "Minnesota"],
       ["Jackson", "Mississippi"],
       ["Jefferson City", "Missouri"],
       ["Helena", "Montana"],
       ["Lincoln", "Nebraska"],
       ["Carson City", "Nevada"],
       ["Concord", "New Hampshire"],
       ["Trenton", "New Jersey"],
       ["Santa Fe", "New Mexico"],
       ["Albany", "New York"],
       ["Raleigh", "North Carolina"],
       ["Bismarck", "North Dakota"],
       ["Columbus", "Ohio"],
       ["Oklahoma City", "Oklahoma"],
       ["Salem", "Oregon"],
       ["Harrisburg", "Pennsylvania"],
       ["Providence", "Rhode Island"],
       ["Columbia", "South Carolina"],
       ["Pierre", "South Dakota"],
       ["Nashville", "Tennessee"],
       ["Austin", "Texas"],
       ["Salt Lake City", "Utah"],
       ["Montpelier", "Vermont"],
       ["Richmond", "Virginia"],
       ["Olympia", "Washington"],
       ["Charleston", "West Virginia"],
       ["Madison", "Wisconsin"],
       ["Cheyenne", "Wyoming"],
       ["Juneau", "Alaska"],
       ["Phoenix", "Arizona"],
       ["Little Rock", "Arkansas"],
       ["Sacramento", "California"],
       ["Denver", "Colorado"],
       ["Hartford", "Connecticut"],
       ["Dover", "Delaware"],
       ["Tallahassee", "Florida"],
       ["Atlanta", "Georgia"],
       ["Honolulu", "Hawaii"],
       ["Boise", "Idaho"],
       ["Springfield", "Illinois"],
       ["Indianapolis", "Indiana"],
       ["Des Moines", "Iowa"],
       ["Topeka", "Kansas"],
       ["Frankfort", "Kentucky"],
       ["Baton Rouge", "Louisiana"],
       ["Augusta", "Maine"],
       ["Annapolis", "Maryland"],
       ["Boston", "Massachusetts"],
       ["Lansing", "Michigan"],
       ["Saint Paul", "Minnesota"],
       ["Jackson", "Mississippi"],
       ["Jefferson City", "Missouri"],
       ["Helena", "Montana"],
       ["Lincoln", "Nebraska"],
       ["Carson City", "Nevada"],
       ["Concord", "New Hampshire"],
       ["Trenton", "New Jersey"],
       ["Santa Fe", "New Mexico"],
       ["Albany", "New York"],
       ["Raleigh", "North Carolina"],
       ["Bismarck", "North Dakota"],
       ["Columbus", "Ohio"],
       ["Oklahoma City", "Oklahoma"],
       ["Salem", "Oregon"],
       ["Harrisburg", "Pennsylvania"],
       ["Providence", "Rhode Island"],
       ["Columbia", "South Carolina"],
       ["Pierre", "South Dakota"],
       ["Nashville", "Tennessee"],
       ["Austin", "Texas"],
       ["Salt Lake City", "Utah"],
       ["Montpelier", "Vermont"],
       ["Richmond", "Virginia"],
       ["Olympia", "Washington"],
       ["Charleston", "West Virginia"],
       ["Madison", "Wisconsin"],
       ["Cheyenne", "Wyoming"]
   ];

   var capitalCities = worldCapitals; //default to world capitals

   var capitalCity = ""; //store the randomly selected Capital
   var capitalCityChars = []; //store each character of the capital in an array
   var country = ""; //store the country of that capital
   var placeholderChars = []; //create an empty array for the placeholder characters '_'
   var blankLetter = '_'; //static variable for the placeholder array
   var spaceHere = "-"; //used to represent a space character

   // active game variables
   var guesses = 0;
   var guessedLetters = ['']; //store the letters the user has already guessed (if incorrect)
   var numCorrectLetters = 0; //use this to calculate when the user has guessed all letters

   // game rules
   var maxGuesses = 9; // the total incorrect guesses before the game is over
   var currentTime;

   var wins = 0;
   var losses = 0;

   //game & page visibility states

   var nameNotEntered = true; //used to check the game state at very beginning
   var stampVisible = false; //used to check if the "Flight Cancelled" Stamp is showing
   var clockHidden = true;
   var newGame = true; //used to check the game state
   var boardingTimeHour = Math.floor(Math.random() * 23 + 1); //this could be made a random number in the future
   var worldCapitalAirlines = true;


   //==========================================================
   // FUNCTIONS
   //==========================================================





   // Write the  first name and last name on the ticket
   //===================================================
   function enterName() {

       console.log("First: " + document.getElementById('firstNameInput').value + "Last: " + document.getElementById('lastNameInput').value);
       firstNameText.innerHTML = document.getElementById('firstNameInput').value;
       lastNameText.innerHTML = document.getElementById('lastNameInput').value;

       //hide the instructions and name input form
       console.log("Hide the Jumbotron")
       document.getElementById('jumbotron-visible').id = "jumbotron-hidden";
       document.getElementById('ticket-container-hidden').id = "ticket-container-visible";

       //so we know to start the game on keyboard input
       nameNotEntered = false;
       setupNewGame()
   }



   // Decide what to do with keyboard input
   //===================================================
   document.onkeyup = function(event) {
       var keycode = event.keyCode;
       //console.log("User Pressed: " + event.key + " keycode " + keycode);
       //if user hasn't submitted name don't do anything with input
       if (nameNotEntered) {
           return; //wait for user to submit name
       } else if (newGame) {
           setupNewGame();
       } else {
           //check if valid letter entered on keyboard
           if (keycode < 65 || keycode > 90) {
               message1.innerHTML = "Please choose a letter from a-z on the keyboard";
               return;
           } else { //user entered a valid letter
               checkGuess(event.key); //check if the letter exists in the word
           }

       }
   };


   // Set up the visible elements and set variables 
   // for a new round of the game
   //===================================================
   function setupNewGame() {
       console.log("new game")
       //this is a new game
       resetVariables();
       chooseRandomCity(); //city stored in global variable
       writePlaceHolder(); // write a '_' for each letter in the word
       resetMessages(); //reset message to user with instructions
       boardingTimeText.innerHTML = boardingTimeHour + ":0" + maxGuesses;

       //check if  the clock is hidden before trying to show it
       if (clockHidden) {
           document.getElementById('clock-text-hidden').id = "clock-text-visible"; //make it visible
           var clockText = document.getElementById("clock-text-visible");
           clockText.innerHTML = boardingTimeHour + ":00"; //set the time on the visible clock
           clockHidden = false;
       }

   }

   //Pick a random city from the list
   //===================================================
   function chooseRandomCity() {
       // pick a random city from array
       randomIndex = Math.floor(Math.random() * capitalCities.length);
       capitalCity = capitalCities[randomIndex][0].toLowerCase(); //make chars lower case
       country = capitalCities[randomIndex][1]; //store the country of the selected capital
       capitalCityChars = capitalCity.split(''); //create an array of the characters

       //create a array of blank Characters of the same length of the capitalCity
       for (var i = capitalCityChars.length - 1; i >= 0; i--) {
           //check for space character and display, else display blank line
           var spaceChar = /\s/g; //regex to find space chars
           if (capitalCityChars[i].match(spaceChar)) {
               placeholderChars[i] = spaceHere; //insert a space Character placeholder
           } else {
               placeholderChars[i] = blankLetter; //put the blank letter place holder
           }
       }
       console.log("capitalCity: " + capitalCity); //This should help you get some correct answers for testing
   }

   //Check user guess against word
   //===================================================
   function checkGuess(letter) {
       message2.innerHTML = ""; //remove the message explaining each guess takes a minute
       var letterFound = false;
       // check if letter not already guessed
       if (guessedLetters.includes(letter)) {
           message1.innerHTML = "You have already guessed that key";
       } else {
           //check letter exists in answer
           for (var i = 0; i < capitalCityChars.length; i++) {

               if (capitalCityChars[i] == spaceHere) { //check for space character and display it after first guess
                   writeLetter(i, " ");
               }
               if (capitalCityChars[i] == letter) {
                   letterFound = true;
                   numCorrectLetters++;
                   console.log(letter + " exists at pos: " + i);
                   writeLetter(i, letter); // write letter at position           
               } else if (capitalCityChars[i] == letter) {
                   letterFound = true;
                   numCorrectLetters++;
                   console.log("numCorrectLetters: " + numCorrectLetters + "total letters: " + capitalCity.replace(" ", "").length);
                   writeLetter(i, letter); // write letter at position           
               }
           }

           guessedLetters.push(letter); //add that letter to the guessed array

           if (letterFound) {
               //don't increase guess count
           } else {
               // letter not found, add that letter as a guess
               guessedText.innerHTML = (guessedText.innerHTML + " " + letter).replace(blankLetter, ""); // remove prevailing blankLetter marker
               guesses++;
               displayGuessesRemaining();
           }
           //check if they have guessed all of the letters (excluding spaces)
           if (numCorrectLetters == capitalCity.replace(" ", "").length) {
               // all letters Gueses, user wins, game over
               wins++;
               winsText.innerHTML = wins;
               message1.innerHTML = "Nice, you are off to the capital of  " + country + ". Press any key to start again";
               displayAnswer();
               // give option to go to harder airline
               if (!worldCapitalAirlines) {
                   message2.innerHTML = "Or try our <a href='#'' onclick='changeAirlines()'>International Partner</a>";
               }
               newGame = true; //user won the game


           } else if (guesses == maxGuesses) {
               // all guesses used, game over
               losses++;
               lossesText.innerHTML = losses;
               message1.innerHTML = "Too Late, you missed your flight to " + country + ".";

               // give option to go to easier airline
               if (worldCapitalAirlines) {
                   message2.innerHTML = "Not taking off? Try our <a href='#'' onclick='changeAirlines()'>Domestic Partner Airline</a> or press any key to start again";

               } // show the flight cancelled stamp
               if (!stampVisible) {
                   document.getElementById('stamp-hidden').id = "stamp-visible";
                   stampVisible = true;
               }

               displayAnswer();
               newGame = true;
           }
       }

   }
   

   //Reset the text displayed to the user
   //===================================================
   function resetMessages() {
       message1.innerHTML = "We fly to every world capital city. Guess the the destination by typing one letter at a time.";
       var remainingGuesses = maxGuesses - guesses;
       if (!newGame) {
           message2.innerHTML = "Your flight boards in " + remainingGuesses + " guesses. Each incorrect guess takes 1 minute.";
       }
   }

   //Display the updated clock time (guesses used)
   //===================================================
   function displayGuessesRemaining() {
       var clockText = document.getElementById("clock-text-visible");
       clockText.innerHTML = boardingTimeHour + ":0" + guesses;

   }

   //Reset variables for a new round of game
   //===================================================
   function resetVariables() {
       console.log("Variables reset");
       newGame = false; //no longer a new game
       message1.innerHTML = "";
       message2.innerHTML = "";
       guesses = 0;
       guessedLetters = [""];
       numCorrectLetters = 0;
       placeholderChars = [""];
       wordPlaceHolder.innerHTML = "";
       guessedText.innerHTML = blankLetter;
       // remove the fligth cancelled stamp
       if (stampVisible) {
           document.getElementById('stamp-visible').id = "stamp-hidden";
           stampVisible = false;
       }
   }

   //Display the guessed letter in correct order
   //===================================================
   function writeLetter(letterPos, letter) {
       placeholderChars[letterPos] = letter;
       //put actually space characters on the screen
       wordPlaceHolder.innerHTML = placeholderChars.join("").replace(spaceHere, " ");
   }

   //Display the '_' placeholder
   //===================================================
   function writePlaceHolder() {
       wordPlaceHolder.innerHTML = placeholderChars.join("");
   }

   //Display the complete word
   //===================================================
   function displayAnswer() {
       wordPlaceHolder.innerHTML = capitalCity;
   }

   //Change from one airline to another
   //===================================================
   function changeAirlines() {
      //check which airline is currently being used
       if (worldCapitalAirlines) {
           capitalCities = usaCapitals; //change to usa capitals
           worldCapitalAirlines = false;
           document.getElementById('stamp-visible').id = "stamp-hidden"; //remove the flight departed stamp
           stampVisible = false;

           //change the name and colour on ticket
           airlineTitle.innerHTML = "US Capital Air";
           document.getElementById('ticket-stub-top').id = "ticket-stub-top-red";
           document.getElementById('ticket-main-top').id = "ticket-main-top-red";
           resetStats();
           resetVariables(); //Clear wins and losses
            message1.innerHTML = "US Capital Air - We fly to all the US Capitals";
            message2.innerHTML = "Press any key to start";
       } else {
           capitalCities = worldCapitals; //change to world capitals
           worldCapitalAirlines = true;
           //change the name and colour on ticket
           airlineTitle.innerHTML = "World Capital Airlines";
           document.getElementById('ticket-stub-top-red').id = "ticket-stub-top";
           document.getElementById('ticket-main-top-red').id = "ticket-main-top";
           resetStats();
           resetVariables(); //Clear wins and losses
           message1.innerHTML = "World Capital Airlines - We fly to all the World Capitals";
           message2.innerHTML = "Press any key to start";

       }
       
       newGame = true;

   }

   //Clear wins and losses
   //===================================================
   function resetStats() {
       wins = 0;
       losses = 0;
       winsText.innerHTML = wins;
       lossesText.innerHTML = losses;
   }