'use strict';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const workingHours = {
    [weekDays[2]]: {
        open: 10,
        close: 23,
    },
    [weekDays[4]]: {
        open: 10,
        close: 23,
    },
    [weekDays[5]]: {
        open: 0,
        close: 24,
    },
    [weekDays[6]]: {
        open: 12,
        close: 23,
    },
};

const japaneseRestaurant = {
    restName: 'Banzai',
    location: '108 Markham Woods Rd, Longwood, USA',
    categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
    appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
    mainMenu: ['Sushi', 'Ramen', 'Tempura'],

    // Inhanced syntax of ES6 object literals
    workingHours,

    orderFood(appetizersIndex, mainMenuIndex) {
        return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
    },
    foodDelivery({
        mainMenuIndex = 0,
        appetizersIndex = 0,
        address,
        deliveryTime = '18:00',
    }) {
        console.log(
            `Your order on the way to you! ${this.appetizers[appetizersIndex]} and ${this.mainMenu[mainMenuIndex]} will be arrived to ${address} at ${deliveryTime}`
        );
    },
    orderSushi(ing1, ing2, ing3) {
        console.log(`You have ordered with ${ing1}, ${ing2}, ${ing3}`);
    },
    orderRamen(noodle, ...otherIngs) {
        console.log(noodle);
        console.log(otherIngs);
    },
};

/////////////////////////
//// HW3

