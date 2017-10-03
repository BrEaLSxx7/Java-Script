//Punto 19

var num = Number(prompt("Enter a number"));

while (num > 0) {
  num = Number(prompt("Enter a number less than zero"));
}
if (num < 0) {
  num = num * (-1);
  console.log(num);
}
