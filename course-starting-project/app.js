var person = {
    name: 'Laycon',
    age: 30,
    hobbies: ["Drawing", 'Swimming']
};
var favoriteActivities;
favoriteActivities = ['Singing'];
console.log(person.name);
for (var i = 0, a = person.hobbies; i < a.length; i++) {
    var hobby = a[i];
    console.log(hobby);
}
