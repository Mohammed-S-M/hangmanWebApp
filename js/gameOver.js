// this is the end of the game function
function gameOver() {
  const game = document.querySelector(".game-page");
  bodyElement.removeChild(game);

  const container = document.createElement("div");
  container.className = "container game-over";
  bodyElement.appendChild(container);

  const endGameBox = document.createElement("div");
  endGameBox.className = "endGame-box";
  container.appendChild(endGameBox);

  const finalTitle = document.createElement("h1");
  finalTitle.className = "final-title";
  endGameBox.appendChild(finalTitle);

  const finalLogo = document.createElement("img");
  finalLogo.className = "final-logo";
  endGameBox.appendChild(finalLogo);

  const finalMessage = document.createElement("p");
  finalMessage.className = "final-message";
  endGameBox.appendChild(finalMessage);

  // based on the game status winning or losing
  if (gameStatus === "WON") {
    finalTitle.classList.add("winning");
    finalTitle.innerHTML = "CONGRATS";
    finalLogo.src = "images/winningGame.svg";
    finalMessage.classList.add("winning");
    finalMessage.innerHTML = "YOU WON";
  } else if (gameStatus === "LOST") {
    finalTitle.classList.add("losing");
    finalTitle.innerHTML = "GAMEOVER";
    finalLogo.src = "images/skull-7.png";
    finalMessage.classList.add("losing");
    finalMessage.innerHTML = "YOU LOST";
  }

  const finalText = document.createElement("p");
  finalText.innerHTML = "The word was:";
  finalText.className = "final-text";
  endGameBox.appendChild(finalText);

  // this section to reveal the final word capitalized
  let finalWord = [];
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      finalWord.push(word[i]);
    } else {
      finalWord.push(word[i].toLowerCase());
    }
  }
  //////////////////////////////////////////////////////////////

  const wordText = document.createElement("p");
  wordText.innerHTML = finalWord.join("");
  wordText.className = "final-text";
  endGameBox.appendChild(wordText);

  const playAgain = document.createElement("button");
  playAgain.innerHTML = "PLAY AGAIN";
  playAgain.type = "button";
  playAgain.className = "btn btn-dark play-again";
  endGameBox.appendChild(playAgain);

  playAgain.addEventListener("click", () => {
    bodyElement.removeChild(container);
    startGameEffect.play();
    startEffect.currentTime = 0;
    startEffect.play();

    resetFunction();
  });

  const exitGame = document.createElement("button");
  exitGame.innerHTML = "EXIT";
  exitGame.type = "button";
  exitGame.className = "btn btn-dark exit-game";
  endGameBox.appendChild(exitGame);

  exitGame.addEventListener("click", () => {
    bodyElement.removeChild(container);
    startEffect.pause();
    startEffect.currentTime = 0;
    exitFunction();
  });
}
