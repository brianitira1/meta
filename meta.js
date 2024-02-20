/*//javacript programming with meta software engineers

console.log("hello there javascript gurus");

console.log("%c hello javacript", "color: green; font-size: 40px");

var person = "brian";

var greeting = "hello";

console.log(greeting, person);

person = "david";

greeting = "hi";

console.log(greeting, person);

console.log("inter" + "net");

var age = 18;

if (age >= 18) {
  console.log("you are old enough to drive");
} else {
  console.log("you are not old enough to drive");
}

var season = "summer";

switch (season) {
  case "spring":
    console.log("it's spring");
    break;
  case "summer":
    console.log("it's summer");
    break;
  case "autumn":
    console.log("it's autumn");
    break;
  case "winter":
    console.log("it's winter");
    break;
}

var month = process.argv[2];

switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log("it's winter");
    break;
  case "february":
  case "april":
  case "june":
  case "september":
  case "november":
    console.log("it's winter");
    break;

  default:
    console.log("invalid month");
    break;
}

for (var i = 1; i < 4; i += 1) {
  console.log(i);
}

console.log("go");

let x = 5;

while (x < 10) {
  console.log(x);
  x += 1;
}

for (let year = 2018; year <= 2022; year += 1) {
  console.log(year);
}

let year = 2018;

while (year <= 2022) {
  console.log(year);
  year += 1;
}

console.log("done");

for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log("week" + i + "day" + j);
  }
}

for (var i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("gold medal");
      break;
    case 2:
      console.log("silver medal");
      break;
    case 3:
      console.log("bronze medal");
      break;
    default:
      console.log(i);
  }
}

function addTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
}

addTwoNumbers(5, 10);
addTwoNumbers(10, 20);

let train1 = ["john", "jane", "joe"];
let train2 = ["sarah", "sophie", "sally"];

function listArrayItems(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    console.log(i + ": " + arr[i]);
  }
}

listArrayItems(train1);
listArrayItems(train2);

function letterFinder(word, match) {
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === match) {
      console.log("Found the", match, "at index", i);
    } else {
      console.log("No match found");
    }
  }
}

letterFinder("bananas", "a");

var fruits = [];

fruits.push("apple");
fruits.push("banana");
fruits.push("orange");

console.log(fruits);

fruits.pop();

console.log(fruits);

function arrayBuilder(one, two, three) {
  var array = [];
  array.push(one);
  array.push(two);
  array.push(three);
  console.log(array);
}

arrayBuilder("apple", "banana", "orange");

console.log(Math.pow(2, 8));
console.log(Math.max(4, 8, 12, 16, 20));
console.log(Math.min(4, 8, 12, 16, 20));
console.log(Math.random() * 20 + 1);

var random = Math.floor(Math.random() * 6) + 1;
console.log(random);

console.log(Math.ceil(5.4));
console.log(Math.floor(5.4));

console.log(Math.round(5.4));
console.log(Math.round(5.6));

console.log(Math.trunc(5.4));
console.log(Math.trunc(5.6));

let randomNumber = Math.random() * 10;

let roundedNumber = Math.ceil(randomNumber);

console.log(randomNumber);
console.log(roundedNumber);

var parting = "goodbye";
var name = "james";

console.log(parting.concat(" ", name));

parting.charAt(0).toUpperCase() + parting.slice(1);

console.log(parting);

console.log(parting.toUpperCase());

console.log("john".concat(" ", "jane"));

var letters = "abc";

letters.match(/a/);

console.log(letters);

//functional programming

var currencyOne = 1000;
var currencyTwo = 0;
var exchageRate = 0.75;

function convertCurrency(amount, rate) {
  return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchageRate);

console.log(currencyTwo);

function calculateTotalPrice(Price, Tax) {
  let calculation = Price * Tax;
  console.log("total price is", calculation);
}

let shoePrice = 500;
let shoeTax = 0.5;

calculateTotalPrice(shoePrice, shoeTax);

//recursion in javascript

let counter = 3;
function example() {
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) {
    return;
  }
  example();
}
example();

//scope in javascript

var a = 1;
var b = 2;
var c = 3;
function testScope() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log(a);
  console.log(b);
  console.log(c);
}
testScope();
console.log(a);
console.log(b);
console.log(c);

//object oriented programming

let purchase1 = {
  shoePrice: 500,
  shoeTax: 1.5,

  totalPrice: function () {
    let calculation = this.shoePrice * this.shoeTax;

    console.log("total price is", calculation);
  },
};

purchase1.totalPrice();

let counter1 = {
  value: 10,
  decrement: function () {
    for (let i = this.value; i >= 1; i--) {
      console.log(i);
    }
  },
};

counter1.decrement();

function counterDecrement(value) {
  for (let i = value; i >= 1; i = i - 1) console.log(i);
}

value = 30;

counterDecrement(value);

//classes in javascript

class Car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }

  turboOn() {
    console.log("turbo on!");
  }
}

const car1 = new Car("green", 300);

car1.turboOn();

function Car1(color, speed) {
  let turboOn = false;

  if (color === "green" && speed === 300) {
    turboOn = true;
    return "turbo on!";
  }

  return "turbo off";
}

const result = Car1("green", 300);
console.log(result);

const bicycle = {
  bell: function () {
    return "this is the bicycle bell";
  },
};

const door = {
  bell: function () {
    return "this is the door bell";
  },
};

door.bell();

const ringTheBell = function (thing) {
  console.log(thing.bell());
};

ringTheBell(door);
ringTheBell(bicycle);

class maths {
  involvesCalculations() {
    console.log("math is all about calculations");
  }
}

class algebra extends maths {
  involvesCalculations() {
    super.involvesCalculations();
    console.log("mmh, this type of math blows my mind");
  }
}

class statistics extends maths {
  involvesCalculations() {
    super.involvesCalculations();
    console.log("dont even start with this one haha");
  }
}

let advancedAlgebra = new algebra();
let advancedStatistics = new statistics();

advancedAlgebra.involvesCalculations();
advancedStatistics.involvesCalculations();

const car3 = {
  color: "orange",
  speed: 400,
};

console.log(Object.values(car3));
console.log(Object.keys(car3));
console.log(Object.entries(car3));

let cloathingItem = {
  price: 500,
  material: "cotton",
  color: "green",
};

for (let key of Object.keys(cloathingItem)) {
  console.log(cloathingItem[key]);
}

const grades = [50, 69, 56, 40, 30];

let sum = 0;

for (let i = 0; i < grades.length; i = i + 1) {
  sum = sum + grades[i];
}

let avarage = sum / grades.length;

console.log(avarage);

class GradeBook {
  constructor(grades) {
    this.grades = grades;
  }

  calculateAvarage() {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum = sum + this.grades[i];
    }

    return sum / this.grades.length;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  removeGrade(index) {
    this.grades.splice(index, 1);
  }
}

const myGrades = new GradeBook([60, 70, 34, 44, 54]);
console.log(myGrades.calculateAvarage());

myGrades.addGrade(60);
console.log(myGrades.grades);
console.log(Math.ceil(myGrades.calculateAvarage()));

myGrades.removeGrade(0);
console.log(myGrades.grades);
console.log(Math.ceil(myGrades.calculateAvarage()));

//for each method

class Vitamins {
  constructor(fruits) {
    this.fruits = fruits;
  }

  appendIndex() {
    this.fruits.forEach((fruit, index) => {
      this.fruits[index] = `${index}_${fruit}`;
    });
  }
}

const myFruits = ["mango", "apple", "orange"];

const vitamins = new Vitamins(myFruits);

vitamins.appendIndex();

console.log(vitamins.fruits);

//map

let array = [0, 10, 20, 30, 40, 50].map((num) => {
  return num / 10;
});

console.log(array);

//new map

let bestFighters = new Map();

bestFighters.set(1, "champion");
bestFighters.set(2, "second best");
bestFighters.set(3, "you are in third place");

console.log(bestFighters);

console.log(bestFighters.get(1));

//set

let repetetiveFruits = ["mango", "apple", "mango", "orange", "apple"];
let uniqueFruits = new Set(repetetiveFruits);

console.log(uniqueFruits); */

