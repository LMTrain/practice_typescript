const person = {
    name: 'Laycon',
    age: 30,
    hobbies: ["Drawing", 'Swimming']
};

let favoriteActivities: string[];
favoriteActivities = ['Singing'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
