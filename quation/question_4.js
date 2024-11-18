//Q-1

let array1=[1,2,3,4,5]
for(i=0;i<array1.length;i++){
    console.log(array1[i]);
} 

//Q-2

let j=0
let array2=[10,20,30,40,50]
while(j<array2.length) {
    console.log(array2[j])
    j++   
}

//Q-3

let str ="hello,world!"
 console.log(str.length)

//Q-4

let str1 ="JavaScript"
for(i=0;i<str1.length;i++){
    console.log(str1[i])
}

//Q-5
let sum = 0
let arr1 =[1,2,3,4,5]
for(i=0;i<arr1.length;i++){
   sum += arr1[i]

}
console.log(sum)

//Q-6

let arr2=[3,1,4,1,5,9]
let max=-Infinity
for(i=0;i<arr2.length;i++){
    if(max<arr2[i]){
        max = arr2[i]
    }
}
console.log(max)

//Q-7
let array = [1, 2, 3, 4, 5];
let reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
}

console.log("The reversed array is: " + reversedArray);


//Q-8
let sum1= 0;

for (let i = 1 ; i <= 100; i++){
    if (i % 3 ==0){
        sum1 +=i;
    }
}
console.log(sum1)

//Q-9

let product =1;

for(let i = 1; i<= 10; i++){
    product *= i;
}
console.log(product)

//Q-10

let num=10;

while(num >= 1){
    console.log(num)
    num--
}

//Q-11

let num1 = 1;

while(num1 <= 1000){
    num1 *= 2;
}
console.log(num1)

//Q-12

let sum2 = 0;
let num2 = 1;

while(num2 <= 100){
    if (num2 % 2 == 0){
        sum2 += num2
    }
    num2++
}
console.log(sum2)

//Q-13
let num3 = 1;
let count1 = 0;

while (num3 < 100) {
    if (num3 % 3 === 0 && num3 % 7 === 0) {
        console.log(num3);
        count1++;
    }

    num3++;
}


//Q-14

let num4 = 1;

do {
    console.log(num4);
    num4++;
} while (num4<= 10);

//Q-15

let str4="Helloo, World!"
let count3 =0
for(let i=0;i<str4.length;i++){
    if(str4[i] =="a" || str4[i] =="e" ||str4[i] =="i" || str4[i] =="o" || str4[i]=="u" ){
        count3 ++;

        
    }
}
console.log(count3)
