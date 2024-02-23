//object oriented programming with mosh
//objects

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },

  draw: function () {
    console.log("drawing a circle");
  },
};

circle.draw();

//factory function

function DrawCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("drawing circle with factory function");
    },
  };
}

const circle1 = DrawCircle(1);
circle1.draw();
