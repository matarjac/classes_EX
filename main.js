// EX.1 
// A

class Shape{
    constructor(name, sides, sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter(){
        console.log(`shape ${this.name} perimeter is: ${this.sides*this.sideLength}`);
    }
}

let square = new Shape('square', 4, 3);
square.calcPerimeter();

let triangle = new Shape('triangle', 3, 3);
triangle.calcPerimeter();

// B

class Square extends Shape{
    constructor(sideLength){
        super();
        this.name = 'Square';
        this.sides = 4;
        this.sideLength = sideLength;
    }

    calcArea(){
        console.log(`The area of the square is: ${this.sideLength}`)
    }
}

let anotherSquare = new Square(6);
console.log(anotherSquare);
anotherSquare.calcArea();
anotherSquare.calcPerimeter();

// EX.2
// 1.

// class Circle{
//     constructor(radius){
//         this.radius = radius;
//     }
//     static pi = 3.14;
//     area(){
//         return Circle.pi*this.radius*this.radius;
//     }
// }

// let myCircle = new Circle(5);
// console.log(myCircle.area());

// 2.

// class Account{
//     constructor(balance, owner){
//         this.balance = balance;
//         this.owner = owner;
//     }

//     static create(name){
//         return new Account(0, name);
//     }
// }

// johnAccount = Account.create('john');
// console.log(johnAccount);

// EX.3
// 1.
// class Person{
//     constructor(name){
//         this.name = name;
//     }

//     set name(value){
//         this._name = value.toUpperCase();
//     }

//     get name(){
//         return this._name;
//     }
// }

// const somePerson = new Person('matar');
// somePerson.name = 'matar';
// console.log(somePerson.name);

// 2.
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    set price(value){
        this._price = Math.round(value);
    }

    get price() {
        return this._price;
    }
}

const someProduct = new Product('iphone', 500);
console.log(someProduct.price);
someProduct.price=56.4343435;
console.log(someProduct.price);

// EX.4
class Circle{
    #radius;
    constructor(r){
        this.#radius = r;
    }

    set radius(value){
        this.#radius = value;
    }

    get diameter(){
        return this.#radius * 2;
    }
}

const myCircle = new Circle(5);
console.log(`Diameter of the circle: ${myCircle.diameter}`);
myCircle.radius = 8;
console.log(`Diameter of the circle: ${myCircle.diameter}`);

// EX.5
// class Person{
//     #firstName;
//     #lastName;
//     #age;

//     constructor(first, last, age){
//         this.#firstName = first;
//         this.#lastName = last;
//         this.#age = age;
//     }

//     get displayInfo(){
//         return {firstName: this.#firstName, lastName: this.#lastName, age: this.#age};
//     }

//     set age(value){
//         if(value<=0){
//             console.log('Age below 0');
//         }else{
//             this.#age = value;
//         }
//     }
// }

// const somePer = new Person('Matar', 'Jacob', 25);
// let personDetails = somePer.displayInfo;
// console.log(`Name: ${personDetails.firstName}, last name: ${personDetails.lastName}, age: ${personDetails.age}`);
// somePer.age = 40;
// personDetails = somePer.displayInfo;
// console.log(`Your new age: ${personDetails.age}`);
// somePer.age = 0;
// personDetails = somePer.displayInfo;
// console.log(`Your new age: ${personDetails.age}`);




// EX.6

// class BankAccount{
//     constructor(accountNumber, accountHolder, accountBalance){
//         this.accountNumber = accountNumber;
//         this.accountHolder = accountHolder;
//         this.accountBalance = accountBalance;
//     }

//     deposit(amount){
//         this.accountBalance += amount;
//     }

//     withdraw(amount){
//         this.accountBalance -= amount;
//     }

//     checkBalance(amountm){
//         return `Account ${this.accountNumber} Balance: ${this.accountBalance}$`;
//     }
// }

// const account = new BankAccount(8546352, 'Jeff', 1000);
// console.log(account.checkBalance());
// account.deposit(500);
// console.log(account.checkBalance());
// account.withdraw(30);
// console.log(account.checkBalance());

// EX.7

// class Animal{
//     constructor(name, species){
//         this.name = name;
//         this.species = species;
//     }

//     makeSound(){
//         console.log('The animal is making a sound');
//     }

// }

// const someAnimal = new Animal('Bob', 'cat');
// someAnimal.makeSound();

// class Dog extends Animal{
//     constructor(name) {
//         super(name);
//         this.species = 'Dog';
//     }
//     bark(){
//         console.log('OOF! OOF!')
//     }
// }

// const someDog = new Dog('bob');
// someDog.bark();
// console.log(someDog.species)

// class Cat extends Animal{
//     constructor(name){
//         super(name);
//         this.species='Cat';
//     }
//     meow(){
//         console.log('The cat is meowing: MEOW MEOW!');
//     }
// }

// const someCat = new Cat('Catty');
// someCat.meow();

// class Lion extends Animal{
//     constructor(name){
//         super(name);
//         this.species='Lion';
//     }

//     roar(){
//         console.log('roar');
//     }
// }

// const someLion = new Lion('Dulff');
// someLion.roar();
// console.log(someLion.species);
// console.log(someLion.name);

// ----------- PART 2 ------------- \\

class Person{
    constructor(first, last, age){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }

    get getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const me = new Person('Matar', 'Jacob', 25);
console.log(me.getFullName);

class Student extends Person{
    constructor(firstName, lastName, age, studentID){
        super(firstName, lastName, age);
        this.id = studentID;
    }

