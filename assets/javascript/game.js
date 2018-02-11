// *****Images and text from rickandmorty.wikia.com and vulture.com******

//------------------------------------Game Load---------------------------------------------//
// Variables, values, and text/audio alerts needed before start of game
var player = prompt("Player Name:");
alert("Rick:  Hey Morty, [burp] you're really gonna flip your lid over [burp] this one....");
alert("Rick:  The portal gun is [burp] broken and we're stuck in Dimension C-132.  We have to rely on [burp] " + player +" here to get us back to Earth C-137. \n \nMorty: Oh, geez Rick!...");
alert("Rick:  Great thing is "+player+" [burp] can get us back to Earth C-137 by solving a [burp] random word Hangman-style....");
alert("Rick:  [burp] Bad thing is "+player+" would likely have to be a Rick and Morty fan [burp] to be successful. \n \nMorty: What the hell, Rick!?!  What the hell!?!...");
alert("Rick:  It gets worse, Morty... Solving the word won't necessarily get us back to our reality, Morty.  We'll be randomely jumping between dimensions as "+player+" solves these words.\nWe could be trapped in an infi[burp]nite loop, Morty! \n \n \nStart Game?")
var audioStart = document.getElementById("startAudio");
	audioStart.play();
var startingWins=0;
document.getElementById("guessesRemaining").innerHTML = ("12");
document.getElementById("dimImage").src = "assets/images/Thumbnail1.png";
document.getElementById("caption").innerHTML = "Dimension C-132";
document.getElementById("thumbnailText").innerHTML= "One of the many universes in the multiverse and was the universe in which Rick and Morty of the first two volumes of Rick and Morty comic series have said to be from.";
document.getElementById("mainSong").volume = 0.2;

