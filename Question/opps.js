
//Q-1

class Person {
    constructor(name,age,contry) {
      this.name = name;
      this.age = age;
      this.contry = contry;
    }
  }
  
  let Person1 = new Person("raj", "18","ahmedabad");
  console.log(Person1);
  
  let Person2 = new Person("deep", "19", "ahmedabad");
  console.log(Person2);


  //Q-2

  class Rectangle{
    constructor(width,height){
        this.width =width;
        this.height =height;
    }
    calculatearea(){
        return this.width*this.height;
    }
    calculateperamiter(){
        return 2*(this.width+this.height);
    }
  }

  let rectangle = new Rectangle(3,10)

  let area = rectangle.calculatearea();
  let peramiter = rectangle.calculateperamiter();

  console.log(`area : ${area}`)
  console.log(`peramiter : ${peramiter}`)



  //Q-3

  class Vehicle {
    constructor(make,modal,year) {
      this.make = make;
      this.modal = modal;
      this.year = year;
    }
}
    
  class Car extends Vehicle {
    constructor(make,modal,year,door) {
      super(make,modal,year);
      this.door = door;

    }
   
}
let  cars= new Car("me","honda","2002","4")
console.log(cars)


//Q-4


class BankAccount {
    constructor(account, amount){

    this.account = account;
    this.amount = amount;
    
    this.deposit=function(cradit){
        this.amount= this.amount + cradit
    }
    this.widhdraw=function(debited){
     this.amount = this.amount - debited
    }
    return this;
  }
}
  let rajdeep = new BankAccount("rajdeep", 200000,);
  rajdeep.deposit(400)
  rajdeep.widhdraw(50000)
  console.log(rajdeep);


  //Q-5

class Shape {
        area() {
        console.log("Method 'area()' must be implemented.");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

   area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    area() {
        return 0.5 * this.base * this.height;
    }
}

const circle = new Circle(5);
console.log(`Area of Circle: ${circle.area().toFixed(2)}`);

const triangle = new Triangle(4, 6);
console.log(`Area of Triangle: ${triangle.area().toFixed(2)}`);


//Q-6

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    annualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department, bonus) {
        super(name, salary);
        this.department = department;
        this.bonus = bonus;
    }

    annualSalary() {
        return (this.salary * 12) + this.bonus;
    }
}

const manager1 = new Manager('Alice', 5000, 'Sales', 10000);
const manager2 = new Manager('Bob', 6000, 'Marketing', 12000);

console.log(manager1.annualSalary());
console.log(manager2.annualSalary());



//Q-7


class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    display() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Publication Year: ${this.publicationYear}`);
    }
}

class Ebook extends Book {
    constructor(title, author, publicationYear, price) {
        super(title, author, publicationYear);
        this.price = price;
    }

    display() {
        super.display();
        console.log(`Price:${this.price.toFixed(2)}`);
    }
}

const ebook = new Ebook('Thor', 'rajdeep', 2008, 2999);
ebook.display();

  //Q-8

  class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  
    showColor = function () {
      console.log(`${this.name}  ${this.sound} `);
    };
  }
  
  class Dog extends Animal {
    constructor(name,sound, color) {
      super(name, sound);
      this.color = color;
    }
    showBreed = function () {
      console.log(`${this.color}`);
    };
    showDogBreed = function () {
      this.showBreed();
    };
  }
  
  const dog = new Dog("pitbull","i don't know","white");
  console.log(dog);
  
  dog.showColor();
  dog.showDogBreed();


  //Q-9

  class Bank{
    constructor(bname){
        this.bname =bname ;
        this.branch = [];

    }
    Addbranch(branchName){
        this.branch.push(branchName)

    }
    removebranch(branchName){
       this.branch = this.branch.filter((element)=>{
 return element != branchName
       })
    }
    displaybranch(){
        console.log(this.branch);
        

    }
  }
  let icici=new Bank("icici","bopal")
  console.log(icici);
icici.Addbranch("rajkot")
icici.Addbranch("ghuma")
icici.Addbranch("bopal")
console.log(icici);
icici.removebranch("ghuma")
console.log(icici);



//Q-10


class Product {
    constructor(productId, name, price) {
        this.productId = productId;
        this.name = name;
        this.price = price;
    }

    calculateTotalPrice(quantity) {
        return this.price * quantity;
    }
}

class PersonalCareProduct extends Product {
    constructor(productId, name, price, warrantyPeriod) {
        super(productId, name, price);
        this.warrantyPeriod = warrantyPeriod;
    }

    calculateTotalPrice(quantity) {
        const warrantyCost = 5;
        const baseTotal = super.calculateTotalPrice(quantity);
        return baseTotal + (warrantyCost * this.warrantyPeriod);
    }
}

const shampoo = new PersonalCareProduct(101, ' Shampoo', 1000, 12);
const quantity = 3;
const totalPrice = shampoo.calculateTotalPrice(quantity);

console.log(shampoo);
