// let names = 'Jack';
// console.log(names);
// names = 'Jane';
// console.log(names);
// let color;
// console.log(color);
// color = 'Black';
// console.log(color);

/********************************
 JavaScript variables names can 
 include
 letters, number, $, _
 JavaScript variables names can't 
 start with number
 *******************************/

// mainColor = 'green'; //camel case
// my_main_color //snake case
// my-main-color // kebab case
// MyMainColor //pascal case


// let x = 'something';
// console.log(x);
// x = 5;
// console.log(x);

//primitive data types

//string
// const someText = 'Some Text';
// console.log(typeof someText);

// //number
// const someNumber = 11;
// console.log(typeof someNumber);

// //boolean
// const someBoolean = true;
// console.log(typeof someBoolean);

// //null
// const someNull = null;
// console.log(typeof someNull);


// //Udefined
// let someUndefined;
// console.log(typeof Undefined);


// //Symbols
// const someSymbols = Symbol();
// console.log(typeof someSymbols);

// // Reference data types

// //Array
// const someArray = [1, 2, 3, 4, 5];
// console.log(typeof someArray);

// //Object
// const someObjectLiteral = {
//     firstProperty: '12',
//     secondProperty: 'secondProperty'
// };
// console.log(typeof someObjectLiteral);


// //Function
// const someFunction = new Function();
// console.log(typeof someFunction);


// //Date
// const someDate = new Date();
// console.log(typeof someDate);


//Conversion to String
//String()

// let x =  String(1112);
// x = String(2 + 2)
// x = String(true)
// x = String(new Date());
// x = String(['one', 'two', 'three'])

//toString()

// x = (35).toString();
// x = (true).toString();


// console.log(x);
// console.log(typeof x);
// console.log(x.length);

//Conversation to Number
//Number()
// 


// const x = '5';
// const y = '3';
// const z = x + y;

// console.log(z)
// console.log(typeof z)


// const firstNumber = 50;
// const secondNumber = 10;
// let result;

// //simple math operations
// result = firstNumber + secondNumber;
// result = firstNumber - secondNumber;
// result = firstNumber * secondNumber;
// result = firstNumber / secondNumber;
// result = firstNumber % secondNumber;

//Math object

// result = Math.PI;
// result = Math.round(3.5);
// result = Math.ceil(3.6);
// result = Math.floor(3.7);
// result = Math.sqrt(16);
// result = Math.abs(-4);
// result = Math.pow(2,3);
// result = Math.min(3,45,2,743,2,1,-1);
// result = Math.max(234,353,231,12,1,64325);
// result = Math.floor(Math.random()*100)+1;


// console.log(result);


//String Manipulation
//Concatenation

// let result;
// const firstName = 'Jack';
// const lastName = 'Braun';
// const space = ' ';
// const age = 25;
// const greeting = 'Hey there!';

// result = firstName + space + lastName;
// result = greeting + space + 'My name is' + space + firstName
// + ' ' + lastName + ". I'm " + age + ' years old.'

// // Escaping


// result = 'I\'m 34 years old';

// result = "I like \"Star wars\" movie";


// // Properties and methods length

// result = 'Hello!'.lengthl
// result = firstName.length;


// //concat
// result = firstName.concat(space,lastName);
// result = greeting.concat(space, 'My name is ',firstName,space,lastName);

// //toUpperCase()
// result = result.toUpperCase();
// result = result.toLowerCase();

// //Arrays index
// result = firstName[1];
// result = 'Hello'.indexOf('l');
// result = 'Hello olo'.lastIndexOf('l');
// result = firstName.indexOf('a');
// result = 'Hello olo'.indexOf('lo');
// result = firstName.indexOf('b');

// //charAt()
// result = firstName.charAt(0);
// const longString = 'Hi, I\'m long stringf';
// result = longString.charAt(longString.length - 1);

// //substring
// result = greeting.substring(0,3);
// result = greeting.substring(4,9);

