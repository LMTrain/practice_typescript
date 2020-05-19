"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
var hobbies = ['Eating', 'Dancing', 'Sexing'];
var activeHobbies = __spreadArrays(['Hiking'], hobbies);
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
var person = {
    firstName: "LAycon",
    userAge: 30
};
var copiedPerson = __assign({}, person);
console.log(copiedPerson);
var adding = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (currentResult, currentValue) {
        return currentResult + currentValue;
    }, 0);
};
var addedNumbers = adding(5, 10, 2, 3.7);
console.log("THIS IS ADDEDNUMBERS: " + addedNumbers);
// ARRAY DESTRUCTURING
var hobby1 = activeHobbies[0], hobby2 = activeHobbies[1], remainingHobbies = activeHobbies.slice(2);
console.log(hobby1, hobby2, activeHobbies);
// OBJECT DESTRUCTURING
var studentName = person.firstName, userAge = person.userAge;
console.log(studentName, age, person);
