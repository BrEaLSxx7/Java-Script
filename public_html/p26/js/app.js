//Punto 26

var menu = Number(prompt("Menu\n\
1. To make a sum\n\
2. To make a subtraction\n\
3. To make a multiplication\n\
4. To make a division\n\
0. Exit the program"));


function sum() {
  var num1 = Number(prompt("Enter a number"));
  var num2 = Number(prompt("Enter another number"));
  console.log(`The result of the sum is: ${num1 + num2}`);
}

function subtraction() {
  var num1 = Number(prompt("Enter a number"));
  var num2 = Number(prompt("Enter another number"));
  console.log(`The result of the subtraction is: ${num1 - num2}`);
}

function multiplication() {
  var num1 = Number(prompt("Enter a number"));
  var num2 = Number(prompt("Enter another number"));
  console.log(`The result of the multiplication is: ${num1 * num2}`);
}

function division() {
  var num1 = Number(prompt("enter a number"));
  var num2 = Number(prompt("Enter another number"));
  console.log(`the result of the divison is: ${num1 / num2}`);
}

switch (menu) {
  case 1:
    sum();
    break;
  case 2:
    subtraction();
    break;
  case 3:
    multiplication();
    break;
  case 4:
    division();
    break;
  case 0:
    console.log("Good Bye");
    break;
  default:
    break;
}
