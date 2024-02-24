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
