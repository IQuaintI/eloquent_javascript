const square = function (x) {
  return x * x;
};

console.log(square(3));
// -> returns 9 or squares any number that is entered into the ()

//Functions do not require a parameter
const makeNoise = function () {
  console.log("Bing!");
};
makeNoise();
//Returns 'Bing!'

//Takes a number and times it by
const power = function (base, exponent) {
  let result = 1;
  for (let index = 0; index < exponent; index++) {
    result *= base;
  }
  return result;
};

console.log(power(5, 2));
// -> 25

//var is scoped in the function while let is scoped to the enclosing block
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
}
// - > 60 (10 + 20 + 30)

console.log(z);
// -> 30
/* console.log(y); */
// -> returns 'y' is not defined

//When multiple bindings have the same name, the innermost i one is called
const halve = function (n) {
  return n / 2;
};
let n = 10;

console.log(halve(10));
// -> 5

console.log(n);
// -> 10
