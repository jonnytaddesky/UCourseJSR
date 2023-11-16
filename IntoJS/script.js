'use strict';

// function getAge(birthYear) {
//     const age = 2023 - birthYear;
//     function printAge() {
//         let info = `${firstName} is ${age}-years old, born in ${birthYear}`;
//         console.log(info);

//         if (age >= 18) {
//             var isAdult = true; //scope function, variable function
//             const firstName = 'John';
//             const adult = `${firstName} is Adult`;
//             console.log(adult);

//             function sum(a, b) {
//                 return a + b;
//             } // block scope

//             console.log(sum(1, 2));
//             info = 'New info';
//         }
//         console.log(isAdult);
//         console.log(info);
//     }
//     printAge();
//     return age;
// }

// const firstName = 'Artem';

// getAge(1995);

// Hoisting

//Variables
// console.log(firstName);
// console.log(job);
// console.log(birthYear);

// var firstName = 'Artem';
// let job = 'programmer';
// const birthYear = 1995;

//functions
// console.log(declSum(2, 3));
// console.log(exprSum(2, 3)); // no
// console.log(arrSum(2, 3)); // no
// function declSum(a, b) {
//     return a + b;
// }

// const exprSum = function (a, b) {
//     return a + b;
// };

// var arrSum = (a, b) => a + b;

//Example

// if (!isUserValid) {
//     deleteUser();
// }

// var isUserValid = true;

// function deleteUser() {
//     console.log('User is deleted');
// }

// var a = 1;
// let b = 2;
// const c = 3;

// console.log(a === window.a);
// console.log(b === window.b);
// console.log(c === window.c);

// THIS

// console.log(this);

// const getAge = function (birthYear) {
//     console.log(2023 - birthYear);
//     console.log(this);
// };

// getAge(1995);

// const getAgeArr = birthYear => {
//     console.log(2023 - birthYear);
//     console.log(this);
// };

// getAgeArr(1995);

// const user187 = {
//     birthYear: 1995,
//     getAge: function () {
//         console.log(this);
//         console.log(2023 - this.birthYear);
//     },
// };

// user187.getAge();

// const user188 = {
//     birthYear: 2002,
// };

// user188.getAge = user187.getAge;
// user188.getAge();

// const f = user187.getAge;
// f();

//Regular VS Arrow functions

// var firstName = 'Jack';

// const user187 = {
//     firstName: 'Artem',
//     birthYear: 1995,
//     getAge: function () {
//         console.log(this);
//         console.log(2023 - this.birthYear);

// const self = this; // self or that

// old approach before ES6
// const isAdult = function () {
//     console.log(self);
//     console.log(2023 - self.birthYear >= 18);
//     // console.log(2023 - this.birthYear >= 18);
// };

// New approach after ES6
//         const isAdult = () => {
//             console.log(this);
//             console.log(2023 - this.birthYear >= 18);
//         };
//         isAdult();
//     },
//     sayGreeting: function () {
//         console.log(this);
//         console.log(`Hello, I'm ${this.firstName}`);
//     },
// };

// user187.getAge();
// user187.sayGreeting();
// console.log(this.firstName);

// arguments keyword
// const exprSum = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };

// exprSum(1, 2);
// exprSum(1, 2, 3);

// var arrSum = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };

// arrSum(1, 2, 3);

// Primitive VS Reference Types

// let a = 1;
// let b = a;
// a = 2;
// console.log(a);
// console.log(b);

// const x = {
//     foo: 'bar',
//     a: 1,
// };

// const y = x;
// y.a = 2;

// console.log('object x: ', x);
// console.log('object y: ', y);

let lastName = 'Brown';
let oldLastName = lastName;
lastName = 'White';
console.log(lastName, oldLastName);

const jane = {
    firsName: 'Jane',
    lastName: 'Brown',
    age: 21,
};

const marriedJane = jane;
marriedJane.lastName = 'White';
console.log('Jane: ', jane);
console.log('Married Jane: ', marriedJane);

// Object copying

const sara = {
    firsName: 'Sara',
    lastName: 'Brown',
    age: 21,
    familyMembers: ['Jack', 'Bob', 'Greta'],
};

const saraCopy = Object.assign({}, sara);
saraCopy.lastName = 'White';
saraCopy.familyMembers.push('Bill', 'Marta');

console.log('Sara: ', sara);
console.log('Sara Copy: ', saraCopy);