// //slice
// result = greeting.slice(4,9);
// result = greeting.slice(-6);

// //split
// result = longString.split(' ');
// result = greeting.split(' ');

// const colors = 'red, orange, green, blue'
// result = colors.split(', ')

// //replace
// result = colors.replace('blue', 'yellow');

// //includes
// result = colors.includes('blue');


// console.log(result)


//Tamplate strings

// const brand = 'Toyota'
// const model = 'Camry'
// const color = 'Grey'
// const year = 2023

// let carHtml;

//Old approach before ES6

// carHtml = '<h3>' + 'Car Description' + '</h3>' +
// '<ul>' + 
// '<li>Brand: ' + brand + '</li>' +
// '<li>Model: ' + model + '</li>' +
// '<li>Color: ' + color + '</li>' +
// '<li>Year: ' + year + '</li>' +
// '</ul>';

// document.body.innerHTML = carHtml;


//New approach template literals (strings) ES6

// carHtml = `
//     <h3>Car Description</h3>
//     <ul>
//         <li>Brand: ${brand}</li>
//         <li>Model: ${model}</li>
//         <li>Color: ${color}</li>
//         <li>Year: ${year}</li>
//         <li>Year: ${2010 + 7}</li>
//         <li>Doors: ${getDoorsNumber()}</li>
//         <li>Tax: ${year < 2000 ? '20%' : '10%'}</li>
//     </ul>
// `;

// function getDoorsNumber() {
//     return 5;
// }

// document.body.innerHTML = carHtml;


// let favoriteColor;
// favoriteColor = prompt('What is youe favorite color?');
// console.log('Your favorite color is '+ favoriteColor);

// let firstName;
// let lastName;
// let age;


/********************
         Homework
 ******************/

// firstName = prompt('What is your first name?')
// lastName = prompt('What is your last name?')
// age = prompt('How old are you?')
// console.log('My name is '+ firstName + ' ' + lastName + '. I\'m ' + age + ' years old.')

// const firstName = prompt('What is your first name?')
// const lastName = prompt('What is your last name?')
// const age = prompt('How old are you?')
// console.log('My name is '+ firstName + ' ' + lastName + '. I\'m ' + age + ' years old.')

 
//Comparison Operator
// const x = '5';
// const y = 5;
// let isXMoreThanY = x == y;


// console.log(isXMoreThanY);


// console.log(true==1);
// console.log(false==0);
// console.log(null===undefined);
// console.log(NaN== NaN);

// const x = 2 + 10 / 2;
// console.log(x);
// const y = 10 -x > 10;
// console.log(y);

// let x, y;
// console.log(x, y);
// x = 10 + 5 - 3 * 4;
// console.log(x);

/****************************
 ************Homework2*******
 ***************************/


// const weight = prompt('Enter your weight in kilograms:');
// const height = prompt('Enter your height in meters:');
// const bmi = weight / Math.pow(height, 2);
// const overweight = bmi >= 25;

// console.log(bmi);
// console.log('Are you overweight');
// alert('Are you overweight? ' + overweight);


/****************************
 ************Homework2*******
 ***************************/


 ////If else

//  const age = 13;
//  const isAdult = age >= 18;

//  if(isAdult) {
//         console.log('You can watch this video');
//  }
//  else {
//         // console.log('You can\'t watch this video');
//         const yearLeft = 18 - age;
//         console.log(`You are too young. You can watch this video ${yearLeft} years later`)
//  }


// const birthYear = 2010;
// const yearNow = 2023;
// const age = yearNow - birthYear

// let answer;

// if (age >= 16) {
//         answer = 'Yes'
// } else {
//       answer = 'No'  
// }

// console.log(`Am I adult? - ${answer}`)


// const color = 'Yellow'

// if (color === 'green') {
//         console.log('Go!')
// } else if (color === 'Yellow') {
//         console.log('Get ready!')
// } else if (color === 'red'){
//         console.log('Stop!')
// } else {
//         console.log('Incorrect color!')
// }

