// const names: Array<string> = [];
// names[0].split(' ');

// const promise: Promise<string> | = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     }, 2000);
// });

// promise.then(data => {
//     data.split(' ');
// })

function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObj = merge({name: 'Max', hobbies: ['Sports']}, {age: 30});
console.log(mergeObj.age)

interface lengthy {
    length: number;
}

function countAndDescribe<T extends lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T, 
    key: U
) {
    return 'Value: ' + obj[key];
}

console.log({ name: "Laycon"}, 'name');

class DataStorage<T extends string | number | boolean > {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Laycon');
textStorage.addItem('Stella');
textStorage.removeItem('Laycon');
console.log(textStorage.getItems());

const numberStotrage = new DataStorage<number>();

const objStorage = new DataStorage<object>();

const maxObj = {name: "Lisa"};
objStorage.addItem({maxObj});
objStorage.addItem({name: "Lima"});
// ...
objStorage.removeItem(maxObj);
console.log(objStorage.getItems());
