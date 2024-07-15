let currentInput = "";
const answer = document.getElementById("answerDisplay");

function calci(value) {
  currentInput += value;
  answer.innerHTML = currentInput;
}

function calculate() {
  try {
    answer.innerHTML = eval(currentInput);
    currentInput = answer.innerHTML;
  } catch (error) {
    alert("Invalid Expression");
    clearDisplay();
  }
}

function clearDisplay() {
  currentInput = "";
  answer.innerHTML = "";
}
