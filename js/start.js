// starting page function
function start() {
  const container = document.createElement("div");
  container.className = "container start-page";
  bodyElement.appendChild(container);

  const welcomeBox = document.createElement("div");
  welcomeBox.className = "welcome-box";
  container.appendChild(welcomeBox);

  const title = document.createElement("h1");
  title.className = "title";
  title.innerHTML = "HANGMAN";
  welcomeBox.appendChild(title);

  const logo = document.createElement("img");
  logo.className = "logo";
  logo.src = "images/gameLogo.svg";
  welcomeBox.appendChild(logo);

  const message = document.createElement("p");
  message.className = "message";
  message.innerHTML = "Welcome to the Game";
  welcomeBox.appendChild(message);

  const start = document.createElement("button");
  start.classList = "btn btn-dark start";
  start.type = "button";
  start.innerHTML = "START";
  welcomeBox.appendChild(start);

  start.addEventListener("click", () => {
    startEffect.play();
    startEffect.loop = true;
    rules();
  });
}