/****************************
 ************Homework3*******
 ***************************/

// const weight = prompt('Enter your weight in kilograms:');
// const height = prompt('Enter your height in meters:');
// const bmi = weight / Math.pow(height, 2);
// if( bmi >= 25) {
//         alert('Yes, your BMI is more than normal by ' + (bmi));
//         console.log(`Yes, your BMI is more than normal by ${bmi}`)
// } else {
//         alert('No, your BMI is normal by ' + (bmi));
//         console.log(`No, your BMI is normal by ${bmi}`)
// }

/****************************
 ************Homework3*******
 ***************************/


//JavaScript falsy values:
// 0, '', undefined, null, NaN

// console.log(Boolean(32));
// console.log(Boolean('hello'));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(3.5));


// const age = 18;
// if(age) {
//         console.log('The person was born');
// } else {
//         console.log('The person wasn\'t born yet');
// }

// let weight = 0;


// if(weight) {
//         console.log('Weight is defined.')  
// } else {
//         console.log('Weight is undefined.')   
// }


// AND, OR, NOT

//AND &&

// console.log(true && true); //true
// console.log(true && false); // false
// console.log(false && false); //false

//OR ||

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || false); // false

//NOT !

// console.log(!true); // false
// console.log(!false); // true


// const hasMoney = true;
// const isAdult = true;

// if(hasMoney && isAdult) {
//         console.log('You can buy the drink');
// } else {
//         console.log('You can\'t buy the drink');
// }


// const hasMoney = true;
// const isAWithParent = false;

// if(hasMoney || isAWithParent) {
//         console.log('You can buy the orange');
// } else {
//         console.log('You can\'t buy the orange');
// }


// const hasMoney = true;
// const isAdult = true;
// const isCompletelyDrunk = true;

// if(hasMoney && isAdult && !isCompletelyDrunk) {
//         console.log('You can buy the drink');
// } else {
//         console.log('You can\'t buy the drink');
// }


//switch statement



// if (color === 'green') {
//         console.log('Go!')
// } else if (color === 'Yellow') {
//         console.log('Get ready!')
// } else if (color === 'red'){
//         console.log('Stop!')
// } else {
//         console.log('Incorrect color!')
// }

// const color = 'blue'

// switch(color) {
//     case 'green': 
//         console.log('Go!');
//         break;
//     case 'yellow': 
//         console.log('Get ready!');
//         break;
//     case 'red': 
//         console.log('Stop!');
//         break;
//     default:
//         console.log('Incorrect color');
// }


// const weekday = 'Saturday';

// switch(weekday) {
//     case 'Monday':
//         console.log('Keep calm and pretend it\'s not Monday');
//         break;
//     case 'Tuesday':
//         console.log('Keep calm and pretend it\'s not Tuesday');
//         break;
//     case 'Wednesday':
//         console.log('Keep calm and pretend it\'s not Wednesday');
//         break; 
//     case 'Thursday':
//         console.log('Keep calm and pretend it\'s not Thursday');
//         break; 
//     case 'Friday':
//         console.log('Keep calm and pretend it\'s not Friday');
//         break;
//     case 'Saturday':
//     case 'Sunday':
//         console.log('Keep calm and pretend it\'s not Saturday and Sunday');
//         break; 
//     default:
//         console.log('This is weekday i don\'t know')

// }


//Expression
// Statement

// const number = 10;

// if(number > 0) {
//     const text = 'The number is positive';
// }

// const money = 100
// const cost = 50

// console.log(`You can${money >= cost ? ' ' : ' not '}buy it.`)


/****************************
 **********Homework4*********
 ***************************/


// const age = prompt('Enter your age')
// alert(age >= 18 ? 'You can buy the alcohol' : 'You can not buy the alcohol.');
// console.log( 'You can buy the alcohol')

