'use strict';

// Simply Bank App

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

const account6 = {
    userName: 'Vlasenko Valentyna',
    transactions: [
        15000, 3580, -5000, 60500, 105000, -75000, 98000, 15000, 2000000,
        -1500000, 3000000, -200000,
    ],
    interest: 3,
    pin: 1134,
};

const accounts = [account1, account2, account3, account4, account5, account6];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.total__value--in');
const labelSumOut = document.querySelector('.total__value--out');
const labelSumInterest = document.querySelector('.total__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerTransactions = document.querySelector('.transactions');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayTransactions = function (transactions) {
    containerTransactions.innerHTML = '';
    transactions.forEach(function (trans, index) {
        const transType = trans > 0 ? 'deposit' : 'withdrawal';
        const transactionRow = `<div class="transactions__row">
        <div class="transactions__type transactions__type--${transType}">
            ${index + 1} ${transType}
        </div>
        <div class="transactions__value">${trans}</div>
    </div>`;
        containerTransactions.insertAdjacentHTML('afterbegin', transactionRow);
    });
};

// console.log(containerTransactions.innerHTML);
const createNicknames = function (accs) {
    accs.forEach(function (acc) {
        acc.nickname = acc.userName
            .toLowerCase()
            .split(' ')
            .map(word => word[0])
            .join('');
    });
};

createNicknames(accounts);
console.log(accounts);
// const userName = 'Oliver Avila'; // nickname = 'oa'
// const nickname = userName
//     .toLowerCase()
//     .split(' ')
//     .map(word => word[0])
//     .join('');

// console.log(nickname);

const displayBalance = function (transactions) {
    const balance = transactions.reduce((acc, item) => acc + item);
    labelBalance.textContent = `${balance}$`;
};

const displayTotalTransactions = function (account) {
    const totalDeposites = account.transactions
        .filter(trans => trans > 0)
        .reduce((acc, trans) => acc + trans, 0);
    labelSumIn.textContent = `${totalDeposites}$`;

    const totalWithDrawals = account.transactions
        .filter(trans => trans < 0)
        .reduce((acc, trans) => acc + trans, 0);
    labelSumOut.textContent = `${totalWithDrawals}$`;

    const totalInterest = account.transactions
        .filter(trans => trans > 0)
        .map(dep => (dep * account.interest) / 100)
        // .filter((interest, index, arr) => interest >= 5)
        .reduce((acc, interest) => acc + interest, 0);
    labelSumInterest.textContent = `${totalInterest}$`;
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    currentAccount = accounts.find(
        account => account.nickname === inputLoginUsername.value
    );

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        containerApp.style.opacity = '100';
        labelWelcome.textContent = `Вітаємо, Вас, ${
            currentAccount.userName.split(' ')[0]
        }!`;
        // clear inputs
        inputLoginUsername.value = '';
        inputLoginPin.value = '';
        inputLoginPin.blur();
        // display UI
        displayTransactions(currentAccount.transactions);
        // display balance
        displayBalance(currentAccount.transactions);
        // display total
        displayTotalTransactions(currentAccount);
    }
});
