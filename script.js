const display = document.getElementById("display");
const cursor = document.querySelector(".blinking-cursor");
const calc = document.getElementById("calc");

function updateCursorPosition() {
  cursor.style.visibility = "visible";
  const inputWidth = display.value.length * 11;
  //if the input is too long the cursor stops at the end of the input
  if (inputWidth > display.clientWidth) {
    cursor.style.left = display.clientWidth + "px";
  } else {
    cursor.style.left = `${inputWidth}px`;
  }
}
function clearCursor() {
  cursor.style.visibility = "hidden";
}

function shiftInput() {
  if (display.scrollWidth > display.clientWidth) {
    display.scrollLeft = display.scrollWidth - display.clientWidth;
  }
  updateCursorPosition();
}

function append(input) {
  if (display.value === "Syntax Error") {
    clearDisplay();
  }
  display.value += input;
  updateCursorPosition();
  shiftInput();
}

function clearDisplay() {
  display.value = "";
  updateCursorPosition();
}

function backSpace() {
  if (display.value === "Syntax Error") {
    clearDisplay();
  } else display.value = display.value.slice(0, -1);
  updateCursorPosition();
}
function calculate() {
  try {
    display.value = eval(display.value);
    clearCursor();
  } catch (error) {
    display.value = "Syntax Error";
    cursor.style.visibility = "hidden";
  }
}
updateCursorPosition();
