var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
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
var favoriteActivities;
favoriteActivities = ['Singing'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('is Admin');
}
