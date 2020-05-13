const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; //Tuples
} = {
    name: 'Laycon',
    age: 30,
    hobbies: ["Drawing", 'Swimming'],
    role: [2, 'author'] //Tuples

};

person.role.push('admin');

let favoriteActivities: string[];
favoriteActivities = ['Singing'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
