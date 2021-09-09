// 'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
// */
//
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;
//
// const displayMessage = function (message) {
//     document.querySelector('.message').textContent = message;
// };
//
// document.querySelector('.check').addEventListener('click', function () {
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess, typeof guess);
//
//     // When there is no input
//     if (!guess) {
//         // document.querySelector('.message').textContent = '⛔️ No number!';
//         displayMessage('⛔️ No number!');
//
//         // When player wins
//     } else if (guess === secretNumber) {
//         // document.querySelector('.message').textContent = '🎉 Correct Number!';
//         displayMessage('🎉 Correct Number!');
//         document.querySelector('.number').textContent = secretNumber;
//
//         document.querySelector('body').style.backgroundColor = '#60b347';
//         document.querySelector('.number').style.width = '30rem';
//
//         if (score > highscore) {
//             highscore = score;
//             document.querySelector('.highscore').textContent = highscore;
//         }
//
//         // When guess is wrong
//     } else if (guess !== secretNumber) {
//         if (score > 1) {
//             // document.querySelector('.message').textContent =
//             // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
//             displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             // document.querySelector('.message').textContent = '💥 You lost the game!';
//             displayMessage('💥 You lost the game!');
//             document.querySelector('.score').textContent = 0;
//         }
//     }

//   // When guess is too high
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📈 Too high!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '💥 You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }

//   // When guess is too low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📉 Too low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '💥 You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }
// }
// });
//
// document.querySelector('.again').addEventListener('click', function () {
//     score = 20;
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//
//     // document.querySelector('.message').textContent = 'Start guessing...';
//     displayMessage('Start guessing...');
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.guess').value = '';
//
//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '15rem';
// });
//
// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4

// function printForecast (...temperatures){
//
// }


// Coding Challenge #1
// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
}
// 1. Create one player array for each team (variables 'players1' and
//'players2')

// const [player1, player2] = game.players;
// console.log(player1, player2);


// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players


// const [gk, ...fieldPlayers] = player1;
// const [gk1, ...fieldPlayers1] = player2;
// console.log(gk, fieldPlayers,);
// console.log(gk1, fieldPlayers1,);


// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)


// const allPlayers = [...player1, ...player2]
// console.log(allPlayers);


// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'


// const players1Final = ['Tiago', 'Coutinho', 'Perisic', ...player1]
// console.log(players1Final);


// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')


// const {
//     odds: {team1, x: draw, team2}
// } = game
// console.log(team1, team2, draw)


// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)


// const printGoals = function (...players) {
//     console.log(players)
//     console.log(`${players.length} goals wew scored`)

// }
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')


// // 7. The team with the lower odd is more likely to win. Print to the console which
// // team is more likely to win, without using an if/else statement or the ternary
// // operator.


// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }
// GOOD LUCK
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")

// let keys = Object.keys(game.scored)
// let values = Object.values(game.scored)
// console.log(`Goal 1: ${values[0]},Goal 2: ${values[1]}, Goal 3: ${values[2]}, Goal 4: ${values[3]}`)

// for (const [index,player] of game.scored.entries())
//     console.log(`Goal ${index + 1}: ${player}`)


// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)

// let into = Object.values(game.odds)
// let avgScore = 0
// for (let i = 0; i < into.length; i++) {
//     avgScore += into[i] / into.length
// }
// console.log(avgScore);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �


// for (const [index,odd] of Object.entries(game.odds)) {
//     const stringTeam = index === 'x' ? 'draw' : `victory ${game[index]}:`
//     console.log(`Odd of ${stringTeam} ${odd}`);
// }


//  4. Bonus: Create an object called 'scorers' which contains the names of the
// // players who scored as properties, and the number of goals as the value. In this
// // game, it will look like this:
// // {
// //  Gnarby: 1,
// //  Hummels: 1,
// //  Lewandowski: 2
// // }

const scorers = {};

for (let x of game.scored) {
  if (scorers[x]) {
    scorers[x]++;
  } else {
    scorers[x] = 1;
  }
}

for (let x of game.scored) {
  scorers[x]++ || (scorers[x] = 1);
}

console.log(scorers);