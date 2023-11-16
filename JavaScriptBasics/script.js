// 'use strict';

// const rates = [4, 3, 5, 4, 5, 3, 5, 5, 4];
// let avg = 0;

// function rateAverage(rates) {
//     for (let i = 0; i < rates.length; i++) {
//         avg += rates[i];
//     }
//     return avg / rates.length;
// }

// console.log(rateAverage(rates));

// const value = [4, 5, 6, 7, 3, 2, 2, 5, 1];

// const array = [];

// for (let i = 0; i < value.length; i++) {
//     array.unshift(value[i]);
// }
// console.log(array);

// const num = 1234;

// function reverseNumber(num) {
//     // return Number(num.toString().split('').reverse().join(''));

//     let reversed = 0;
//     while (num > 0) {
//         let lastNumber = num % 10;
//         console.log(lastNumber);
//         reversed = reversed * 10 + lastNumber;
//         console.log(reversed);
//         num = Math.floor(num / 10);
//         console.log(num);
//     }
//     return reversed;
// }

// console.log(reverseNumber(num));

// const humidities = [32, 45, 29, 19, 'error', 58, 71, 47, 33, 42, 51, 49];
// let maxValue = 0;
// // what is the hunidity amplitude?
// // This is the difference between  min and max valus of humidities?
// function calculateHumAmp(h) {
//     let maxValue = humidities[0];
//     let minValue = humidities[0];

//     for (let i = 1; i < humidities.length; i++) {
//         const currentHUmidity = humidities[i];
//         if (typeof currentHUmidity !== 'number') continue;
//         if (currentHUmidity > maxValue) maxValue = currentHUmidity;
//         if (currentHUmidity < minValue) minValue = currentHUmidity;
//     }
//     console.log(minValue, maxValue);
//     return maxValue - minValue;
// }

// const h1 = [32, 45, 29, 19, 'error', 58, 71, 47, 33, 42, 51, 49];
// const h2 = [45, 78, 63, 45, 24, 25, 29, 81, -85, -14, 370];
// let maxValue = 0;

// function calculateHumAmpToArrays(h1, h2) {
//     const humidities = h1.concat(h2);
//     let maxValue = humidities[0];
//     let minValue = humidities[0];

//     for (let i = 1; i < humidities.length; i++) {
//         const currentHUmidity = humidities[i];
//         if (typeof currentHUmidity !== 'number') continue;
//         if (currentHUmidity > maxValue) maxValue = currentHUmidity;
//         if (currentHUmidity < minValue) minValue = currentHUmidity;
//     }
//     console.log(minValue, maxValue);
//     return maxValue - minValue;
// }

// console.log(calculateHumAmpToArrays(h1, h2));

// const h1 = [32, 45, 29, 19, 'error', 58, 71, 47, 33, 42, 51, 49];
// const h2 = [45, 78, 63, 45, 24, 25, 29, 81, -85, -14, 370];
// let maxValue = 0;

// function valueMax(humidities) {
//     let maxValue = humidities[0];
//     for (let i = 1; i < humidities.length; i++) {
//         const currentHumidities = humidities[i];
//         if (typeof currentHumidities !== 'number') continue;
//         if (humidities[i] > maxValue) maxValue = humidities[i];
//     }
//     console.log(maxValue);
//     return maxValue;
// }

// function valueMin(humidities) {
//     let minValue = humidities[0];
//     for (let i = 1; i < humidities.length; i++) {
//         const currentHumidities = humidities[i];
//         if (typeof currentHumidities !== 'number') continue;
//         if (humidities[i] < minValue) minValue = humidities[i];
//     }
//     console.log(minValue);
//     return minValue;
// }

// function substractMaxMin(h1, h2) {
//     const humidities = h1.concat(h2);
//     return valueMax(humidities) - valueMin(humidities);
// }

// console.log(substractMaxMin(h1, h2));

// const convertFromCelciusToKelvin = function () {
//     const measurement = {
//         type: 'temp',
//         unit: 'celcius',
//         // value: Number(prompt('Temparature in Celcius')),
//         value: 35,
//     };
//     console.table(measurement);
//     console.log(measurement.value);
//     const kelvin = measurement.value + 273;
//     return kelvin;
// };

// console.log(convertFromCelciusToKelvin());

// const h1 = [32, 45, 29, 19, 'error', 58, 71, 47, 33, 42, 51, 49];
// const h2 = [45, 78, 63, 45, 24, 25, 29, 81, -85, -14, 370];

// function calculateHumAmpWithBug(h1, h2) {
//     const humidities = h1.concat(h2);
//     console.log(humidities);
//     let maxValue = 0;
//     let minValue = 0;

//     for (let i = 1; i < humidities.length; i++) {
//         const currentHUmidity = humidities[i];
//         if (typeof currentHUmidity !== 'number') continue;
//         // debugger;
//         if (currentHUmidity > maxValue) maxValue = currentHUmidity;
//         if (currentHUmidity < minValue) minValue = currentHUmidity;
//     }
//     console.log(minValue, maxValue);
//     return maxValue - minValue;
// }

// console.log(calculateHumAmpWithBug([1, 20, 50], [23, 48, 78]));

// array1 = [49, 51, 63];
// array2 = [31, 29, 43, 58, 52];
// // let day = 1;
// function printHumiditiesForecast(array) {
//     let str = '... ';
//     for (let i = 0; i < array.length; i++) {
//         str += `${array[i]}% in ${i + 1} days ... `;
//         // console.log(`The ${array[i]}% humidities in ${day} days.`);
//         // day++;
//     }
//     console.log(str);
// }
// printHumiditiesForecast(array1);
// printHumiditiesForecast(array2);
