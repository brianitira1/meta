class Chores {
  constructor() {}

  walkdog(callback) {
    return setTimeout(() => {
      console.log("i'm walking the dog");
      if (callback) {
        callback();
      }
    }, 1500);
  }

  washdishes(callback) {
    return setTimeout(() => {
      console.log("i'm washing the dishes");

      if (callback) {
        callback();
      }
    }, 3000);
  }

  coding(callback) {
    return setTimeout(() => {
      console.log("i'm coding");
      if (callback) {
        callback();
      }
    }, 500);
  }
}

const chores = new Chores();
chores.walkdog(() => {
  console.log("Dog walked!");
});
chores.washdishes(() => {
  console.log("Dishes washed!");
});
chores.coding(() => {
  console.log("Coding complete!");
});
