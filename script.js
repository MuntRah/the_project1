const words = [
  { word: "dog", hint: "Man's best friend" },
  { word: "tree", hint: "Has leaves and branches" },
  { word: "sun", hint: "The center of our solar system" },
  { word: "book", hint: "Contains stories or information" },
  { word: "ball", hint: "Round and used in sports" },
  { word: "cat", hint: "A common household pet" },
  { word: "house", hint: "Where people live" },
  { word: "car", hint: "Used for transportation on roads " },
  { word: "rain", hint: "Falls from the sky in drops" },
  { word: "bird", hint: "Has feathers and flies" },
  { word: "elephant", hint: "A large mammal with tusks and a trun" },
  { word: "computer", hint: "A device used for processing informatio" },
  { word: "mountain", hint: "A large natural elevation of the earth's surfa " },
  { word: "oxygen", hint: "A chemical element essential for respirati " },
  { word: "guitar", hint: "A musical instrument with string" },
];

  const guessDisplay = document.querySelector(".guess");
  const hintDisplay = document.querySelector(".hint");
  const letterButtons = document.querySelectorAll(".keyboard button");

  letterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const letter = button.innerText;
      guessDisplay.innerText += letter;
    });
  });

