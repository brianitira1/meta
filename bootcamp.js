//oop approach
class test {
  constructor(number) {
    this.number = number;
  }

  checkNumber() {
    if (this.number < 10) {
      console.log(`${this.number} is less than 10`);
    } else {
      console.log(`${this.number} is greater than 10`);
    }
  }
}

let numbertotest = new test(1);
numbertotest.checkNumber();

//functional programming approach
function checknumber(number) {
  if (number < 10) {
    console.log(`${number} is less than 10`);
  } else {
    console.log(`${number} is greater than 10`);
  }
}

let number = 20;
checknumber(number);

//otp generator

class Otp {
  constructor() {
    this.otp = Math.floor(1000 + Math.random() * 9000);
  }
}

let otp = new Otp();
console.log(otp.otp);

//otp generator using pure functions
function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000);
}

let otp2 = generateOtp();
console.log(otp2);

//otp generator using arrow function
const generateOtp2 = () => Math.floor(1000 + Math.random() * 9000);
const otp3 = generateOtp2();
console.log(otp3);

//otp generator using for loop
const generateOtp3 = () => {
  let otp = "";
  for (let i = 0; i < 4; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
};
const otp4 = generateOtp3();
console.log(otp4);

class Otp1 {
  generateOtp() {
    return Math.floor(100000 + Math.random() * 900000);
  }
}

// Create an instance of the Otp class
let otpGenerator = new Otp1();

// Generate and print 5 OTPs using a for loop
for (let i = 0; i < 5; i++) {
  let otp = otpGenerator.generateOtp();
  console.log(otp);
}

const currentDate = new Date();
console.log(currentDate.getTime()); // Get the current time in milliseconds

const currentTime = new Date();
console.log(currentTime.toLocaleTimeString());

class Book {
  constructor(title, author, pages, currentPage) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.currentPage = currentPage;
  }

  nextPage() {
    if (this.currentPage < this.pages) {
      this.currentPage = this.currentPage + 1;
      console.log(`moved to page${this.currentPage}`);
    } else {
      console.log("your are on the final page");
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
      console.log(`moved to page${this.currentPage}`);
    } else {
      console.log("your are on the first page");
    }
  }
}

const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, 10);

myBook.prevPage();
myBook.nextPage();
