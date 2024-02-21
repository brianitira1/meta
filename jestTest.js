class addToNumberOop {
  constructor(UsernumberOop) {
    this.UsernumberOop = UsernumberOop;
  }
  addOop() {
    return this.UsernumberOop + 5;
  }
}

let MyNumber = 10;

let AddMynumber = new addToNumberOop(MyNumber);

console.log(AddMynumber.addOop());

module.exports = addToNumberOop;
