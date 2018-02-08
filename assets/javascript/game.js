alert("Welcome to the Rick and Morty Hangman game!");
var startingWins=0;
document.getElementById("dimImage").src = "assets/images/Pizza_Dimension.png";
document.getElementById("mainSong").volume = 0.4;

resetGame();
function resetGame(){
// Declare variables to be used
// Array of WORD CHOICES
var wordChoices = ["plumbus", "traflokian", "dinglebop", "schleem", "grumbo", "fleeb", "schlami", "hizzards", "blamfs", "chumbles", "ploobis", "abradolf"]
// var wordChoices = ["Morty Smith", "Abradolf Lincler", "Glip Glop"];
var correctLetters = []; 	// Array for CORRECT letters chosen by user
var incorrectLetters = [];	// Array for INCORRECT letters chosen by user
var startingGuesses = 10; 	// Variable starting counter for number of guesses remaining
var underscores = []; 		// Array of UNDERSCORES for generated random word
var images=["assets/images/Pizza_Dimension.png","assets/images/PostApocalyptic_World.png","assets/images/Replacementpaper.png","assets/images/Dimension_C132.png"]
var audio = ["assets/sound/RM1.mp3","assets/sound/RM2.mp3","assets/sound/RM3.mp3","assets/sound/RM4.mp3","assets/sound/RM5.mp3","assets/sound/RM6.mp3","assets/sound/RM7.mp3"]

// Randomly pick a word from wordCoices array
var generatedWord = wordChoices[Math.floor(Math.random()*wordChoices.length)];
console.log(generatedWord);
var generatedImage = images[Math.floor(Math.random()*images.length)];
console.log(generatedImage);
var generatedAudio = audio[Math.floor(Math.random()*audio.length)];

	
	//Generate underscores based on length of generatedWord
	for (var i = 0; i < generatedWord.length; i++) {
		underscores.push("_");
	}
	console.log(underscores);

	
	//Create DOM underscores (Underscores without the comma using join " " for printing to the DOM)
	var domUnderScores = underscores.join(" ");
	console.log(domUnderScores);
	document.getElementById("underscores").innerHTML = domUnderScores;

// Function to be run on user presses a key
document.onkeyup=function(event){
	// Determine which key was pressed
	var userGuess= event.key;
	console.log(userGuess);
	// (1) Loop runs through the generated word letters and determines if user's guess is in the generated word once or more. 
	// (2) Loop inserts the letter into the underscores array in the index number as the generated word's index number.
	// (3) Loop changes HTML underscore Id content to underscore array content
	// (4) check if the user has solved the word.  
	// (5) If the user has solved the word, alert and reset to start another word
	for (var j=0; j < generatedWord.length; j++){									// (1)
		if  (generatedWord[j]===userGuess) {											
			underscores[j]=userGuess;													// (2)
			document.getElementById("underscores").innerHTML = underscores.join(" ");	// (3)
			console.log(j);
			console.log(underscores);
			if (underscores.join("")==generatedWord){	
				startingWins++;	
				document.getElementById("winAudio").src = generatedAudio;
				console.log(generatedAudio);
				console.log(startingWins);				// (4)
				document.getElementById("alert").innerHTML = "You've solved the word!  ";
				document.getElementById("wins").innerHTML = (startingWins);
				document.getElementById("underscores").innerHTML = ("");
				document.getElementById("correctLetters").innerHTML = ("");
				document.getElementById("incorrectLetters").innerHTML = ("");
				document.getElementById("guessesRemaining").innerHTML = ("10");
				document.getElementById("dimImage").src = generatedImage;
				var audioWin = document.getElementById("winAudio");
				audioWin.play();
				resetGame();
				}
			}
	}
		if ((generatedWord.indexOf(userGuess)<0) && (incorrectLetters.indexOf(userGuess))<0){
			incorrectLetters.push(userGuess);
			document.getElementById("incorrectLetters").innerHTML = incorrectLetters;
			guessesRemaining=(startingGuesses-incorrectLetters.length);
			console.log(guessesRemaining);
			document.getElementById("guessesRemaining").innerHTML=guessesRemaining;
			if(guessesRemaining==0){
				document.getElementById("alert").innerHTML = "You Lost! Try a new word!";
				document.getElementById("underscores").innerHTML = ("");
				document.getElementById("correctLetters").innerHTML = ("");
				document.getElementById("incorrectLetters").innerHTML = ("");
				document.getElementById("guessesRemaining").innerHTML = ("10");
				document.getElementById("dimImage").src = generatedImage;
				var audioLost = document.getElementById("myAudio");
				audioLost.play();
				resetGame();
				}
		}
}

}

// var snd = new Audio("file.wav"); // buffers automatically when created
// snd.play();