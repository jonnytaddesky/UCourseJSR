'use strict';

/// Метод find()

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

const firstDeposit = transactions.find(trans => trans > 0);
const firstWithDrawal = transactions.find(trans => trans < 0);

console.log(firstDeposit);
console.log(firstWithDrawal);

const account1 = {
    userName: 'Cecil Ireland',
    transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
    interest: 1.5,
    pin: 1111,
};

const account2 = {
    userName: 'Amani Salt',
    transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
    interest: 1.3,
    pin: 2222,
};

const account3 = {
    userName: 'Corey Martinez',
    transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
    interest: 0.8,
    pin: 3333,
};

const account4 = {
    userName: 'Kamile Searle',
    transactions: [530, 1300, 500, 40, 190],
    interest: 1,
    pin: 4444,
};

const account5 = {
    userName: 'Oliver Avila',
    transactions: [630, 800, 300, 50, 120],
    interest: 1.1,
    pin: 5555,
};
const accounts = [account1, account2, account3, account4, account5];
const coreyMartinezAccounts = accounts.find(
    account => account.userName === 'Corey Martinez'
);

console.log(coreyMartinezAccounts);
//// HW 3

// const getAverageHumanAge = catAges =>
//     catAges
//         .map(catAge => (catAge <= 2 ? catAge * 10 : catAge * 7))
//         .filter(humanAge => humanAge >= 18)
//         .reduce((acc, catAge, index, arr) => acc + catAge / arr.length, 0);

// const averageHumanAge1 = getAverageHumanAge([7, 3, 2, 4, 1, 15, 8, 1, 9, 2]);
// const averageHumanAge2 = getAverageHumanAge([1, 16, 12, 4, 5, 1, 3, 11, 7, 2]);
// console.log(averageHumanAge1);
// console.log(averageHumanAge2);
//// Method Chaining (Цепь визовов методов)

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// const totalWithDrawalsEuro = transactions
//     .filter(trans => trans < 0)
//     // .map((trans, index, arr) => {
//     //     console.log(arr);
//     //     trans * 0.86;
//     // })
//     .map(trans => trans * 0.86)
//     .reduce((acc, trans) => acc + trans, 0);

// console.log(totalWithDrawalsEuro);
//// HW 4

// const catAges = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
// const catAges2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

// const getAverageHumanAge = function (catAges) {
//     const humanAges = catAges.map(catAge =>
//         catAge <= 2 ? catAge * 10 : catAge * 7
//     );
//     const adultCats = humanAges.filter(humanAge => humanAge >= 18);
//     const averageHumanAge =
//         adultCats.reduce((acc, catAge) => acc + catAge, 0) / adultCats.length;
//     return averageHumanAge;
// };

// const averageHumanAge1 = getAverageHumanAge([7, 3, 2, 4, 1, 15, 8, 1, 9, 2]);
// const averageHumanAge2 = getAverageHumanAge([1, 16, 12, 4, 5, 1, 3, 11, 7, 2]);
// console.log(averageHumanAge1);
// console.log(averageHumanAge2);
//// Метод reduce()

/// get minimum value
// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// const min = transactions.reduce((acc, trans) => {
//     if (acc < trans) {
//         return acc;
//     } else {
//         return trans;
//     }
// }, transactions[0]);

// const min = transactions.reduce(
//     (acc, trans) => (acc < trans ? acc : trans),
//     transactions[0]
// );

// console.log(min);

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
// const balance = transactions.reduce(function (acc, item, index, arr) {
//     console.log(acc);
//     return acc + item;
// }, 0);
// const balance = transactions.reduce((acc, item) => acc + item, 0);

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
// console.log(balance);

// let sum = 0;
// for (const trans of transactions) {
//     sum += trans;
// }

// console.log(sum);

//// Метод filter()
// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// const withdrawals = transactions.filter(function (trans) {
//     return trans < 0;
// });
// const withdrawals = transactions.filter(trans => trans < 0);
// const deposites = transactions.filter(trans => trans > 0);

// console.log(withdrawals);
// console.log(deposites);

// const withdrawals1 = [];

// for (const trans of transactions) {
//     if (trans < 0) {
//         withdrawals1.push(trans);
//     }
// }
// console.log(withdrawals1);
//// Метод map()

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// const usdToEuro = 0.86;

