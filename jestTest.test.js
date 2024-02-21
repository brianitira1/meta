const addToNumberOop = require("./jestTest");

describe("addToNumberOop", () => {
  // Test case for constructor
  it("should create an instance of addToNumberOop with the given number", () => {
    const instance = new addToNumberOop(10);
    expect(instance.UsernumberOop).toBe(10);
  });

  // Test case for addOop method
  it("should add 5 to the UsernumberOop property", () => {
    const instance = new addToNumberOop(10);
    expect(instance.addOop()).toBe(15);
  });
});
