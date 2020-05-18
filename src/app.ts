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