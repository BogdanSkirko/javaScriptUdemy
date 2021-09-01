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
if(bmiMarks>bmiJohn) {
    console.log(`Marks Bmi's ${bmiMarks1} is hither than Jonh's ${bmiJohn}  Bmi's`)
}
    else {console.log(`Marks Bmi's ${bmiMarks} is less than Jonh's ${bmiJohn}   Bmi's`)}