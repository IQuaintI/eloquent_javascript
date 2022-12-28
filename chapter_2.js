//Chapter 2: Program Structure//

//A fragment of code that produces a value is called an expression //Which accounts for most things//
//A statement is a 'full sentence' with a program being nothing more than a list of statements//
//The changes that a statement can produce are called side effects//
//JavaScript uses a binding or variables to catch and hold variables//

//The shortest statement one can make just needs a semi-colon

//The 'let' statement can be used to define multiple bindings
let one = 1,
  two = 2,
  three = 3;
console.log(one, two, three);
// -> 1,2,3

//A binding name can have any letter and can contain numbers but cannot being with a number //Cannot contain dollar signs ($) or underscores (_)
//A collection of bindings (keywords) and their values is called an enviroment

let x = 30;
console.log("the value of x is", x); //The 'x' returned is returned as a number
// -> "the value of x is '30'"
console.log(`the value of x is ${x}`); //The 'x' returned is returned as a string
// -> "the value of x is 30"

//When a function produces a value, it is said to 'return' that value
console.log(Math.max(2, 4));
// -> 4
console.log(Math.min(2, 4));
// -> 2

//The function 'Number' converts a value to a number
//There is also a string and boolean function that grnats similar conversions

//A 'conditional execution' is where the program makes decisions based on the situation at hand
//A 'conditional execution' is created by the 'if' keyword

//NaN testing
console.log(!isNaN("e"));
console.log(isNaN("e"));
console.log(!Number.isNaN("e"));

//Starts from 2 and ends at 12 because it adds the numbers up and then shows them
let number = 0;
while (number < 12) {
  number = number + 2;
  console.log(number);
}
// -> 2,3,6,8,10,12

//Logs 0 and then begins from there
let numberFromZero = 0;
while (numberFromZero < 12) {
  console.log(numberFromZero);
  numberFromZero = numberFromZero + 2;
}
// -> 0,2,4,6,8,10,

//while loop and do..while
let result = 1;
let counter = 0;
while (counter < 10) {
  counter = counter + 1;
  result = result * 2;
}
console.log(counter);
// -> 10
console.log(result);
// → 1024

//A 'do...while' loop is the same as  'while' loop but the code ALWAYS runs at least once before it is tested against the loop
let doX = 8;
do {
  console.log("Hello");
  doX--; //Prevents infinite loop
} while (doX > 6);
// -> Hello Hello //Prints twice

//'for' loops contain all of the information needed within its group
for (let i = 0; i <= 12; i = i + 2) {
  console.log(i);
}
// -> 0,2,4,5,8,10,12

//A 'for' looped variant of the earlier 'while' loop
let resultFor = 1;
for (let index = 0; index < 10; index++) {
  resultFor = resultFor * 2;
}
console.log(resultFor);

//Breaking a loop
for (let index = 0; (index = index + 1); ) {
  if (index % 13 === 0) {
    console.log(index);
    break;
  }
}
// -> 13 //It's the first number that divides with 0 remainder

//'continue' phrase
let continueLoop = "";
for (let index = 0; index < 10; index++) {
  if (index === 7) {
    continue;
  }
  continueLoop = continueLoop + index;
}

console.log(continueLoop);
// -> 0,1,2,3,4,5,6,8,9 //Skips 7 and continues past it until the condition is met

//Looping a triangle

//Testing while loop
let numbering = "0";

while (numbering <= 7) {
  console.log(numbering);
  numbering++;
}
// -> Runs through numbers 0 through 7

let house = "house";
for (let index = 0; index < house.length; index++) {
  console.log(house);
}
// -> Logs house 5 times since there are 5 letters in the word
/*
let color = "red";
for (let index = 0; color.length < 8; index++) {
  console.log(color);
}
*/
//Stacks # seven times
for (let triangle = "#"; triangle.length < 8; triangle += "#") {
  console.log(triangle);
}
// -> Produces the desired # ## ### ... stack

//Fizzbuzz project
/* let fizzbuzz = 0;
for (let index = 0; index <= 100; index++) {
  if (index % 3 === 0) {
    console.log("Fizz");
  } else if (index % 5 === 0) {
    console.log("Buzz");
  } else {
    fizzbuzz[index];
  }
}
*/

for (let fizzbuzz = 0; fizzbuzz <= 100; fizzbuzz++) {
  let output = "";
  if (fizzbuzz % 3 === 0) {
    output += "Fizz";
  }
  if (fizzbuzz % 5 == 0) {
    output += "Buzz";
  }
  console.log(output || fizzbuzz);
}
// -> Does as the code suggests

//Chessboard
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 === 0) {
      board += "";
    } else {
      board += "#";
    }
    board += "\n";
  }
}

console.log(board);
// -> Displays a checkerboard style
