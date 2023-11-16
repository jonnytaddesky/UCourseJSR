const game = {
    team1: 'Real Madrid',
    team2: 'Barcelona',
    players: [
        [
            'Courtois',
            'Vazquez',
            'Militao',
            'Nacho',
            'Mendy',
            'Casemiro',
            'Valverde',
            'Modrich',
            'Kroos',
            'Vinicius',
            'Benzema',
        ],
        [
            'Stegen',
            'Mingueza',
            'Araujo',
            'Lenglet',
            'Dest',
            'Busquets',
            'Jong',
            'Alba',
            'Messi',
            'Pedri',
            'Dembele',
        ],
    ],
    score: '2:1',
    scored: ['Kroos', 'Benzema', 'Mingueza', 'Benzema'],
    date: 'Apr 10th, 2021',
    odds: {
        team1: 1.48,
        draw: 2.53,
        team2: 4.25,
    },
};

const events = new Map([
    [19, 'Goal'],
    [21, 'Substitution'],
    [43, 'Goal'],
    [56, 'Substitution'],
    [69, 'Yellow card'],
    [73, 'Substitution'],
    [75, 'Yellow card'],
    [79, 'Substitution'],
    [81, 'Red card'],
    [93, 'Goal'],
]);

const gameEvents = [...new Set(events.values())];
console.log(gameEvents);
// console.log([...gameEvents]);
console.log(events.delete(75));
console.log(events);

const countEvents = events.size;
const avgEvents = 90 / countEvents;
// console.log(`On average, an event happened every ${avgEvents} minutes`);
console.log(`On average, an event happened every ${90 / events.size} minutes`);

for (const [min, items] of events) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    // console.log(min, items);
    // if (min < 45) {
    //     console.log(`${first} ${min}: ${items}`);
    // } else {
    //     console.log(`${second} ${min}: ${items}`);
    // }
    console.log(`[${half} HALF] ${min}: ${items}`);
}