// Reset Game function to start another word after wrong or right guess
resetGame();
function resetGame(){

	//---------------------------------HANGMAN GAME------------------------------------------//
	// Declare variables to be used for game words, images and text

	// Array of WORD CHOICES
	var wordChoices = ["plumbus", "traflokian", "dinglebop", "schleem", "grumbo", "fleeb", "schlami", "hizzards", "blamfs", "chumbles", "ploobis", "abradolf",
		"cronenburg","gazorpazorpfield", "cromulon", "rick","morty","summer","gazorpian","jerry","beth","poopybutthole",
		"birdperson","meeseeks","unity","dimension","universe","glorpdieblorp","gromflamites","galactic","gwendolyn",
		"interdimensional","jerryboree","microverse","nuptia","oxytocin","portal","snowball","snuffles","schwifty","zigerions",
		"wubbalubbadubdub","grumbold","nibnibs","rikitikitavi","shumshumschilpiddydah","shleemypants","squanchy","transdimensional"]
	var correctLetters = []; 	// Array for CORRECT letters chosen by user
	var incorrectLetters = [];	// Array for INCORRECT letters chosen by user
	var startingGuesses = 12; 	// Variable starting counter for number of guesses remaining
	var underscores = []; 		// Array of UNDERSCORES for generated random word

	// Array of images to chose from for left side column
	var images=["assets/images/Thumbnail1.png","assets/images/Thumbnail2.png","assets/images/Thumbnail3.png",
		"assets/images/Thumbnail4.png","assets/images/Thumbnail5.jpg","assets/images/Thumbnail6.jpg","assets/images/Thumbnail7.png",
		"assets/images/DogDimension.png","assets/images/Furniture.png","assets/images/CromulonDimension.png",
		"assets/images/PantlessUniverse.png","assets/images/ReverseHeight.png","assets/images/Gazorpazorp.png","Shml.png"];

	// Array of thumbnail text to use for the image picked
	var thumbnailText=["One of the many universes in the multiverse and was the universe in which Rick and Morty of the first two volumes of Rick and Morty comic series have said to be from.",
		"Dimension in the multiverse that Rick Sanchez and Morty Smith traveled to after escaping Dimension C-137.",
		'A post-apocalyptic world where a "boom boom" destroyed modern society.',
		"A dimension where pizzas eat people and humans are in the opposite roles than they are in the real world.",
		'The universe in which "our" Rick and Morty originated, which they abandoned after they "Croneberg-d" it.  This is the universe the original Jerry, Summer, and Beth currently inhabit.',
		"A dimension where everything is made of butts, farts, toilets, and toilet paper.",
		"A world where people have hamsters living inside their butts.",
		"A universe that looks just like ours, but dogs are in charge.",
		"A universe where furniture are sentient beings who use human beings as furniture and eat phones as sustenance. Pizzas were used as phones. Bottles were used as transportation and trucks are used to drink liquids.",
		"The dimension where a race of enormous floating heads, known as Cromulons, live. The center of this area appears to be a disco ball-like Star. The Cromulons also possess a giant plasma ray which they use, presumably, telepathically.",
		"A universe where no one appears to wear pants. They wear all other types of clothes, but nothing on the lower half of their body.",
		"Reverse Height Reality, with the version of Game of Thrones where Tyrion is taller than everyone else.",
		"A universe where it's 'Gazorpazorpfield,' not Garfield, and Lorenzo Music is still alive.",
		"A dimension where all proper nouns begin with the Shml-."];

	// Array of thumbnail captions to use for the image picked
	var thumbnails=["Dimension C-132","Replacement Dimension", "Post-Apocalptic Dimension","Pizza Universe","Dimension C-137","Buttworld",
		"Hamster in Butt World","Dog Dimension","Furniture Universe","Cromulon Dimension","Pantless Universe","Reverse Height Dimension",
		"Gazorpazorp World","Shml Universe"];
	
	// Array of audio to be picked randomely and played after correct guess
	var audio = ["assets/sound/RM1.mp3","assets/sound/RM3.mp3","assets/sound/RM4.mp3","assets/sound/RM5.mp3","assets/sound/RM6.mp3","assets/sound/RM7.mp3"];


	// Randomly pick a word from wordCoices array
	var generatedWord = wordChoices[Math.floor(Math.random()*wordChoices.length)];
		console.log(generatedWord);
			//Generate underscores based on length of generatedWord
			for (var i = 0; i < generatedWord.length; i++) {
				underscores.push("_");
			}	
	//Create DOM underscores (Underscores without the comma using join " " for printing to the DOM)
	var domUnderScores = underscores.join(" ");
		document.getElementById("underscores").innerHTML = domUnderScores;

	// Randomly pick a sound from the audio array
	var generatedAudio = audio[Math.floor(Math.random()*audio.length)];
	
	// Randomly pick an image from the images array
	var generatedImage = images[Math.floor(Math.random()*images.length)];
	
	// Pick a thumbnail text with an index matching the image picked index
	var generatedthumbnailText = thumbnailText[images.indexOf(generatedImage)];
	
	// Pick a thumbnail caption with an index matching the image picked
	var generatedthumbnails = thumbnails[images.indexOf(generatedImage)];
	var imagecaption =document.getElementById("caption").innerHTML;
		// If C-137 thumbnail caption is picked alert of game win
		if(imagecaption=="Dimension C-137"){
			var wubba=document.getElementById("wubbaAudio");
				wubba.play();
				alert("Wubbalubbadubdub!  You got Rick and Morty back to Earth C-137! \n \n \nKeep Playing?");
				document.getElementById("alert").innerHTML="";
		}

	//---------------------------------User Guess Sequence-----------------------------------//
	
	// Function to be run on user presses a key
	document.onkeyup=function(event){
		// Determine which key was pressed
		var userGuess= event.key;

		// (1) Loop runs through the generated word letters and determines if user's guess is in the generated word once or more. 
		for (var j=0; j < generatedWord.length; j++){		
	//---------------------------------Correct guess sequence---------------------------------//							
		if  (generatedWord[j]===userGuess) {											
			// (2) Loop inserts the letter into the underscores array in the index number as the generated word's index number.
			underscores[j]=userGuess;
			// (3) Loop changes HTML underscore Id content to underscore array content													
			document.getElementById("underscores").innerHTML = underscores.join(" ");	// (3)
			// (4) check if the user has solved the word.
			if (underscores.join("")==generatedWord){	
				// Increase the number of wins by 1
				startingWins++;	
				// Show number of total wins on DOM
				document.getElementById("wins").innerHTML = (startingWins);
				// Alert text - word was solved				
				document.getElementById("alert").innerHTML = 'You solved the word "' +generatedWord +'!"';
				// Clear underscores on DOM
				document.getElementById("underscores").innerHTML = ("");
				// Clear correct letters section on DOM
				document.getElementById("correctLetters").innerHTML = ("");
				// Clear incorrect letters section on DOM
				document.getElementById("incorrectLetters").innerHTML = ("");
				// Reset number of guesses remaining
				document.getElementById("guessesRemaining").innerHTML = ("12");
				// Set new image to randomly generated image
				document.getElementById("dimImage").src = generatedImage;
				// Set new matching thumbnail to generated image
				document.getElementById("thumbnailText").innerHTML = generatedthumbnailText;
				// Set new matching thumbnail caption to generated image
				document.getElementById("caption").innerHTML = generatedthumbnails;
				// Set randomly generated win audio as the source for winAudio html Id
				document.getElementById("winAudio").src = generatedAudio;
				// give a variable to current winAudio html element
				var audioWin = document.getElementById("winAudio");
					// Play current audio in winAudio html element
					audioWin.play();
				// Run function to restart/reset game
				resetGame();
				}
			}
	}

	//---------------------------------Incorrect guess sequence-------------------------------------//
		if ((generatedWord.indexOf(userGuess)<0) && (incorrectLetters.indexOf(userGuess))<0){
			// Push incorrect letter to the array of incorrect letters
			incorrectLetters.push(userGuess);
			// Print incorrect letters array to DOM
			document.getElementById("incorrectLetters").innerHTML = incorrectLetters;
			// Change number of guesses remaining by -1
			guessesRemaining=(startingGuesses-incorrectLetters.length);
			// Print number of guesses remaining to the DOM
			document.getElementById("guessesRemaining").innerHTML=guessesRemaining;
			//  If number of guesses remaining (user has run out of guesses)
			if(guessesRemaining==0){
				// Alert text - the user has failed to solve generated word
				document.getElementById("alert").innerHTML = 'You failed to solve "'+generatedWord+'."';
				// Clear underscores on DOM
				document.getElementById("underscores").innerHTML = ("");
				// Clear correct letters section on DOM
				document.getElementById("correctLetters").innerHTML = ("");
				// Clear incorrect letters section on DOM
				document.getElementById("incorrectLetters").innerHTML = ("");
				// Reset number of guesses remaining
				document.getElementById("guessesRemaining").innerHTML = ("12");
				// Give variable to current winAudio html element
				var audioLost = document.getElementById("myAudio");
					// Play current audio in winAudio html element
					audioLost.play();
				// Run function to reset/restart game
				resetGame();
				}
		}
	}

}