/*
underscore_case
  first_name
next_Variable
   Calculate_AGE
arrived_flight
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//     const text = document.querySelector('textarea').value;
//     const lines = text.split('\n');
//     // console.log(lines);
//     for (const line of lines) {
//         const [firstWord, secondWord] = line.toLowerCase().trim().split('_');
//         const ouput = `${firstWord}${secondWord.replace(
//             secondWord[0],
//             secondWord[0].toUpperCase()
//         )}`;
//         console.log(ouput);
//     }
// });

// document.querySelector('button').addEventListener('click', function () {
//     const text = document.querySelector('textarea').value;
//     // console.log(text);
//     const textFirstRow = text.split('\n');
//     // console.log(textFirstRow);
//     for (const value of textFirstRow) {
//         const item = value.trim().toLowerCase();
//         // console.log(item);
//         const firstPart = item.split('_')[0];
//         // console.log(firstPart);
//         const lastPart = item.substring(item.lastIndexOf('_') + 1);
//         const resLastPart = lastPart[0].toUpperCase() + lastPart.slice(1);
//         // console.log(resLastPart);
//         const result = firstPart + resLastPart;
//         console.log(result);
//     }
// });
/////////////////////////
///  String in JS

// const airline = 'SkyUp Airline';
// const airplane = 'Boeing 737';

// console.log(airplane[0]);
// console.log(airplane[1]);
// console.log(airplane[2]);
// console.log('SkyUp'[0]);

// console.log(airline.length);

// console.log(airline.indexOf('p'));
// console.log(airplane.indexOf('7'));
// console.log(airplane.lastIndexOf('7'));
// console.log(airline.indexOf('Up'));

// console.log(airplane.slice(7));
// console.log(airplane.slice(0, 6));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airplane.slice(airplane.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(2, -2));

// // '20A B C D E F'

// const checkMidleSeat = function (seat) {
//     // b and e middle seat
//     const seatLetter = seat.slice(-1);
//     if (seatLetter === 'B' || seatLetter === 'E') {
//         console.log('This is middle seat');
//     } else {
//         console.log('This is not a middle seat');
//     }
// };

// checkMidleSeat('21A');
// checkMidleSeat('7B');
// checkMidleSeat('10C');
// checkMidleSeat('15E');

// const x = new String('Hello');
// console.log(typeof x);
// console.log(typeof x.slice(2));

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// /// Fix the passenger name

// const passengerName = 'liNDa';
// const passengerNameLower = passengerName.toLowerCase();
// console.log(passengerNameLower);
// const passengerNameFixed =
//     passengerNameLower[0].toLocaleUpperCase() + passengerNameLower.slice(1);
// console.log(passengerNameFixed);

// // Email validation

// const email = 'someemail@gmail.com';
// const loginEmail = '   SomeEmail@Gmail.com \n';

// const emailLower = loginEmail.toLowerCase();
// const emailTrimmed = emailLower.trim();
// console.log(emailTrimmed);

// const emailNormalized = loginEmail.toLowerCase().trim();
// console.log(emailNormalized);

// console.log(email === emailNormalized);

// // Replacing

// const ticketPriceEU = '197,23€';
// const ticketPriceUS = ticketPriceEU.replace(',', '.').replace('€', '$');
// console.log(ticketPriceUS);

// const announcement =
//     'All passenger of flight EG234 come to boarding door 18. Boarding door 18!';
// console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replace(/door/g, 'gate'));

// // Methods return boolean

// console.log(airplane);
// console.log(airplane.includes('737'));
// console.log(airplane.includes('738'));

// console.log(airplane.startsWith('Bo'));
// console.log(airplane.startsWith('Ba'));

// console.log(airplane.endsWith('737'));

// // Example

// const checkLuggage = function (luggage) {
//     const luggageLower = luggage.toLowerCase();
//     if (luggageLower.includes('knife') || luggageLower.includes('gun')) {
//         console.log('You are not allowed on board');
//     } else {
//         console.log('Welcome to the board!');
//     }
// };

// checkLuggage('Food, jeans, socks and Swiss Knife');
// checkLuggage('Laptop and food');
// checkLuggage('Camera, food and Gun for protection');

// // split and join
// console.log('My+name+is+Artem'.split('+'));

// const [firsName, lastName] = 'Artem Syvohlaz'.split(' ');
// console.log(firsName, lastName);

// console.log(['Mr.', firsName, lastName.toUpperCase()].join(' '));

// const capitalizeName = function (firstName) {
//     const names = firstName.split(' ');
//     const namesCapitalize = [];
//     for (const n of names) {
//         // namesCapitalize.push(n[0].toUpperCase() + n.slice(1));
//         namesCapitalize.push(n.replace(n[0], n[0].toUpperCase()));
//     }
//     const capitalizedFullNames = namesCapitalize.join(' ');
//     return capitalizedFullNames;
// };

// console.log(capitalizeName('artem syvohlaz'));
// console.log(capitalizeName('john smith'));

// // Padding

// const message = 'Hi there!';
// const start = message.length + 10;
// const end = start + 11;
// console.log(message.padStart(27, '-').padEnd(37, '-'));

// const maskCreditCard = function (cardNumber) {
//     const strCardNumber = cardNumber + '';
//     const lastFour = strCardNumber.slice(-4);
//     return lastFour.padStart(strCardNumber.length, '*');
// };

// console.log(maskCreditCard(6546875984625791));
// console.log(maskCreditCard('8479568472493569'));

// // Repeat()

// const greeting = 'Hi!';
// console.log(greeting.repeat(50));

// const howMuchYouLoveSomebody = function (loveNumber) {
//     console.log(`I love you ${'❤️'.repeat(loveNumber)}`);
// };

// howMuchYouLoveSomebody(1000);

///////////////////////////////
/// MAP Iterations

// const question = new Map([
//     [
//         'question',
//         'What is the most popular programming language for front-end?',
//     ],
//     [1, 'JavaScript'],
//     [2, 'Java'],
//     [3, 'Python'],
//     ['correctAnswer', 1],
//     [true, 'Correct Answer :D'],
//     [false, 'This is incorrect answer :( Try again!'],
// ]);

////////////////////////
//// which structure data use and when?

// console.log(question);

// converting objects to maps
// console.log(Object.entries(workingHours));
// const workingHoursMap = new Map(Object.entries(workingHours));
// console.log(workingHoursMap);

// Quiz app
// console.log(question.get('question'));

// for (const [key, value] of question) {
//     if (typeof key === 'number') {
//         console.log(`${key}: ${value}`);
//     }
// }

// const answer = Number(prompt('Choose the optionnumber: '));
// console.log(answer);

// console.log(question.get(question.get('correctAnswer') === answer));

//  Converting maps to arrays
// console.log([...question]);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

/////////////////////////////////////////
//////////////////   MAP Basics

// const restaurant = new Map();
// restaurant.set('Name', 'Bench');
// restaurant.set(1, 'London, England');
// restaurant.set(2, 'Paris, France');
// console.log(restaurant.set(3, 'Kyiv, Ukraine'));

// restaurant
//     .set('Categories', ['Japanese', 'Sushi', 'Vegetarian', 'Organic'])
//     .set('Open', 10)
//     .set('Close', 23)
//     .set(true, 'Bench is open :)')
//     .set(false, 'Bench is close :(');

// console.log(restaurant.get('Name'));
// console.log(restaurant.get(true));

// const currentTime = 11;
// console.log(
//     restaurant.get(
//         currentTime > restaurant.get('Open') &&
//             currentTime < restaurant.get('Close')
//     )
// );

// console.log(restaurant.has(true));
// console.log(restaurant.delete(1));
// // console.log(restaurant.clear());
// const arr = [1, 2, 3];
// restaurant.set(arr, 'Hello!');
// restaurant.set(document.querySelector('h2'), 'Heading');
// console.log(restaurant);
// console.log(restaurant.size);

// console.log(restaurant.get(arr));

/////////////////////////////////////////
///////////////////  SET

// const orders = new Set([
//     'Sushi',
//     'Ramen',
//     'Sushi',
//     'Tempura',
//     'Ramen',
//     'Sushi',
// ]);

// console.log(orders);

// console.log(new Set('Hello!'));
// console.log(new Set());
// console.log(orders.size);
// console.log(orders.has('Sushi'));
// console.log(orders.has('Pizza'));
// orders.add('Edamame');
// orders.add('Edamame');
// orders.delete('Tempura');
// // orders.clear();
// console.log(orders);

// for (const order of orders) {
//     console.log(order);
// }

// // Remove duplicates

// const mealIngridients = [
//     'Rice',
//     'Pepper',
//     'Garlic',
//     'Pepper',
//     'Garlic',
//     'Meat',
//     'Meat',
//     'Garlic',
// ];

// console.log(new Set(mealIngridients));
// console.log(new Set(mealIngridients).size);

// console.log(new Set('artem syvohlaz').size);

// const mealIngridientsSet = new Set(mealIngridients);
// console.log(mealIngridientsSet);

// const mealIngridientsUnique = [...mealIngridientsSet];
// console.log(mealIngridientsUnique);

// console.log(`Rate for ${game.team1} victory: ${game.odds.team1}`);
// console.log(`Rate for draw: ${game.odds.draw}`);
// console.log(`Rate for ${game.team2} victory: ${game.odds.team2}`);
///////////////////////////////////////
//////////////////// Loop and object

// Property names
// const props = Object.keys(workingHours);
// console.log(props);

// console.log(`"Banzai" opens ${props.length} days in a week.`);

// for (const day of props) {
//     console.log(day);
// }

// Property values

// const values = Object.values(workingHours);
// console.log(values);

// Property names and values

// const entries = Object.entries(workingHours);
// console.log(entries);

// for (const entry of entries) {
//     console.log(entry);
// }
// for (const [day, { open, close }] of entries) {
//     // console.log(entry);
//     console.log(
//         `Restaurant "Banzai" on ${day} opens at ${open} and closes ${close} `
//     );
// }

///////////////////////////////////////////
////////////////// Optional chaining (?.)

// if (japaneseRestaurant.workingHours && japaneseRestaurant.workingHours.thu) {
//     console.log(japaneseRestaurant.workingHours.thu.open);
// }

// Using optional chaining

// console.log(japaneseRestaurant.workingHours.thu?.open);
// console.log(japaneseRestaurant.workingHours?.thu?.open);
// const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of daysOfWeek) {
//     // console.log(day);
//     const open = japaneseRestaurant.workingHours[day]?.open ?? 'never';
//     console.log(`On ${day} restaurant opens at ${open}`);
// const close = japaneseRestaurant.workingHours[day]?.close ?? 'never';
// console.log(`On ${day} restaurant closes at ${close}`);
// }

// ////////////////////////////////
///////////////Methods use optional chaining

// console.log(japaneseRestaurant.orderFood?.(1, 2) ?? 'Method does not exist');
// console.log(japaneseRestaurant.order?.(1, 2) ?? 'Method does not exist');

// const posts = [
//     { names: 'JS is cool', username: 'Ted' },
//     { names: 'JS is shit!', username: 'Dick' },
// ];

// const users = [];
// console.log(posts[0]?.names ?? 'This post does not exist');
// console.log(posts[2]?.names ?? 'This post does not exist');
// // Check the array is empty
// console.log(posts[0]?.names ?? 'This post does not exist');
// console.log(users[0]?.names ?? 'The array is empty');

// if (users.length > 0) {
//     console.log(users[0].names);
// } else {
//     console.log('The array is empty');
// }

// if (japaneseRestaurant.workingHours.fri) {
//     console.log(japaneseRestaurant.workingHours.fri.open);
// }

// Inhansed object literals

// console.log(japaneseRestaurant);

// For of loop
// const menu = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];
// console.log(menu);

// for (const food of menu) {
//     console.log(food);
// if (food == 'Sushi') {
//     break;
// }
// }

// for (const food of menu.entries()) {
//     console.log(`${food[0] + 1}. ${food[1]}`);
// }
// for (const [index, food] of menu.entries()) {
//     console.log(`${index + 1}. ${food}`);
// }

// console.log([...menu.entries()]);

// japaneseRestaurant.guestsNumber = 0;

// const guests = japaneseRestaurant.guestsNumber || 5;
// console.log(guests);

// Nullish value: null and undefined (NOT 0 or '')
// const guests1 = japaneseRestaurant.guestsNumber ?? 5; // Work with nullish values
// console.log(guests1);

// && and ||

// OR (||) operator Use any data types, return any data types,
// Short-curcuit evaluation
// console.log(5 || 'Hello!');
// console.log('Hello!' || 5);
// console.log('' || 'Hello!');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || '' || 0 || 'Hey' || 23 || null);

// japaneseRestaurant.guestsNumber = 0;

// const guests = japaneseRestaurant.guestsNumber
//     ? japaneseRestaurant.guestsNumber
//     : 5;

// console.log(guests);

// const guests1 = japaneseRestaurant.guestsNumber || 5;
// console.log(guests1);

// AND (&&) operator Use any data types, return any data types,
// Short-curcuit evaluation

// console.log(0 && 'Hey');
// console.log(1 && 'Hey');
// console.log('Hey' && 34 && 0 && 44 && null);

// if (japaneseRestaurant.orderRamen) {
//     japaneseRestaurant.orderRamen('Something');
// }

// japaneseRestaurant.orderRamen && japaneseRestaurant.orderRamen('Something');

///////////////////////// Pattern REST//////////////////////////
////////////////////////////////////// 1. Rest pattern with destructuring
////////////////////////////////////// Rest pattern in arrays
// This is spread operator, because ... are on the right side of =
// const arr = [1, 2, ...[3, 4]];

// This is rest operator, because ... are on the left side of =
// const [x1, x2, ...items] = [1, 2, 3, 4];
// console.log(x1, x2, items);

// ALL food in one array
// const [...otherFood] = [
//     ...japaneseRestaurant.appetizers,
//     ...japaneseRestaurant.mainMenu,
// ];
// console.log(otherFood);

//////////////////////////////////// Rest pattern in objects

// const { sat, sun, ...weekdays } = japaneseRestaurant.workingHours;
// console.log(sat, sun, weekdays);

////////////////////////////////// 2. Rest pattern with function

// const sum = function (...nums) {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//     }
//     console.log(sum);
// };

// sum(2, 5);
// sum(1, 4, 7, 3);

// const numbers = [3, 44, 2];

// sum(...numbers);

// japaneseRestaurant.orderRamen('Color noodle', 'meat', 'chicken', 'onion');

// const arr = [1, 3, 5];

////////////////////////////// Old bad approach
// const newArr = [7, 9, arr[0], arr[1], arr[2]];
// console.log(newArr);

//////////////////////////// New approach with spread operator

// const newArrSpread = [7, 9, ...arr];
// console.log(newArrSpread);
// console.log(...newArrSpread);

// const newMenu = [...japaneseRestaurant.mainMenu, 'Miso Salmon'];
// console.log(newMenu);

/////////////// Array copy
// const categoriesCopy = [...japaneseRestaurant.categories];
// console.log(categoriesCopy);

///////////////////Merge Arrays

// const menu = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];
// console.log(menu);

///////////////////////////// Iterable - arrays, strings, maps, sets.
///////////////////////////// OBJECTS AREN'T ITERABLE.

////////////////////////// Spread with string

// const greeting = 'Hey';
// const greetingLetters = [...greeting];
// console.log(greetingLetters);
// console.log(...greetingLetters);

// const ingridients = [
//     prompt(`Ingridient 1 for your sushi?`),
//     prompt(`Ingridient 2 for your sushi?`),
//     prompt(`Ingridient 3 for your sushi?`),
// ];
// console.log(ingridients);

// japaneseRestaurant.orderSushi(...ingridients);

// Objects
// const newJapaneseRrestaurant = {
//     foundationDate: 2011,
//     ...japaneseRestaurant,
//     owner: 'Suzuki',
// };

// console.log(newJapaneseRrestaurant);

// const japaneseRestaurantCopy = { ...japaneseRestaurant };
// japaneseRestaurant.restName = 'Suzuki Sushi';
// console.log(japaneseRestaurantCopy.restName);
// console.log(japaneseRestaurant.restName);
// japaneseRestaurant.foodDelivery({
//     address: '18 Markham Woods Rd, Longwood, USA',
// });

// japaneseRestaurant.foodDelivery({
//     deliveryTime: '12:30',
//     address: '18 Markham Woods Rd, Longwood, USA',
//     mainMenuIndex: 1,
//     appetizersIndex: 0,
// });

///////////////// Destructuring Object

// const { workingHours, restName, categories } = japaneseRestaurant;
// console.log(workingHours, restName, categories);

// const { menu = [], appetizers: starterMenu = [] } = japaneseRestaurant;
// console.log(menu, starterMenu);

// let x = 3;
// let y = 5;
// const obj = { x: 11, y: 22, z: 33 };
// ({ x, y } = obj);
// console.log(x, y);

////////////////////////// Nested Objects

// const {
//     sat: { open: openHours, close: closeHours },
// } = workingHours;
// console.log(openHours, closeHours);

// Destructuring Arrays

// const arr = [3, 5, 7];
// const x1 = arr[0];
// const x2 = arr[1];
// const x3 = arr[2];

// const [y1] = arr;
// console.log(y1);

// const [a, b, c] = arr;
// console.log(a, b, c);

// console.log(arr);

// let [main, , secondary] = japaneseRestaurant.categories;
// console.log(main, secondary);

// Swapping variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// Return two values from function

// const [appetizer, mainFood] = japaneseRestaurant.orderFood(2, 1);
// console.log(appetizer, mainFood);

// Nested destructuring
// const nestedArr = [1, 2, [7, 9]];

// const [h, , j] = nestedArr;
// console.log(h, j);

// const [f, , [g, e]] = nestedArr;
// console.log(f, g, e);

// Default values

// const unknownArr = [3, 5];

// const [h = 0, i = 0, j = 0] = unknownArr;
// console.log(h, i, j);

// const slvmsv = [1, 3, 4, 6, 2, 43, 5, 2, 734, 23, 235, 45, 7, 3, 5];

// for (let i = 0; i < slvmsv.length; i++) {
//     console.log(slvmsv[i]);
// }

// console.log(...slvmsv);

// const game = {
//     team1: 'Real Madrid',
//     team2: 'Barcelona',
//     players: [
//         [
//             'Courtois',
//             'Vazquez',
//             'Militao',
//             'Nacho',
//             'Mendy',
//             'Casemiro',
//             'Valverde',
//             'Modrich',
//             'Kroos',
//             'Vinicius',
//             'Benzema',
//         ],
//         [
//             'Stegen',
//             'Mingueza',
//             'Araujo',
//             'Lenglet',
//             'Dest',
//             'Busquets',
//             'Jong',
//             'Alba',
//             'Messi',
//             'Pedri',
//             'Dembele',
//         ],
//     ],
//     score: '2:1',
//     scored: ['Kroos', 'Benzema', 'Mingueza'],
//     date: 'Apr 10th, 2021',
//     odds: {
//         team1: 1.48,
//         draw: 2.53,
//         team2: 4.25,
//     },
// };

// // 1
// // const player1 = [...game.players[0]];
// // const player2 = [...game.players[1]];
// const [players1, players2] = game.players;
// console.log(players1, players2);
// // console.log(player2);

// // 2
// const [goalkeeper, ...fieldPlayers] = players1;
// console.log(goalkeeper, fieldPlayers);

// // 3
// // const [...allPlayers] = [...players1, ...players2];
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4
// const players1Total = [
//     ...players1,
//     'Marcelo',
//     'Isco',
//     'Asensio',
//     'Diaz',
//     'Odriozola',
// ];
// console.log(players1Total);

// // 5
// const { team1 } = game.odds;
// const {
//     odds: { team1, draw, team2 },
// } = game;
// // console.log(team1, draw, team2);
// console.log(team1);
// const { draw } = game.odds;
// console.log(draw);
// const { team2 } = game.odds;
// console.log(team2);

// // 6
// const printGoals = function (...gamePlayers) {
//     for (let i = 0; i < gamePlayers.length; i++) {
//         console.log(gamePlayers[i]);
//     }
//     console.log(`${gamePlayers.length} goals scored.`);
// };

// // printGoals('Hachos', 'Messi');
// printGoals(...game.scored);

// // 7 // if use && than search first falsy value
// team1 < team2 && console.log(`${game.team1} is more likely to win`);
// team1 > team2 && console.log(`${game.team2} is more likely to win`);
