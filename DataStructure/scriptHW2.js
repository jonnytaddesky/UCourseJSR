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

// 1
for (const [index, name] of game.scored.entries()) {
    console.log(` "Goals ${index + 1} - ${name}"`);
}

// 2
let oddSum = 0;
let odds = Object.values(game.odds);
for (const odd of odds) {
    oddSum += odd;
}
const averageOdd = oddSum / odds.length;
console.log(averageOdd);

// 3
for (const [teamName, odd] of Object.entries(game.odds)) {
    // console.log(teamName, odd);
    const mutableText =
        teamName === 'draw' ? 'draw' : `${game[teamName]} victory`;
    console.log(`Rate for ${mutableText}: ${odd}`);
}

// 4

const goalScores = {};
for (const player of game.scored) {
    goalScores[player] ? goalScores[player]++ : (goalScores[player] = 1);
}
console.log(goalScores);
