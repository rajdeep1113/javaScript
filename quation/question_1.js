// Q-1
let radius = 7;
let area = Math.PI * (radius * radius);
console.log("The area  is", area);

//Q-2
let a = 10;
let b = 20;
let c = 5;
let result = (a * b) / c + (b - a);
console.log("The result is:", result);

//Q-3
let x = 5;
let y = 10;
x += 2;
y *= x;
console.log("value of x is",x);
console.log("value of y is",y);

//Q-4
let num = 10;
num += 15;
console.log("After adding 15", num);
num -= 5;
console.log("After subtracting 5", num);
num *= 3;
console.log("After multiplying  3", num);
num /= 2;
console.log("After dividing 2", num);

//Q-5
let score1 = 85;
let score2 = 90;
let result5 = (score1 > 80) && (score2 > 80);
console.log("Are both scores greater than 80?", result5);

//Q-6
let string1 = "apple";
let string2 = "banana";
let result6 = string1 < string2;
console.log("Is 'apple' less than 'banana'?", result6);

//Q-7
let age = 25;
let hasDrivingLicense = true;
let isEligibleToDrive = (age >= 18) && hasDrivingLicense;
console.log("Is the person eligible to drive?", isEligibleToDrive);

//Q-8
let number = 25;
let isInRangeOrMultipleOf5 = (number >= 10 && number <= 50) || (number % 5 === 0);
console.log("ans is", isInRangeOrMultipleOf5);

//Q-9
let str9 = "123.45";
let num9 = parseFloat(str9);
let result9 = num9 + 10;
console.log("The result is:", result9);

//Q-10
let booleanValue = true;
let result10 = booleanValue.toString() + " is the value";
console.log(result10);