// const transactionsEuro = transactions.map(function (trans) {
//     return trans * usdToEuro;
// });

// const transactionsEuro = transactions.map(trans => trans * usdToEuro);

// console.log(transactions);
// console.log(transactionsEuro);

// const transactionsEuro1 = [];
// for (const trans of transactions) {
//     transactionsEuro1.push(trans * usdToEuro);
// }

// console.log(transactionsEuro1);

// const transactionDescriptions = transactions.map((trans, index, array) => {
// let description = '';

// if (trans > 0) {
//     description = `Transaction № ${index + 1}: ${trans} was deposited`;
// } else {
//     description = `Transaction № ${index + 1}: ${Math.abs(
//         trans
//     )} was withdrew`;
// }

//     return description;
// });

// const transactionDescriptions = transactions.map(
//     (trans, index) =>
//         `Transaction № ${index + 1}: ${Math.abs(trans)} was ${
//             trans > 0 ? 'deposited' : 'withdrew'
//         } deposited`
// );

// console.log(transactionDescriptions);
//// HW 1

// const dataJane1 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
// const dataJulia1 = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
// const cats1 = [dataJane1, dataJulia1];
// // console.log(cats1);
// const dataJane2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
// const dataJulia2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];
// const cats2 = [dataJane2, dataJulia2];

// const verifyCats = function (catsJane, catsJulia) {
//     const copyCatsJane = catsJane.slice();
//     const onlyCatsJane = copyCatsJane.slice(1, -1);

//     const cats = onlyCatsJane.concat(catsJulia);
//     cats.forEach(function (catAge, index) {
//         if (catAge >= 2) {
//             console.log(`Кішка № ${index + 1} доросла, їй ${catAge} років`);
//         } else {
//             console.log(`Кішка № ${index + 1} ще кошеня`);
//         }
//     });
// };

// verifyCats(cats1[0], cats1[1]);
// verifyCats(cats2[0], cats2[1]);
/// forEach with MAP and Set

/// App EasyBank

//// Map
// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['CNY', 'Chinese yuan'],
// ]);

// currencies.forEach(function (value, key, map) {
//     console.log(`${key}: ${value}`);
// });

//// Set

// const uniqueCurrencies = new Set(['USD', 'EUR', 'USD', 'CNY', 'CNY']);
// console.log(uniqueCurrencies);

// uniqueCurrencies.forEach(function (value, _, set) {
//     console.log(`${value}: ${value}`);
//     console.log(set);
// });

// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['CNY', 'Chinese yuan'],
// ]);

//// Iteration array with loop foreach
// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// for (const trans of transactions) {
//     if (trans > 0) {
//         console.log(`${trans} was deposited`);
//     } else {
//         console.log(`${Math.abs(trans)} was withdrew`);
//     }
// }

// for (const [i, trans] of transactions.entries()) {
//     if (trans > 0) {
//         console.log(`${trans} was deposited`);
//         console.log(i);
//     } else {
//         console.log(`${Math.abs(trans)} was withdrew`);
//         console.log(i);
//     }
// }

// console.log('--------------------------------');

// transactions.forEach(function (trans, index, array) {
//     if (trans > 0) {
//         console.log(`Transaction № ${index + 1}: ${trans} was deposited`);
//     } else {
//         console.log(
//             `Transaction № ${index + 1}: ${Math.abs(trans)} was withdrew`
//         );
//     }
// });

//////////////////////////////////////////////////////////

// let letters = ['a', 'b', 'c', 'd', 'e', 'f'];

//// slice()
// console.log(letters.slice(1, -1));
// console.log(letters.slice(1, 4));
// console.log(letters.slice(-1));
// console.log(letters.slice(-3));
// console.log(letters.slice(-3, -1));
// console.log(letters.slice(3, -1));
// console.log([...letters]);
// console.log(letters);

//// splice()

// console.log(letters.splice(1));
// letters.splice(-1);
// letters.splice(1, 3);

// let letters1 = ['a', 'b', 'c', 'd', 'e', 'f'];
// let letters2 = ['g', 'h', 'i'];
//// reverse()

// console.log(letters1.reverse());

//// concat()

// const letters = letters1.concat(letters2);
// console.log(letters);
// console.log([...letters1, ...letters2]);

//// join()