// const age = prompt('Enter your age')
// const message = age >= 18 ? 'You can buy the alcohol.' : 
// 'You can not buy the alcohol.'
// console.log(message);
// alert(message)

// 'use strict';

// let hasCertif = false;
// const passExam = true;

// if (passExam) hasCertif = true;
// if (hasCertif) console.log('Wow!');

// // const interface = 'Video';
// const package = 'Mypackage';

//FUNCTION , don't repeat yourself DRY


// function printText() {
//     console.log('Hello to everyone!');
// }

// printText();
// printText();
// printText();
// Number('79');
// const number = Number('79');
// console.log(number);

// function colorizer(item, color, colorCode) {
// //     console.log(item, color);
//     const colorizedItem = `Then ${item} is ${color}. The code of the color is ${colorCode}.`;
// //     console.log(colorizedItem);
//     return colorizedItem;
// }


// const messageFromColorised = colorizer('desc', 'red', 99);
// console.log(`We have the following message: ${messageFromColorised}`)

// const messageFromColorised1 = colorizer('hand', 'green', 10);
// console.log(`We have the following message: ${messageFromColorised1}`)


//Function Declaration vs Expression

// function getAge1(birthYear, yearNow) {
//     // const age = YearNow - birthYear;
//     return yearNow - birthYear;
// }

// const myAge = getAge1(2005, 2023);
// console.log(myAge);
// // console.log(getAge1(2005, 2023));

// const getAge2 = function (birthYear, yearNow) {
//     return yearNow - birthYear;
// }

// const myAge2 = getAge2(2005, 2023);
// console.log(myAge2);
// console.log(getAge2(2000, 2023));


// ARROW FUNCTION


// const getAge2 = function (birthYear, yearNow) {
//         return yearNow - birthYear;
// }

// const myAge2 = getAge2(2005, 2023);
// console.log(myAge2);

// const getAge3 = (birthYear, yearNow) => yearNow - birthYear;
// const myAge3 = getAge3(2005, 2023);
// console.log(myAge3);

// const canBuyAlcohol = (birthYear, yearNow) => {
//     const age = yearNow - birthYear;
//     const isPersonOlderThan21 = age >= 21 ? true : false;
//     return isPersonOlderThan21;
// };

// console.log(canBuyAlcohol(1995, 2023))

// Functions Calling Other Functions


// function colorMixer (color1, color2) {
//     const newColor = `${color1} + ${color2}`
//     return newColor;
// }

// function colorizer(item, color1, color2) {
// //  console.log(item, color);
//     const color = colorMixer(color1, color2);
//     const colorizedItem = `Then ${item} is ${color}`;
// //  console.log(colorizedItem);
//     return colorizedItem;
// }

// const colorizedCar = colorizer('car', 'red', 'orange');
// console.log(colorizedCar);


/****************************
 **********Homework5*********
 ***************************/

// 'use strict';

// const getAverage = (month1, month2, month3) => (month1 + month2 + month3) / 3;
// // console.log(getAverage(1, 2, 3))

// // The first quarter
// const dept1AverSales1 = getAverage(35467, 29842, 38501);
// const dept2AverSales1 = getAverage(70533, 50121, 33899);
// console.log(dept1AverSales1, dept2AverSales1);

// // The second quarter
// const dept1AverSales2 = getAverage(50301, 21984, 19207);
// const dept2AverSales2 = getAverage(72381, 41562, 29465);
// console.log(dept1AverSales2, dept2AverSales2);

