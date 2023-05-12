// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Robert',
//     age: 30,
// };
var person = {
    name: 'Robert',
    age: 30,
    hobbies: ['Sports', 'Cooking', 'Anime'],
    role: [2, 'author']
};
person.role.push('admin');
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!',
    }
};
console.log(person.name);
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
