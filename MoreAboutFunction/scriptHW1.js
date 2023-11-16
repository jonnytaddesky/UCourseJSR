// const survey = {
//     question: 'What programming language would you like to learn?',
//     options: [
//         '\n0: JavaScript',
//         '\n1: Python',
//         '\n2: Ruby',
//         '\n3: Java',
//         '\n4: C#',
//     ],
//     answers: new Array(5).fill(0),
//     logNewAnswer() {
//         const answer = Number(
//             prompt(`${this.question}\n
//         ${this.options.join('')} \n(Enter option number)`)
//         );
//         // console.log(answer);

//         if (
//             typeof answer === 'number' &&
//             answer >= 0 &&
//             answer < this.answers.length
//         ) {
//             this.answers[answer]++;
//         }
//         // console.log(this.answers);
//         this.printResults();
//         this.printResults('array');
//         this.printResults('string');
//     },
//     printResults(type = 'array') {
//         if (type === 'array') {
//             console.log(this.answers);
//         } else if (type === 'string') {
//             console.log(`Survey result: ${this.answers.join(', ')}.`);
//         }
//     },
// };

// document
//     .querySelector('#survey')
//     .addEventListener('click', survey.logNewAnswer.bind(survey));

// survey.printResults.call({ answers: [7, 1, 4] }, 'array');
// survey.printResults.call({ answers: [3, 6, 9, 2, 5, 4, 4] }, 'string');

'use strict';

const str =
    'LH1621 B 10FEB 5 KRKMUC HK1          1325 1445   32A E 0 R     PLS ADD PAX MOBILE CTC FOR IRREG COMMUNICATION     SEE RTSVC  3  LH1814 B 10FEB 5 MUCBCN K1       2  1540 1740   321 E 0 RG     PLS ADD PAX MOBILE CTC FOR IRREG COMMUNICATION     SEE RTSVC';

// Розбиваємо рядок на окремі рядки, що містять дані про рейс
const flightStrings = str.split(/\n\s*/);

// Створюємо масив об'єктів з даними про рейси
const flights = flightStrings.map(flightString => {
    // Розбиваємо рядок з даними про рейс на окремі елементи
    const elements = flightString.trim().split(/\s+/);
    // Перетворюємо дату з формату "DDMMM" у формат "YYYY-MM-DD"
    const dateParts = elements[2].match(/(\d{2})([A-Z]{3})/);
    const year = new Date().getFullYear();
    const month =
        new Date(Date.parse(`${dateParts[2]} 1, 2000`)).getMonth() + 1;
    const day = parseInt(dateParts[1]);
    const date = `${year}-${month.toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}`;
    // Створюємо об'єкт з даними про рейс
    return {
        airline: elements[0].substring(0, 2),
        flightNumber: elements[0].substring(2),
        class: elements[1],
        date: date,
        dayOfWeek: elements[3],
        from: elements[4],
        to: elements[5],
        bookingStatus: elements[6],
        departureTime: elements[7],
        arrivalTime: elements[8],
        aircraftType: elements[9],
        mealService: elements[10],
        baggageAllowance: elements[11],
    };
});

// Виводимо результат у консоль
console.log(flights);
