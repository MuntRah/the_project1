/*-------------- Constants -------------*/

const correctness = document.querySelector(".correctness");
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
  {
    word: "BIKE",
    hint: "something used for transportation and need physical effort",
  },
  { word: "LAMP", hint: "Something invented 19th in centry by adeson" },
  {
    word: "COFFEE",
    hint: "Drink transplanted in africa and maded for first time in yemen ",
  },
  { word: "SINGING", hint: "A talent can be discovered in bathroom" },
  {
    word: "HUMEN",
    hint: "Something walk on 4 legs then 2 legs and end with 3 legs",
  },
  { word: "WATER", hint: "colorless and have three states" },
  { word: "FURNCE", hint: "Something with four legs and four eyes" },
];
let win = document.querySelector("#win");
let lose = document.querySelector("#lose");
const wrongDisplay = document.querySelector(".wrong");
const wordDisplay = document.querySelector(".word");
const guessDisplay = document.querySelector(".guess");
const hintDisplay = document.querySelector(".hint");
const letterButtons = document.querySelectorAll(".keyboard button");
const keyboard = document.querySelector(".keyboard");
const changebtn = document.querySelector("#change");
const buttons = document.querySelectorAll(".btn");
const resetbtn = document.querySelector("#reset");
/*---------- Variables (state) ---------*/
let idx;
let letter;
let currentWord;
let count = 0;
/*----- Cached Element References  -----*/

/*-------------- Functions -------------*/
function reset() {
  idx = "";
  currentWord = "";
  count = 0;
  wrongDisplay.innerText = "Wrong :";
  guessDisplay.innerText = "";
  correctness.innerText = "Message  ";
  correctness.style.fontWeight = "";
  correctness.style.color = "";
  letterButtons.forEach((button) => {
    button.disabled = false;
  });
  rand();
}

function rand() {
  idx = Math.floor(Math.random() * words.length);
  currentWord = words[idx].word;
  wordDisplay.innerText = `${words[idx].word}`;
  hintDisplay.innerText = `Hint :${words[idx].hint}`;
  guessDisplay.innerText = "-".repeat(currentWord.length); 
}

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
  letterButtons.forEach((n) => {
    if (guessDisplay.innerText === currentWord) {
      correctness.innerText = "You win! 🎉";
      correctness.style.fontWeight = "bold ";
      correctness.style.color = "green";
      n.disabled = true;
      win.play();
    }
  });

  if (!found) {
    wrongDisplay.innerText += str;
    letterButtons.forEach((button) => {
      if (button.innerText === str) {
        button.disabled = true;
        count += 1;
      }
      if (count === 3) {
        correctness.innerText = "you lose 👎";
        correctness.style.color = "red";
        correctness.style.fontWeight = "bold";
        buttons.forEach((n) => {
          n.disabled = true;
          lose.play();
        });
      }
    });
  }
}
/*----------- Event Listeners ----------*/
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
document.addEventListener("DOMContentLoaded", rand);
resetbtn.addEventListener("click", reset);
