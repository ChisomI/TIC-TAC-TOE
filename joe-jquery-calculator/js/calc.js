document.addEventListener("DOMContentLoaded", function(){

  // SETTING UP GLOBAL VARIABLES
  var number1;
  var number2;
  var numberDisplayed;
  var operator = "none";

  // GETTING HTML ELEMENTS
  var display = document.getElementById("screen");
  var numberButtons = document.getElementsByClassName("buttonNum");
  var operatorButtons = document.getElementsByClassName("operator");
 
//THIS WILL PLACE THE VALUE OF THE STRING DIRECTLY INSIDE THE SCREEN 
$('#screen').html('745874');



  // ADDING EVENT LISTENERS TO BUTTONS
  /*for(i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener("click", clickNumberButton);
  }
*/

//THIS IS THE REPLACEMENT FOR THE EVENT LISTENER WHICH WAITS FOR THE CLICK TO BE PERFORMED//


//1. ANYWHERE YOU'D USE AN HTML IDENTIFIER (class or id) AND CALL IT IN JAVASCRIPT, IT CAN BE REPLACED WITH 
//$(''). 
//2.THE .on () IS SPECIFICALLY USED TO IDENTIFY AN ACTION AND PUT IT INTO MOTION
//3. 'click' - IS THE PARAMETER THAT MUST BE MET BY THE USER TO ACTION THE FUNCTION
//4. 'clickNumberButton' IS THE ACTION THAT IS PERFORMED
$('.buttonNum').on('click', clickNumberButton);

$('.equals').on("click", function (event){
  $(this).css('background','yellow');
});

  for (var i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", getOperation);
  }

  document.getElementsByClassName("equals")[0].addEventListener("click", evaluateOperation);
  document.getElementsByClassName("buttonClear")[0].addEventListener("click", clearScreen);

  // EVENT LISTENERS

  // When number is clicked, have it appear as html string in screen
  function clickNumberButton(event) {
    // Know that a number is on screen, so you can add a new number or replace it with operator
    numberDisplayed = true;
    // Check that Sparta Calculator or an operator is not screen before adding to the number on there
    if(display.innerHTML == "Sparta Calculator" || display.innerHTML == "+" || display.innerHTML == "-" || display.innerHTML == "*" || display.innerHTML == "/") {
      display.innerHTML = this.innerHTML;
    }
    else {
      display.innerHTML += this.innerHTML;
    }
  }

  // When operator is clicked, have it appear as html string on screen
  function getOperation(event) {
    // Check no operator is set yet and that it's not Sparta Calculator on screen
    if(operator == "none" && numberDisplayed) {
      // Set the operator to be whichever one you clicked
      operator = this.innerHTML;
      // Set number1 to the number displayed on screen parsed into an integer
      number1 = parseInt(display.innerHTML);
      display.innerHTML = operator;
    }
  }

  // When equals is clicked, have it display the result as html string on screen
  function evaluateOperation(event) {
    // Check to see there's a number to operate on, not an operator or Sparta Calculator
    if(numberDisplayed) {
      // Set number2 to the number displayed on screen parsed into an integer
      number2 = parseInt(display.innerHTML);
      // Check which operation to perform, then display the result on the screen as html
      switch(operator){
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
      // Reset all data about numbers and operators so you can perform new operations with new numbers
      clearData();
    }
  }

  // When AC button is clicked, clear screen and replace the html with Sparata Calculator
  function clearScreen(event) {
    // Reset all data about numbers and operators so you can perform new operations with new numbers
    clearData();
    numberDisplayed = false;
    display.innerHTML = "Sparta Calculator";
  }

  // OPERATOR FUNCTIONS

  // Resets values of number1, number2 and operator so they can be reapplied by whatever is clicked on next
  function clearData() {
    number1 = null;
    number2 = null;
    operator = "none";
  }

});




