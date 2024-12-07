//Q-1

function TotalExpenses(expenses) {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i];
    }
    return total;
}

let weeklyExpenses = [200, 150, 100, 350, 50];
console.log("The total expense is: ₹" , TotalExpenses(weeklyExpenses));

//Q-2

function temp(score) {
    let min = Infinity
    for(let i=0;i<score.length;i++){
        if(min > score[i]){
            min = score[i]
        }
    }
    return min;
}
let score =[56,72,48,90,65]
console.log(temp(score))



//Q-3

// let max = -Infinity
// let arr = [32, 35, 30, 31, 33, 36, 34]

// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i]
//     }
// }
// console.log(max)

function maximum(array3) {
 let maxValue =   Math.max(...array3)
 return maxValue
}
let array3 = [32, 35, 30, 31, 33, 36, 34]
// spread [1,2,3]
console.log(maximum(array3));



//Q-4

//[45000, 55000, 30000, 70000, 60000]
function avg(arr){
    let avg;
    let sum=0;
   for(let i=0;i<5;i++)
   {
        sum+=arr[i];
   }

   avg=sum/5;
   console.log(`avg is ${avg}`);

}
let arr=[45000, 55000, 30000, 70000, 60000];
avg(arr);

//Q-5

const reverse=(gusslist)=>
{
    for(let i=gusslist.length-1;i>=0;i--)
    {
        console.log(gusslist[i]);
    }
};

let gusslist=["John", "Aman", "Rita", "Raj"];
reverse(gusslist);

//Q-6
const avai=(person)=>person.includes(7)?console.log(` it includes 7`):console.log(`it does not includes`);
let person=[3, 5,7, 9, 12];
avai(person);

//Q-7 
let self =["Buy groceries", "Clean room", "Study"];
let resultShift = self.shift();
console.log(self);

//Q-10

let sales = ["goku", "vageta", "loffy"];

let resultSales = sales.pop("");
console.log(sales, resultSales);



//8

function removeDuplicates(phoneNumbers) {
    return [...new Set(phoneNumbers)];
}

let phoneNumbers = [9876543210, 9123456789, 9876543210, 9000000000];
console.log("Unique phone numbers" + removeDuplicates(phoneNumbers));


//9

function Secondnumber(sales) {
    let sortedSales = sales.sort((a, b) => b - a)
    return sortedSales[1]
}

let salesAmounts = [200, 400, 100, 700, 500];
console.log("Big Number" + Secondnumber(salesAmounts));

//10

function getLastProduct(sales) {
    return sales[sales.length - 1];
}

let productSales = ["Shoes", "T-shirt", "Hat"];
console.log("last product" + getLastProduct(productSales));


//11


function isCartEmpty(cart) {
    return cart.length === 0;
}

let cart = [];
console.log( isCartEmpty(cart));


//12

function countBook(books) {
    return books.filter(book => book === "Book A").length;
}

let inventory = ["Book A", "Book B", "Book A", "Book C", "Book A"];
console.log("Number of 'Book A' copies" + countBook(inventory));


//13

function StudentLists(list1, list2) {
    return list1.concat(list2);
}

let class1 = ["Rahul", "Neha"];
let class2 = ["Aman", "Priya"];
console.log("student lists" + StudentLists(class1, class2));


//14


//15
function Discount(prices) {
    let discountedPrices = [];
    for (let i = 0; i < prices.length; i++) {
        discountedPrices.push(prices[i] * 0.9);
    }
    return discountedPrices;
}

let originalPrices = [1000, 2000, 1500, 2500];
console.log("10% discount" + Discount(originalPrices));

//16


//17

function Groups(attendees, groupSize) {
    let groups = [];
    for (let i = 0; i < attendees.length; i += groupSize) {
        groups.push(attendees.slice(i, i + groupSize));
    }
    return groups;
}

let attendees = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
console.log("Groups" + JSON.stringify(Groups(attendees, 3)));


//18

function Cars(cars) {
    let lastCar = cars.pop(); 
    cars.unshift(lastCar); 
    return cars;
}

let carLine = ["Car1", "Car2", "Car3", "Car4"];
console.log("Rotated cars" + Cars(carLine));


//19

function countVowels(name) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i > name.length; i++) {
        if (vowels.includes(name[i])) {
            count++;
        }
    }
    return count;
}

let userName = "Rahul";
console.log((userName));


//20

function reverseProductCode(productCode) {
    return productCode.split('').reverse().join('');
}

let productCode = "AB1234";
console.log("product code" + reverseProductCode(productCode));

//23

function ToWords(sentence) {
    return sentence.split(' ');
}

let sentence = "JavaScript is fun";
console.log(" words" + ToWords(sentence));