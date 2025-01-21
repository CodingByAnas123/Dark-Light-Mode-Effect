const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing speed is an essential skill in the digital world.",
  "Pratice makes perfect, especially with typing.",
  "Consistency and dedication are keys to success.",
  "JavaScript is versatile programming language."
];

// Select Element
const quoteElement = document.querySelector("#quote");
const textInput = document.querySelector("#textInput");
const startBtn = document.querySelector("#startBtn");
const result = document.querySelector("#result");

let startTime;
let quote;

startBtn.addEventListener("click", startTest);

function startTest() {
  // Pick a random quote
  quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.textContent = quote;

  // Reset everything
  textInput.value = "";
  result.textContent = "";
  textInput.disabled = false;
  textInput.focus();

  // Start timer
  startTime = new Date().getTime();

  // Event Listener for typing
  textInput.addEventListener("input", checkTyping);
}

function checkTyping() {
  const typedText = textInput.value;

  // Check if user finished typing 
  if(typedText === quote) {
    const endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000; //In seconds

    const wordCount = quote.split('').length;
    const typingSpeed = Math.round((wordCount / timeTaken) * 60);

    // Show result
    result.textContent = `You typed ${wordCount} words in ${timeTaken.toFixed(2)} secods. Your typing speed is ${typingSpeed} WPM.`;

    // Disable input
    textInput.disabled = true;
  }
}