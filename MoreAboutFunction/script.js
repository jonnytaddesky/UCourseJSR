'use strict';

///// More of Clousers (Замикання)

// Homework2

// Example 2

/// Clousers have priority on scopechain

// const boardPassengers = function (passengerNumber, secondsBeforeBoarding) {
//     const passengersInGroup = passengerNumber / 2;

//     setTimeout(function () {
//         console.log(`All ${passengerNumber} passengers are now boarding`);
//         console.log(`Each group contains ${passengersInGroup} passengers`);
//     }, secondsBeforeBoarding * 1000);

//     console.log(`The boarding will start in ${secondsBeforeBoarding} seconds`);
// };
// const passengersInGroup = 1500;
// boardPassengers(150, 5);

// Example 1
// let f1;
// const f2 = function () {
//     const x = 11;
//     f1 = function () {
//         console.log(x ** 2);
//     };
// };
// const f3 = function () {
//     const y = 12;
//     f1 = function () {
//         console.log(y ** 2);
//     };
// };

// f2();
// f1();
// console.dir(f1);
// f3();
// f1();
// console.dir(f1);

//////// Clousers (Замикання)

// const safeBooking = function () {
//     let passengerCount = 0;

//     return function () {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     };
// };

// const booker = safeBooking();
// booker();
// booker();
// booker();

// console.dir(booker);
//////// Immediately Invoked Function Expression (IIFE)

// const runOneTime = function () {
//     console.log('You will never see this function call again');
// };
// // runOneTime();
// // runOneTime();

// (function () {
//     console.log('You will never see this function call again');
// })();

// (() => console.log('You will never see this function call again'))();

// Method bind()

// const airline1 = {
//     airlineName: 'SkyUp',
//     iataCode: 'SU',
//     bookings: [],
//     book(flightNumber, passengerName) {
//         console.log(
//             `${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`
//         );
//         this.bookings.push({
//             flight: `${this.iataCode}${flightNumber}`,
//             passengerName,
//         });
//     },
// };

// const airline2 = {
//     airlineName: 'EuroFlights',
//     iataCode: 'EF',
//     bookings: [],
// };
// const airline3 = {
//     airlineName: 'USFlights',
//     iataCode: 'USF',
//     bookings: [],
// };

// const book = airline1.book;

// const bookAirline2 = book.bind(airline2);
// bookAirline2(45, 'John Doe');
// console.log(airline2);

// const bookAirline3 = book.bind(airline3);
// bookAirline3(11, 'Marta Johnson');
// console.log(airline3);

// const bookAirline3Flight21 = book.bind(airline3, 21);
// bookAirline3Flight21('Jack Smith');
// bookAirline3Flight21('Lana Del Ray');
// console.log(airline3);

// airline1.airplanes = 200;
// airline1.purchaseAirplane = function () {
//     console.log(this);
//     this.airplanes++;
//     console.log(this.airplanes);
// };

// document
//     .querySelector('#purchase')
//     .addEventListener('click', airline1.purchaseAirplane.bind(airline1));

// // Partial application

// const getPercentage = (totalValue, value) => (value / totalValue) * 100;
// // console.log(getPercentage(20, 23789));

// const getPercentage23789 = getPercentage.bind(null, 23789);
// console.log(getPercentage23789(10000));

// bind() with EventListener

// methods call() and apply()

// const book = function (flightNumber, passengerName) {
//     console.log(
//         `${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`
//     );
//     this.bookings.push({
//         flight: `${this.iataCode}${flightNumber}`,
//         passengerName,
//     });
// };
// const airline1 = {
//     airlineName: 'SkyUp',
//     iataCode: 'SU',
//     bookings: [],
// book(flightNumber, passengerName) {
//     console.log(
//         `${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`
//     );
//     this.bookings.push({
//         flight: `${this.iataCode}${flightNumber}`,
//         passengerName,
//     });
// },
// }

// airline1.book(346, 'John Smith');
// airline1.book(635, 'James Cameron');
// console.log(airline1);

// const airline2 = {
//     airlineName: 'EuroFlights',
//     iataCode: 'EF',
//     bookings: [],
// };

// const book = airline1.book;

// This doesn't work
// book(345, 'Linda Willams');

// Call ()
// book.call(airline2, 345, 'Linda Willams');
// console.log(airline2);

// book.call(airline1, 111, 'Bob Smith');
// console.log(airline1);

// Apply () - old approach

// const flightData = [111, 'Jeremy Black'];
// // console.log(...flightData);
// book.apply(airline2, flightData);
// console.log(airline2);

// book.call(airline2, ...flightData);
// console.log(airline2);

// Functions Returning Functions

// const greet = function (greetingText) {
//     return function (name) {
//         console.log(`${greetingText} ${name}!`);
//     };
// };

// єєєбааааа сам зробив стрілочну функцію
// const arrGreet = greetingText => firstName =>
//     console.log(`${greetingText} ${firstName}!`);

// arrGreet('Hi')('Jack');

// const hi = greet('Hi');
// hi('Jack');
// hi('John');
// hi('Nick');

// greet('Hey')('Artem');
// Functions Accepting Callback Functions

// const removeSpaces = function (text) {
//     return text.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (text) {
//     const [first, ...others] = text.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher Order Function
// const converter = function (str, func) {
//     console.log(`The original text: ${str}`);
//     console.log(`The converted text: ${func(str)}`);

//     console.log(`Converted by: ${func.name}`);
// };

// converter('Hello to everyone!', upperFirstWord);
// converter('Hello to everyone!', removeSpaces);

// // Callback function are very common in JS
// const twice = num => console.log(num * 2);
// [1, 2, 3].forEach(twice);

// First Class functions VS Functions of the Higher Order

// Send arguments, values and links

// const flightNumber = 'BV328';
// const passenger1123 = {
//     firstName: 'John',
//     lastName: 'Smith',
//     passport: 2616816,
// };

// const checkIn = function (flight, passenger) {
//     flight = 'bv328';
//     passenger.firstName = passenger.firstName.toLowerCase();
//     passenger.lastName = passenger.lastName.toLowerCase();

//     if (passenger.passport === 2616816) {
//         alert('Welcome to the board');
//     } else {
//         alert('Incorrect passport');
//     }
// };

// checkIn(flightNumber, passenger1123);
// console.log(flightNumber);
// console.log(passenger1123);

// // This is the same doing it

// const flight = flightNumber;
// const passenger = passenger1123;

// const changePassportNumber = function (person) {
//     person.passport = Math.trunc(Math.random() * 100000000);
// };

// changePassportNumber(passenger1123);
// checkIn(flightNumber, passenger1123);

// default parameters
// const bookings = [];
// const makeBooking = function (
//     flightNum,
//     passengerNum = 1,
//     price = 99 * passengerNum
// ) {
// Before ES6
// passengerNum = passengerNum || 1;
// price = price || 99;

//     const booking = {
//         flightNum,
//         passengerNum,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);
// };

// makeBooking('QE123');
// makeBooking('QE123', 3, 390);
// makeBooking('QE123', 1);
// makeBooking('QE123', 4);
// makeBooking('QE123', undefined, 400);
