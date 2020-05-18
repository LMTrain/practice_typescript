"use strict";
var userName = 'Max';
var age = 30;
age = 29;
console.log(userName + ", " + age);
var add = function (a, b) {
    return a + b;
};
console.log(add(112, 531));
var addTwo = function (a, b) { return a + b; };
console.log(addTwo(112, 531));
var printOutput = function (output) {
    console.log(output);
};
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function (event) { return console.log("THIS IS EVENT: " + event); });
}
printOutput(add(5, 2));
