// library selection page function
function library() {
  const rulesPage = document.querySelector(".rules-page");
  bodyElement.removeChild(rulesPage);

  const container = document.createElement("div");
  container.className = "container library-page";
  bodyElement.appendChild(container);

  const libraryBox = document.createElement("div");
  libraryBox.className = "library-box";
  container.appendChild(libraryBox);

  const libraryMessage = document.createElement("p");
  libraryMessage.className = "library-message";
  libraryMessage.innerHTML = "Choose a library to start";
  libraryBox.appendChild(libraryMessage);

  const libraryText = [
    "Animals",
    "Countries",
    "Food",
    "House items",
    "Random words",
  ];

  for (let i = 0; i < libraryText.length; i++) {
    const library = document.createElement("button");
    library.className = "btn btn-outline-dark library";
    library.type = "button";
    library.innerHTML = libraryText[i];
    libraryBox.appendChild(library);
  }

  const libraries = document.querySelectorAll(".library");
  libraries.forEach((item) => {
    item.addEventListener("click", () => {
      userChoice = item.innerHTML;

      switch (userChoice) {
        case "Animals":
          currentData = dataObject.animals;
          break;
        case "Countries":
          currentData = dataObject.countries;
          break;
        case "Food":
          currentData = dataObject.food;
          break;
        case "House items":
          currentData = dataObject.houseItems;
          break;
        case "Random words":
          currentData = dataObject.randomWords;
          break;
      }

      startGameEffect.play();

      const libraryPage = document.querySelector(".library-page");
      bodyElement.removeChild(libraryPage);

      game();
    });
  });
}