// function printBonus (dept1AverSales, dept2AverSales) {
//     if (dept1AverSales > dept2AverSales) {
//         const diff = dept1AverSales - dept2AverSales;
//         const percent = diff / dept2AverSales * 100;
//         if (percent >= 30) {
//             console.log(`Dept 1 will get a bonus of ${percent}%`);
//         } else {
//             console.log(`No bonus in this quarter`);
//         }
//     } else if (dept2AverSales > dept1AverSales) {
//         const diff = dept2AverSales - dept1AverSales;
//         const percent = diff / dept1AverSales * 100;
//         if (percent >= 30) {
//             console.log(`Dept 2 will get a bonus of ${percent}%`);
//         } else {
//             console.log(`No bonus in this quarter`);
//         }
//     } else {
//         console.log(`No bonus in this quarter`);
//     }
// }

// printBonus(dept1AverSales1, dept2AverSales1);
// printBonus(dept1AverSales2, dept2AverSales2);

// function printBonus1 (dept1AverSales, dept2AverSales) {
//     if (dept1AverSales > dept2AverSales && dept1AverSales >= 1.3 * dept2AverSales) {
//         const diff = dept1AverSales - dept2AverSales;
//         const percent = diff / dept2AverSales * 100;
//         console.log(`Dept 1 will get a bonus of ${percent}%`);
      
//     } else if (dept2AverSales > dept1AverSales && dept2AverSales >= 1.3 * dept1AverSales) {
//         const diff = dept2AverSales - dept1AverSales;
//         const percent = diff / dept1AverSales * 100;
//         console.log(`Dept 2 will get a bonus of ${percent}%`);
//     } else {
//         console.log(`No bonus in this quarter`);
//     }
// }

// printBonus1(dept1AverSales1, dept2AverSales1);
// printBonus1(dept1AverSales2, dept2AverSales2);
/****************************
 **********Homework5*********
 ***************************/


 // Arrays

// const color1 = 'red';
// const color2 = 'orange';
// const color3 = 'yellow';
// const color4 = 'green';
// const color5 = 'blue';
// const color6 = 'indigo';
// const color7 = 'violet';

// const rainbowColors = ['red','orange', 'yellow','green','blue','indigo','violet'];

// console.log(rainbowColors[0]);
// console.log(`The sky is ${rainbowColors[4]}`);
// rainbowColors[5] = 'dark blue';
// rainbowColors[rainbowColors.length] = 'indigo';
// console.log(rainbowColors);

// const stringNumbers = [];
// stringNumbers[0] = 'one';
// stringNumbers[1] = 'two';
// stringNumbers[2] = 'three';


// const stringNumbers = new Array('one', 'two', 'three');

// console.log(stringNumbers);


// const numbers = [34,5,32,67];
// console.log(numbers);

// const anyItems = [4, true, new Date(), 'something'];
// console.log(anyItems);


// Array Methods

// const numbers = [23, 235, 632, 623, 3, 12, 42];
// let result;

// result = numbers.length;
// result = Array.isArray(numbers);
// result = numbers.indexOf(632);
// //push() pop()

// result = numbers.push(7);
// result = numbers.pop();
// result = numbers.pop();

// //unshift() shift()

// result = numbers.unshift(3);
// result = numbers.shift();

// result = numbers.push(1,2,3);
// result = numbers.unshift(4,5,6);

// //splice

// result = numbers.splice(3, 1);
// result = numbers.splice(1, 3);

// //reverse

// result = numbers.reverse();

// //slice

// result = numbers.slice(1, 4);

// //concat

// result = numbers.concat(result);


// console.log(result);
// console.log(numbers);

/****************************
 **********Homework6*********
 ***************************/

//  'use strict'
// const calculateTips = bill => bill < 20 ? bill * 0.2 : bill * 0.15;


// const bills = [11, 20, 47];

// const tips = [calculateTips(bills[0]), calculateTips(bills[1]), calculateTips(bills[2])];
// console.log(tips)

// const totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(bills, tips, totalBills)



// bill < 20 tips = 20%;
// bill >= 20 tips = 15%;


//Onjects

// myData = ['John', 'Smith', 1975, 'programmer',
// ['Bella','Dock']];

// console.log(myData[4]);


