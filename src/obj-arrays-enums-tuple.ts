
enum Role { ADMIN, READ_ONLY, AUTHOR};

const person ={
    // name: string;
    // age: number;
    // hobbies: string[];
    //role: [number, string]; //Tuples
// } = {
    name: 'Laycon',
    age: 30,
    hobbies: ["Drawing", 'Swimming'],
    role: Role.ADMIN
    //role: [2, 'author'] //Tuples

};

//person.role.push('admin');

let favoriteActivities: string[];
favoriteActivities = ['Singing'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log('is Admin');
}
