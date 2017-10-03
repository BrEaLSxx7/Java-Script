var salary = Number(prompt("Salary of the worker"));
var retention = Number(prompt("Percentage of retention"));

var percentage = retention / 100;
var x = (salary * percentage);
console.log("Retention is: " + x);
var salaryT = salary - x;
console.log("The total salary of the worker is: " + salaryT);