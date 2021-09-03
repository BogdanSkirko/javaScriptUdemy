// Your tasks:

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
let calcAverage = (a, b, c) => (a + b + c) / 3
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"

checkWinners = function (dolphins, koalas) {
    if (dolphins > koalas) {
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`)
    } else {
        console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`)
    }
}
let avgDolphins = calcAverage(44, 23, 71)
let avgKoalas = calcAverage(65, 54, 49)
let avgDolphins1 = calcAverage(85, 52, 41)
let avgKoalas1 = calcAverage(23, 34, 27)
checkWinners(avgDolphins, avgKoalas)
checkWinners(avgDolphins1, avgKoalas1)


// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) �

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
    } else tip = bill * 0.2;
    return tip
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(bills);
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);


// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
const mark = {
    name: 'Mark',
    lastName: 'Miller',
    mass: 78,
    heigth: 1.69,

    calcBmi: function () {
        this.bmi = this.mass / this.heigth ** 2
        return this.bmi
    }
};
const john = {
    name: 'John',
    lastName: 'Smith',
    mass: 92,
    heigth: 1.95,
    calcBmi: function () {
        this.bmi = this.mass / this.heigth ** 2
        return this.bmi
    }
}
mark.calcBmi();
john.calcBmi();
if (mark.bmi > john.bmi) {
    console.log(`${mark.name + mark.lastName} Bmi's ${mark.bmi} is higher than Jonh's Bmi's ${john.bmi}`);
} else console.log(`Jonh's ${john.bmi} is higher than Marks Bmi's ${mark.bmi}`);