// johnObject = {
//     firstName: 'John', 
//     lastName: 'Smith', 
//     birthYear: 1975, 
//     job: 'Programmer', 
//     familyMembers: ['Bella', 'Dock', 'John']
// };

// console.log(johnObject);
// console.log(johnObject.firstName);
// console.log(johnObject['firstName']);

// const baseName = 'Name';
// console.log(johnObject['last' + baseName]);


// const userInput = prompt('What do you want to know anout Johns? Choose between firstName, lastName, birthYear, job, familyMembers')

// if (johnObject[userInput]) {
//     console.log(johnObject[userInput]);
// } else {
//     console.log('This property does not exist! Choose between firstName, lastName, birthYear, job, familyMembers')
// }


// Create new properties

// johnObject.location = 'Ukraine';
// console.log(johnObject)

//Challenge
// console.log(`${johnObject.firstName} has ${johnObject.familyMembers.length} family members and the first one is ${johnObject.familyMembers[0]}`)

// Object Methods

// johnObject = {
//     firstName: 'John', 
//     lastName: 'Smith', 
//     birthYear: 1995, 
//     job: 'Programmer', 
//     familyMembers: ['Bella', 'Dock', 'John'],
//     hasDriverLicence: true,
//     // сalcAge: function (birthYear) {
//     //     return 2023 - birthYear;
//     // }
//     // сalcAge: function () {
//     //     // console.log(this);
//     //     return 2023 - this.birthYear;
//     // }
//     сalcAge: function () {
//         this.age = 2023 - this.birthYear;
//         return 2023 - this.birthYear;
//     },
//     // Challange 2
//     getSummary: function() {
//         return `${this.firstName} is ${this.сalcAge()}-year old ${this.job} and he has ${this.hasDriverLicence ? 'a': 'no'} driver licence`
//     }
// };


// console.log(johnObject.сalcAge());
// // console.log(johnObject['сalcAge'](1995));


// console.log(johnObject.сalcAge());
// console.log(johnObject.сalcAge());
// console.log(johnObject.сalcAge());
// console.log(johnObject.сalcAge());
// console.log(johnObject.сalcAge());
// console.log(johnObject.age);
// console.log(johnObject.age);
// console.log(johnObject.age);
// console.log(johnObject.getSummary());


//Object tasks

//home task 9
// jack = {
//     firstName: 'Jack',
//     lastName: 'White',
//     weight: 79,
//     height: 1.70,
//     getBMI: function() {
//         this.bmi = this.weight / (this.height * this.height);   
//         return this.bmi; 
//     }
// }

// mike = {
//     firstName: 'Mike',
//     lastName: 'Black',
//     weight: 91,
//     height: 1.93,
//     getBMI: function() {
//         this.bmi = this.weight / (this.height * this.height);   
//         return this.bmi;    
//     }
//     // getComparison: function() {
//     //     return `${jackObject.firstName} ${jackObject.lastName} BMI (${this.getBMIJack}) is ${jackObject.comparison ? 'higher' : 'smaller'} than ${mikebject.firstName} ${mikebject.lastName} (${this.getBMIMike})`
//     // }
// }

// console.log(jack.getBMI())
// console.log(mike.getBMI())
// console.log(`${jack.firstName} ${jack.lastName} BMI (${jack.bmi}) is ${jack.bmi > mike.bmi ? 'higher' : 'smaller'} than ${mike.firstName} ${mike.lastName} (${mike.bmi})`)


// jack = {
//     firstName: 'Jack',
//     lastName: 'White',
//     weight: 79,
//     height: 1.70,
//     calcBMI: function() {
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi;
//     }
//     // getBMIJack: function() {
//     //     this.bmi = this.weight / (this.height * this.height);   
//     //     return this.bmi; 
//     // }
// };

// mike = {
//     firstName: 'Mike',
//     lastName: 'Black',
//     weight: 91,
//     height: 1.93,
//     calcBMI: function() {
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi;
//     }
//     // getBMIMike: function() {
//     //     this.bmi = this.weight / (this.height * this.height);   
//     //     return this.bmi;   
//     // }
// };


