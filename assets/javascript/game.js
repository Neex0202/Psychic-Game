// Alphabet Array of possible computer choices.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

// Variables for stat counters, letters guessed, etc.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var userGuess;
var computerGuess;


// Sets computerGuess variable equal to a random choice from alphabet array.

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerGuess);

// RNG for new letter
var rng = function() {

    computerChoices[Math.floor(Math.random() * computerChoices.length)];
};


// Function to reset game
var reset = function() {
    guessesLeft = 10;
    rng();
};


// When user presses a key, this function will execute.
document.onkeypress = function(event) {

    // Determines key pressed by user
    var userGuess = event.key;

    console.log(userGuess);
    lettersGuessed.push(" " + userGuess);

    // 
    if (userGuess == computerGuess) {
        wins++;
        alert("winner!");
        function reset() {
            guessesLeft=10;
                function rng() {
                computerChoices[Math.floor(Math.random() * computerChoices.length)];    
                }
            
        }
       reset();
       rng();

    } else {
        guessesLeft--;
    }

    if (guessesLeft == 0) {
        losses++;

        function reset() {
            guessesLeft = 10;
            rng();

        }
        reset();
    }






    var html = "<p>Guess what letter I'm thinking of</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>guesses left:" + guessesLeft + "</p>" +
        "<p>Letters guessed:" + lettersGuessed + "</p>";


    document.querySelector("#game").innerHTML = html;

};

//Grabbing reference from <span> to display letters guessed

// var userText = document.getElementById("user-text");

// document.onkeypress = function(event)        {
//  userText.textContent = event.key;

//
