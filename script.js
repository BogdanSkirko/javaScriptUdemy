// Declare variables called 'country', 'continent' and 'population' and  assign their values according to your own country (population in millions)
let continent = 'Europe';
let country = 'Ukraine';
let population = 42_000_000;
console.log(continent, country, population)
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK
const weigthMarks = 78;
const heigthMarks = 1.69;
const weigthJohn = 92;
const heigthJohn = 1.95;
const weigthMarks1 = 95;
const heigthMarks1 = 1.88;
const weigthJohn1 = 85;
const heigthJohn1 = 1.76;

const bmiMarks = weigthMarks / (heigthMarks * heigthMarks);
const bmiJohn = weigthJohn / (heigthJohn * heigthJohn);
const bmiMarks1 = weigthMarks1 / heigthMarks1 ** 2;
const bmiJohn1 = weigthJohn1 / heigthJohn1 ** 2;
const marksHeighterBmi = bmiMarks > bmiJohn;
const marksHeighterBmi1 = bmiMarks1 > bmiJohn1;

console.log(bmiMarks, bmiJohn, marksHeighterBmi);
console.log(bmiMarks1, bmiJohn1, marksHeighterBmi1);

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
if (bmiMarks > bmiJohn) {
    console.log(`Marks Bmi's ${bmiMarks1} is hither than Jonh's ${bmiJohn}  Bmi's`)
} else {
    console.log(`Marks Bmi's ${bmiMarks} is less than Jonh's ${bmiJohn}   Bmi's`)
}
//     There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
//#####################################################################################
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

const dolphins = (96 + 108 + 89) / 3;
const koalas = (88 + 91 + 110) / 3;
if (dolphins > koalas) {
    console.log(`Dolphins The Champione! with avg score ${dolphins}`);
} else if (dolphins < koalas) {
    console.log(`Koalas The Champione! with avg score ${koalas}`);
} else {
    console.log(`It is DRAW!!!`);
}
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �

const dolphinsBonus1 = (97 + 112 + 101) / 3;
const koalasBonus1 = (109 + 95 + 123) / 3;
if (dolphinsBonus1 > koalasBonus1 && 100) {
    console.log(`Dolphins The Champione! with avg score ${dolphinsBonus1}`);
} else if (dolphinsBonus1 && 100 < koalasBonus1) {
    console.log(`Koalas The Champione! with avg score ${koalasBonus1}`);
} else if (dolphinsBonus1 === koalasBonus1) {
    console.log(`It Is Draw`)
}
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
const dolphinsBonus2 = (97 + 112 + 101) / 3;
const koalasBonus2 = (109 + 95 + 106) / 3;
if (dolphinsBonus2 && koalasBonus2 >= 100 && dolphinsBonus2 === koalasBonus2) {
    console.log(`It Is Draw!`);
} else console.log(`No team won`)
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �
// GOOD LUCK


let bill = 10;
let tip = 0;
//if else//
// if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15
// } else tip = bill * 0.2
// console.log(tip)
//ternary operation//
bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.2;
console.log(tip)