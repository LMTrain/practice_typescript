function Logger() {
    console.log
}

class Person {
    name = 'Laycon';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();

console.log(pers);