"use strict";
function Logger() {
    console.log;
}
class Person {
    constructor() {
        this.name = 'Laycon';
        console.log('Creating person object...');
    }
}
const pers = new Person();
console.log(pers);
