// Destructuring Assignment

let a, b;

[a, b] = [100, 200];

// Rest Pattern
[a, b, ...rest] = [100, 200, 300, 400, 500,];

// console.log(rest);


({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

console.log(a, b, rest);

// Array Destructoring
// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person2);

function getPeople() {
    return ['John', 'Beth', 'Mike'];
}

let person1, person2, person3;

[person1, person2, person3] = getPeople();

console.log(person2);

// Object Destructuring

person = {
    name: 'Conor',
    age: 38,
    city: 'Berlin'
}

const { name, age, city } = person;

console.log(name);


