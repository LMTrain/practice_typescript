const userName = 'Max';

let age = 30;

age = 29;
 
console.log(userName + ", " + age)

const add = (a: number, b: number) => {
    return a + b;
};

console.log(add(112, 531));

const addTwo = (a: number, b: number) => a + b;

console.log(addTwo(112, 531));

const printOutput = (output: string | number) => {
    console.log(output);

}

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log("THIS IS EVENT: " + event));
}
printOutput(add(5, 2));

const hobbies = ['Eating', 'Dancing', 'Sexing'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
    firstName: "LAycon",
    userAge: 30
}

const copiedPerson = {...person};
console.log(copiedPerson);

const adding = (...numbers: number[]) => {   
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);

};

const addedNumbers = adding(5, 10, 2, 3.7);
console.log("THIS IS ADDEDNUMBERS: " + addedNumbers);

// ARRAY DESTRUCTURING
const [hobby1, hobby2, ...remainingHobbies] = activeHobbies;

console.log(hobby1, hobby2, activeHobbies);

// OBJECT DESTRUCTURING
const {firstName: studentName, userAge} = person;
console.log(studentName, age, person);
