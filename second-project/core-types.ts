// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Robert',
//     age: 30,
// };

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Robert',
    age: 30,
    hobbies: ['Sports', 'Cooking', 'Anime'],
    role: [2, 'author']
}


person.role.push('admin');


const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!',
    }
}

console.log(person.name);
console.log(person.role);

for (const hobby of person.hobbies) {
    console.log(hobby);
}