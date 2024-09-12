// Display input field
let display = document.getElementById("display");

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function insert(value) {
  display.value += value;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

function calculateSin() {
  let currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = Math.sin((currentValue * Math.PI) / 180).toFixed(5);
  }
}

function calculateCos() {
  let currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = Math.cos((currentValue * Math.PI) / 180).toFixed(5);
  }
}

function calculateTan() {
  let currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = Math.tan((currentValue * Math.PI) / 180).toFixed(5);
  }
}

function calculateLog() {
  let currentValue = parseFloat(display.value);
  if (!isNaN(currentValue) && currentValue > 0) {
    display.value = Math.log10(currentValue).toFixed(5);
  } else {
    display.value = "Error";
  }
}
