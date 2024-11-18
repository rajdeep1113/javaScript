//Q-1

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Q-2

const number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

//Q-3

const n = 5; 
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(`Factorial of ${n} is ${factorial}`);

//Q-4

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//Q-5

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`Sum of all numbers from 1 to 100 is ${sum}`);

//Q-6

for (let i = 1; i <= 10; i++) {
    console.log(`Cube of ${i} is ${i ** 3}`);
}

//Q-7

let sumOfSquares = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        sumOfSquares += i ** 2;
    }
}
console.log(`Sum of squares of all odd numbers from 1 to 20 is ${sumOfSquares}`);


//Q-8

let sumDivisibleBy3 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        sumDivisibleBy3 += i;
    }
}
console.log(`Sum of all numbers divisible by 3 between 1 and 100 is ${sumDivisibleBy3}`);

//Q-9

let product = 1;
for (let i = 1; i <= 10; i++) {
    product *= i;
}
console.log(`Product of all numbers from 1 to 10 is ${product}`);

//Q-10

let num = 10;
while (num >= 1) {
    console.log(num);
    num--;
}

//Q-11

let number1 = 1;
while (number1 <= 1000) {
    number1 *= 2;
}
console.log(`Final value after doubling is ${number1}`);

//Q-12

let sumEven = 0;
let i = 1;
while (i <= 100) {
    if (i % 2 === 0) {
        sumEven += i;
    }
    i++;
}
console.log(`Sum of all even numbers between 1 and 100 is ${sumEven}`);


//Q-13

let count = 0;
let num1 = 1;
while (count < 5) {
    if (num1 % 3 === 0 && num1 % 7 === 0) {
        console.log(num1);
        count++;
    }
    num1++;
}

//Q-14

let num2 = 1;

do {
    console.log(num2);
    num2++;
} while (num2 <= 10);


