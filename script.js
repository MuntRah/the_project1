let idx;
let letter;
let currentWord;
const words = [
  { word: "DOG", hint: "Humens best friend" },
  { word: "TREE", hint: "Has leaves and branches" },
  { word: "SUN", hint: "The center of our solar system" },
  { word: "BOOK", hint: "Contains stories or information" },
  { word: "BALL", hint: "Round and used in sports" },
  { word: "CAT", hint: "A common household pet" },
  { word: "HOUSE", hint: "Where people live" },
  { word: "CAR", hint: "Used for transportation on roads" },
  { word: "RAIN", hint: "Falls from the sky in drops" },
  { word: "BIRD", hint: "Has feathers and flies" },
  { word: "ELEPHANT", hint: "A large mammal with tusks and a trunk" },
  { word: "COMPUTER", hint: "A device used for processing information" },
  {
    word: "MOUNTAIN",
    hint: "A large natural elevation of the earth's surface",
  },
  { word: "OXYGEN", hint: "A chemical element essential for respiration" },
  { word: "GUITAR", hint: "A musical instrument with strings" },
];
const wrongDisplay = document.querySelector(".wrong");
const wordDisplay = document.querySelector(".word");
const guessDisplay = document.querySelector(".guess");
const hintDisplay = document.querySelector(".hint");
const letterButtons = document.querySelectorAll(".keyboard button");

letterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const letter = button.innerText;
    btn(letter);
  });
});
// words.forEach((n) => {
//   word.innerHTML = n.word;
//   hintDisplay.innerText = `hint : ${n.hint}`;
// });

function rand() {
  idx = Math.floor(Math.random() * words.length);
  currentWord = words[idx].word;
  wordDisplay.innerText = `${words[idx].word}`;
  hintDisplay.innerText = `hint :${words[idx].hint}`;
}
document.addEventListener("DOMContentLoaded", rand);

function btn(str) {
  let found = false;
  for (let index = 0; index < currentWord.length; index++) {
    if (currentWord[index] === str) {
      let wordIndex = guessDisplay.innerText.split("");
      wordIndex[index] = str;
      guessDisplay.innerHTML = wordIndex.join("");
      found = true;
    }
  }

  if (!found) {
    wrongDisplay.innerText += str;
    letterButtons.forEach((button) => {
      if (button.innerText === str) {
        button.disabled = true;
      }
    });
  }
}
