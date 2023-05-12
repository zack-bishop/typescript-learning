// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Robert',
//     age: 30,
// };

const person = {
    name: 'Robert',
    age: 30,
    hobbies: ['Sports', 'Cooking', 'Anime']
}

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

for (const hobby of person.hobbies) {
    console.log(hobby);
}