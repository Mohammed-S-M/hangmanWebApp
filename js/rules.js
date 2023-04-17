// rules page function
function rules() {
  const startPage = document.querySelector(".start-page");
  bodyElement.removeChild(startPage);

  const container = document.createElement("div");
  container.className = "container rules-page";
  bodyElement.appendChild(container);

  const rulesBox = document.createElement("div");
  rulesBox.className = "rules-box";
  container.appendChild(rulesBox);

  const rulesTitle = document.createElement("h1");
  rulesTitle.className = "rules-title";
  rulesTitle.innerHTML = "Rules";
  rulesBox.appendChild(rulesTitle);

  const rulesUl = document.createElement("ul");
  rulesBox.appendChild(rulesUl);

  const rulesText = [
    "Choose a library of words.",
    "You will get a random word.",
    "You need to guess the word to win the game.",
    "Choose a letter, if it's correct it will appear in the word.",
    "If it's incorrect, you will lose a life.",
    "You have five lives.",
    "If you have (0) lives, and guessed an incorrect letter, you will lose the game.",
    "If you guessed every letter in the word, you will win the game.",
  ];

  for (let i = 0; i < rulesText.length; i++) {
    const rule = document.createElement("li");
    rule.innerHTML = rulesText[i];
    rulesUl.appendChild(rule);
  }

  const play = document.createElement("button");
  play.className = "btn btn-dark play";
  play.type = "button";
  play.innerHTML = "PLAY";
  rulesBox.appendChild(play);

  play.addEventListener("click", library);
}