    get getDetails(){
        return {name: this.getFullName, age: this.age, id: this.id};
    }
}

const someStudent = new Student('Yossi','Machbush',16,34324);
studentData = someStudent.getDetails;
console.log(`Student id: ${studentData.id}, name: ${studentData.name} , age:${studentData.age}`);

// EX.2

class BankAccount{
    constructor(balance){
        this.balance = balance+1;
    }

    set balance(value){
        this._balance = value;
    }

    set deposit(value){
        this._balance += value;
    }

    get balance(){
        return this._balance;
    }
}

const account = new BankAccount(1000);
console.log(account.balance)
account.deposit = 100;
console.log(`Balance: ${account.balance}`);
account.balance = 200; 
console.log(`Balance: ${account.balance}`);

// EX.3

class Car{
    #make;
    #year;
    #model;
    constructor(make, model, year){
        this.#make = make;
        this.#model = model;
        this.#year = year;
    }

    set setMake(value){
        this.#make = value;
    }

    set setModel(value){
        this.#model = value;
    }

    set setYear(value){
        this.#year = value;
    }

    setDetails(make, model, year){
        this.setMake=make;
        this.setModel=model;
        this.setYear=year;
    }

    get getDetails(){
        return {make: this.#make, model: this.#model, year: this.#year};
    }
}

const myCar = new Car('Toyota', 'Corrola', 2015);
console.log(myCar.getDetails);
myCar.setDetails('Kia', 'Picanto', 2013);
console.log(myCar.getDetails);

class Animal{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    set setSpeed(value){
        this._speed = value;
    }

    get getSpeed(){
        return this._speed;
    }

    run(value){
        this.setSpeed = value;
        console.log(`The animal ${this.name} runs with speed: ${this.getSpeed} `);
    }

    stop(){
        this.setSpeed = 0;
        return `The animal ${this.name} speed is: ${this.getSpeed} (standing still)`;
    }

}

const someAnimal = new Animal('Bob');
someAnimal.run(10);
console.log(someAnimal.stop());

class Rabbit extends Animal{
    constructor(name){
        super(name);
    }
    hide(){
        return `${this.name} hides!`;
    }

    stop(){
        return `${super.stop()}. ${this.hide()}`;
    }
}

const myRabbit = new Rabbit('Shatu');
myRabbit.run(13);
console.log(myRabbit.stop());

class Calculator{
    add(...args){
        if(args.length == 1){
            return args[0];
        }
        return args[0] + args[1];
    }
}

const myCalcu = new Calculator();
console.log(myCalcu.add(5));
console.log(myCalcu.add(5, 10));
console.log(myCalcu.add(5, 30));


// EX.7

const formatString = (text, options = {})=>{

    if (options.uppercase){
        return text.toUpperCase();
    }
    else if(options.lowercase){
        return text.toLowerCase();
    } else{
        return text;
    }
}



console.log(formatString('hELlo'));
console.log(formatString('hELlo', {uppercase:true}));
console.log(formatString('hELlo', {lowercase:true}));
console.log(formatString('hELlo', {lowercase:false}));

// If the options object contains an "uppercase" property set to true, the function should return the text in uppercase.
// If the options object contains a "lowercase" property set to true, the function should return the text in lowercase.
// The function declaration with look like this:
// const formatString = (text, options = {}) => {/////////////)


// EX.8

class Employee{

    constructor(){
        if (this.constructor == Employee){
            console.log("Object of Abstract Class cannot be created");
        }
    }

    getSalary(){
        return console.error('Error. cannot create instance for abstract class.');
    }

    getMonthlyBonus(){
        return console.error('Error. cannot create instance for abstract class.');
    }
}

class Developer extends Employee{
    constructor(salary){
        super();
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }

    getMonthlyBonus(){
        return this.salary * 0.05;
    }

}

class Manager extends Employee{
    constructor(salary){
        super();
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }

    getMonthlyBonus(){
        return this.salary * 0.1;
    }
}

const manager = new Manager(50000);
console.log(manager.getSalary()); // 50000
console.log(manager.getMonthlyBonus()); // 5000
const developer = new Developer(40000);
console.log(developer.getSalary()); // 40000
console.log(developer.getMonthlyBonus()); // 2000
const emp = new Employee(); // it will throw error "Object of Abstract Class cannot be created"




// --------Slides example--------\\

// class Shape {
//     area() {
//       return 0;
//     }
//     perimeter() {
//       return 0;
//     }
//     toString() {
//       return Object.getPrototypeOf(this).constructor.name;
//     }
//    }
//    class Circle extends Shape {
//     constructor(r) {
//       super();
//       this.radius = r;
//     }
//     area() {
//       return Math.PI * this.radius ** 2;
//     }
//     perimeter() {
//       return Math.PI * this.radius * 2;
//     }
//    }
//    class Rectangle extends Shape {
//     constructor(w, h) {
//       super();
//       this.width = w;
//       this.height = h;
//     }
//     area() {
//       return this.width * this.height;
//     }
//     perimeter() {
//       return 2 * (this.width + this.height);
//     }
//    }
      

// cumulateShapes = (shapes) => {
//     return shapes.reduce((sum, shape) => {
//       if (shape instanceof Shape) {
//         console.log(`Shape: ${shape.toString()} - area: ${shape.area()}`);
//         console.log(
//           `Shape: ${shape.toString()} - perimeter: ${shape.perimeter()}`
//         );
//         return sum + shape.area();
//       }
//       throw Error("Bad argument shape.");
//     }, 0);
//    };
   
//    const shapes = [new Circle(3), new Rectangle(2, 3)];
// //    debugger;
//    console.log('The sum: ' + cumulateShapes(shapes));

