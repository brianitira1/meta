const { add } = require("nodemon/lib/rules");

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
