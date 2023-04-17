// selecting global elements
const bodyElement = document.querySelector("body");

// global variables
let userChoice = "";
let currentData = [];
let word = "";
let numberOfLives = 5;
let imageNumber = 1;
let liveNumber = 0;
let gameStatus = "";
let winningArray = [];

// audio variables
const startEffect = new Audio("audio/startMusic.mp3");
const startGameEffect = new Audio("audio/startGameSound.mp3");
const correctAnswerEffect = new Audio("audio/correctAnswerSound.mp3");
const wrongAnswerEffect = new Audio("audio/wrongAnswerSound.mp3");
const winningEffect = new Audio("audio/winningSound.mp3");
const losingEffect = new Audio("audio/losingSound.mp3");

// reusable functions

// when the user click the exit button
const exitFunction = () => {
  numberOfLives = 5;
  imageNumber = 1;
  liveNumber = 0;
  userChoice = "";
  winningArray = [];
  currentData = [];
  gameStatus = "";

  start();
};

// when the user click play again button
const resetFunction = () => {
  numberOfLives = 5;
  imageNumber = 1;
  liveNumber = 0;
  winningArray = [];
  gameStatus = "";

  game();
};

// this function will generate a random word from the selected data
const randomWord = (data) => {
  return data[Math.floor(Math.random() * data.length)].toUpperCase();
};
