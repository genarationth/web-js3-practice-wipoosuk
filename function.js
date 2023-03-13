// Create function following below :
// add(a, b)
// subtract(a, b)
// multiply(a, b)
// divide(a, b)

// -----another exercise Create Function Inform---
// console.log("Hi, my name is " + firstName + "I live in " + location + "and enjoy "+hobby);

const add = (a, b) => {
  console.log(a + b);
};
const subtract = (a, b) => {
  console.log(a - b);
};
const multiply = (a, b) => {
  console.log(a * b);
};
const divide = (a, b) => {
  console.log(a / b);
};

add(5, 7);
subtract(5, 7);
multiply(5, 7);
divide(5, 7);

const myInfo = (firstName, location, hobby) =>
  console.log(
    "Hi, my name is " +
      firstName +
      "I live in " +
      location +
      "and enjoy " +
      hobby
  );

myInfo("Wipoo", "Udonthani", "singing");