//calculator

/*
class Calculator {
  constructor(operator, value1, value2) {
    this.operator = operator;
    this.value1 = value1;
    this.value2 = value2;
  }
}

class Add extends Calculator {
  constructor(value1, value2) {
    super("+", value1, value2);
  }

  getSum() {
    return this.value1 + this.value2;
  }
}

class Subtract extends Calculator {
  constructor(value1, value2) {
    super("-", value1, value2);
  }

  getSub() {
    return this.value1 - this.value2;
  }
}

class Multiplication extends Calculator {
  constructor(value1, value2) {
    super("*", value1, value2);
  }

  getMulti() {
    return this.value1 * this.value2;
  }
}

class Division extends Calculator {
  constructor(value1, value2) {
    super("/", value1, value2);
  }

  getDivide() {
    return this.value1 / this.value2;
  }
}

const getDivision = new Division(3, 6);

console.log(getDivision.getDivide());

//dom manipulation

 */

//the dom

class Calculator {
  constructor(operator, value1, value2) {
    this.operator = operator;
    this.value1 = value1;
    this.value2 = value2;
  }

  getResult() {
    switch (this.operator) {
      case "+":
        return this.value1 + this.value2;

      case "-":
        return this.value1 - this.value2;

      case "*":
        return this.value1 * this.value2;

      case "/":
        return this.value1 / this.value2;
    }
  }
}

function calculateFromTheDom() {
  let = value1 = parseFloat(document.getElementById("value1").value);
  let = value2 = parseFloat(document.getElementById("value2").value);
  let = operator = document.getElementById("operator").value;

  const calculator = new Calculator(operator, value1, value2);
  const resultDisplay = document.getElementById("result");

  resultDisplay.innerText = calculator.getResult();
}
