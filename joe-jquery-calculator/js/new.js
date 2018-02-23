// Click a number button and a number shows up on the screen
var numberButtons = document.getElementsByClassName("buttonNum");
var operatorButtons = document.getElementsByClassName("operator");
var display = document.getElementById("screen");
var equalsButton = document.getElementsByClassName('equals')[0];
var clearButton = document.getElementsByClassName("buttonClear")[0];

var operator = "none";
var number1;
var number2;

for(var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", clickNumberButton);
}


function clickNumberButton(event) {
  if(display.innerHTML != "Sparta Calculator") {
    if(operator == "none") {
      display.innerHTML += this.innerHTML;
    }
    else {
      display.innerHTML += this.innerHTML;
      number2 = parseInt(this.innerHTML);
    }
  }
  else {
    if(operator == "none") {
      display.innerHTML = this.innerHTML;
    }
    else {
      display.innerHTML = this.innerHTML;
      number2 = parseInt(this.innerHTML);
    }
  }
}

// Click an operator button and it shows up on screen
  // Replace number there
  // Store what the operation is
  // Store value of number

for(var i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", getOperation);
}

// Click a number button and a number shows up on the screen AFTER an operation
  // Store value of second number

function getOperation(event) {
  number1 = parseInt(display.innerHTML);
  display.innerHTML = this.innerHTML;
  operator = this.innerHTML;
}

// Click equals and have it evaluate the operation between two numbers
equalsButton.addEventListener("click", evaluateOperation);

function evaluateOperation() {
  switch (operator) {
    case "+":
      display.innerHTML = number1 + number2;
      break;

    case "-":
      display.innerHTML = number1 - number2;
      break;

    case "*":
      display.innerHTML = number1 * number2;
      break;

    case "/":
      display.innerHTML = number1 / number2;
      break;
  }
}

// Click clear button and have it clear screen
  // Clear all the data (number values, opeartor values)

clearButton.addEventListener("click", clearScreen);

function clearScreen() {
  operator = "none";
  number1 = null;
  number2 = null;

  display.innerHTML = "Sparta Calculator";
}