// console.log(jack.calcBMI());
// // console.log(jackObject.bmi);
// console.log(mike.calcBMI());
// // console.log(jackObject.bmi);

// if(jack.bmi > mike.bmi) {
//     console.log(`${jack.firstName} ${jack.lastName} BMI (${jack.bmi}) is higher than ${mike.firstName} ${mike.lastName} (${mike.bmi})!`)
// } else if (mike.bmi > jack.bmi){
//     console.log(`${mike.firstName} ${mike.lastName} BMI (${mike.bmi}) is higher than ${jack.firstName} ${jack.lastName} (${jack.bmi})!`)
// } else {
//     console.log(`${mike.firstName} ${mike.lastName} and ${jack.firstName} ${jack.lastName} BMI are equal ${mike.bmi}!`)
// }

//FOR

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Push ups repetition ${rep}`);
// };

//Loops and Arrays

// const user123 = ['John', 'Smith', 1991, 'developer', ['Adam', 'Jemy'], false];

// const types = [];
// const types1 = [];
// for(let i = 0; i < user123.length; i++) {
//     types.push(typeof user123[i]);
//     // types.unshift(typeof user123[i]);
//     // console.log(user123[i], typeof user123[i]);
//     types1[i] = typeof user123[i];
// }
// console.log(types)
// console.log(types1)

// const birthYears = [1974, 1994, 2000, 2003];
// const ages = [];

// for (let i = 0; i < birthYears.length; i++) {
//     ages.push(2023 - birthYears[i]);
// }

// console.log(ages)


//Break & Continue

// const user123 = ['John', 'Smith', 1991, 'developer', ['Adam', 'Jemy'], false];

// console.log('Continue example');
// for(let i = 0; i < user123.length; i++) {
//     if(typeof user123[i] !== 'string') continue; 
//     console.log(user123[i], typeof user123[i]);
// }

// console.log('break example');

// for(let i = 0; i < user123.length; i++) {
//     if(typeof user123[i] === 'number') break; 
//     console.log(user123[i], typeof user123[i]);
// }

//Loop in Loop & reverse iteration

// const user123 = ['John', 'Smith', 1991, 'developer', ['Adam', 'Jemy'], false];

// for (let i = user123.length - 1; i >= 0; i--) {
//     console.log(user123[i]);
// }

// for (let exercise = 1; exercise <= 5; exercise++) {
//     console.log(`Exercise ${exercise}`);
//     for (let appr = 1; appr <= 4; appr++){
//         console.log(`Appr ${appr}`);
//         for (let rep = 1; rep <= 18; rep++) {
//             console.log(`Rep ${rep}`);
//         }
//     }
// }

//Loop While

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Push ups repetition ${rep}`);
// };
// let rep = 1;
// while (rep <= 10) {
//     console.log(`Push ups repetition ${rep}`);
//     rep++;
// }

// let diceNumber = Math.trunc(Math.random() * 6) + 1;
// while (diceNumber !== 6) {
//     console.log(diceNumber);
//     diceNumber = Math.trunc(Math.random() * 6) + 1;
// }

//Homework 10

// const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];
// const tips = [];
// const totals = [];
// const calculateTips = bill => bill < 20 ? bill * 0.2 : bill * 0.15;

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calculateTips(bills[i]))
//     totals.push(calculateTips(bills[i]) + bills[i]);
// }


// // console.log(bills, tips, totals)

// let totalSum = 0;
// function calculateAverage(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         totalSum += arr[i];
//     }
//     return totalSum/arr.length;
// }

// // const calculateAverage = function(arr) {
// //     for (let i = 0; i < arr.length; i++) {
// //         totalSum += arr[i];
// //     }
// //     return totalSum/arr.length;
// // }
// console.log(calculateAverage(totals))
//Homework 10

