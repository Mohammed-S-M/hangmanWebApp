// this is the game function
function game() {
  const container = document.createElement("div");
  container.className = "container game-page";
  bodyElement.appendChild(container);

  const title = document.createElement("h1");
  title.className = "game-title";
  title.innerHTML = "HANGMAN";
  container.appendChild(title);

  const stageImage = document.createElement("img");
  stageImage.src = `images/skull-${imageNumber}.png`;
  stageImage.className = "stage-image";
  container.appendChild(stageImage);

  const livesContainer = document.createElement("div");
  livesContainer.className = "lives-container";
  container.appendChild(livesContainer);

  for (let i = 0; i < numberOfLives; i++) {
    const lives = document.createElement("img");
    lives.src = "images/lives.svg";
    lives.className = "lives";
    livesContainer.appendChild(lives);
  }

  // generating a random word from the selected data library
  word = randomWord(currentData);

  const wordContainer = document.createElement("div");
  wordContainer.className = "word-container";
  container.appendChild(wordContainer);

  for (let i = 0; i < word.length; i++) {
    const dashes = document.createElement("div");
    dashes.className = "dashes";
    wordContainer.appendChild(dashes);
    winningArray.push(dashes.innerHTML);
  }

  const lettersContainer = document.createElement("div");
  lettersContainer.className = "letters-container";
  container.appendChild(lettersContainer);

  for (let i = 0; i < dataObject.letters.length; i++) {
    const letters = document.createElement("button");
    letters.className = "btn btn-light letters";
    letters.type = "button";
    letters.innerHTML = dataObject.letters[i];
    lettersContainer.appendChild(letters);
  }

  const exit = document.createElement("button");
  exit.className = "btn btn-light exit";
  exit.innerHTML = "EXIT";
  container.appendChild(exit);

  exit.addEventListener("click", () => {
    const gameDiv = document.querySelector(".game-page");
    bodyElement.removeChild(gameDiv);
    startEffect.pause();
    startEffect.currentTime = 0;
    exitFunction();
  });

  const lettersButton = document.querySelectorAll(".letters");
  const disableLetters = () => {
    for (let letter of lettersButton) {
      letter.setAttribute("disabled", true);
    }
  };

  const dashes = document.querySelectorAll(".dashes");
  lettersButton.forEach((letter) => {
    letter.addEventListener("click", () => {
      letter.setAttribute("disabled", true);

      // this condition when the user select the correct letter
      if (word.includes(letter.innerHTML)) {
        for (let i = 0; i < word.length; i++) {
          if (word[i] === letter.innerHTML) {
            dashes[i].innerHTML = word[i];
            winningArray[i] = word[i];
          }
        }

        correctAnswerEffect.play();
      }

      // this condition when the user win the game
      if (!winningArray.includes("")) {
        gameStatus = "WON";
        disableLetters();

        startEffect.pause();
        winningEffect.play();

        setTimeout(() => {
          gameOver();
        }, 2000);
      }

      // this condition when the user select the wrong letter
      if (!word.includes(letter.innerHTML)) {
        const liveStage = document.querySelector(".stage-image");
        numberOfLives -= 1;

        if (imageNumber === 7) {
          imageNumber += 0;
        } else {
          imageNumber += 1;
        }
        liveStage.src = `images/skull-${imageNumber}.png`;

        if (liveNumber === 5) {
          liveNumber += 0;
        } else {
          liveNumber += 1;
        }

        const lives = document.querySelectorAll(".lives");
        lives[lives.length - liveNumber].src = "images/wrongAnswer.svg";

        wrongAnswerEffect.play();
      }

      // this condition when the user lose the game
      if (numberOfLives < 0) {
        gameStatus = "LOST";
        disableLetters();

        startEffect.pause();
        losingEffect.play();

        setTimeout(() => {
          gameOver();
        }, 2000);
      }
    });
  });
}
