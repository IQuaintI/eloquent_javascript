// Chapter 3: Functions//

//Functions//

//Function expression is a function that is assigned to a variable//
const square = function (x) {
  return x * x;
};

//Function declaration is a function that is bound to a name//
function square(x) {
  return x * x;
}

//Arrow function is a function that is written using the arrow syntax//
const square = (x) => {
  return x * x;
};

// -> returns 9 or squares any number that is entered into the ()//
console.log(square(3));
// !!! This log will not work as the square function cannot be redefined as it is a constant !!!//

//Functions do not require a parameter//
const makeNoise = function () {
  console.log("Bing!");
};
makeNoise();
//Returns 'Bing!'//

// // //

//Bindings and Scopes//

//Bindings that can be called throughout the program are called global bindings//
//Bindings that are only available within the function are called local bindings//
function halve(n) {
  return n / 2;
}

let n = 10;
console.log(halve(100)); //Returns 50//
console.log(n); //Returns 10//

//Local scopes can see other local scopes in the same function and global scopes but not local scopes in other functions// // //This is called 'lexical scoping'//

//A call stack is a data structure that stores information about the active functions//
//When a stack grows too large, it results in a 'stack overflow' or 'too much recursion' error or 'blow the stack'//

// // //

//Optional Arguments//

//Functions can be called with extra arguments than parameters// // //These extra arguments are ignored//
function square(x) {
  return x * x;
}

console.log(square(4, true, "hedgehog")); //Returns 16//
//Functions can also be called with fewer arguments than parameters// // //The missing parameters are given the value 'undefined'//
function add(a, b) {
  return a + b;
}

console.log(add(10)); //Returns NaN// // //This is because the function is trying to add a number to 'undefined'//

// // //

//Closure//

//A closure is a function that references bindings from local scopes around it// // //This is useful because it allows the function to 'remember' and access those local bindings//
//Closure example//
let b = 10;

function a() {
  let c = 20;
  return b + c;
}

console.log(a()); //Returns 30//

// // //

//Recursion//

//Recursion is a programming technique that allows a function to call itself// //Running through a simple loop is cheaper than calling a function recursively//
//Recursion example//
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3)); //Returns 8// // //This is because 2 * 2 * 2 = 8//

// // //

//Growing Functions//

//Functions can be written in a way that allows them to grow// // //This is done by adding parameters to the function//
//Growing functions example// // //This function can be called with one or two arguments// // //If only one argument is given, the second argument is given the value of 2// // //If two arguments are given, the function works as normal//
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(4)); //Returns 16//  // //This is because the second argument is given the value of 2//
console.log(power(4, 3)); //Returns 64// // //This is because the function works as normal//

// // //

//Pure Functions//

//A pure function is a function that returns the same value for the same arguments// // //It does not cause any observable side effects// // //It does not rely on side effects//
//Pure functions example//
function square(x) {
  return x * x;
}

console.log(square(4)); //Returns 16//

// // //

//Excercises from Chapter 3//

//Minimum//
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(0, 10)); //Returns 0//

//Recursion//
function isEven(n) {
  if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
  } else if (n < 0) {
    return isEven(-n);
  } else {
    return isEven(n - 2);
  }
}

console.log(isEven(50)); //Returns true//
console.log(isEven(75)); //Returns false//
console.log(isEven(-1)); //Returns false//

//Bean Counting//

function countBs(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "B") {
      count += 1;
    }
  }
  return count;
}

console.log(countBs("BBC")); //Returns 2//

function countChar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) {
      count += 1;
    }
  }
  return count;
}

console.log(countChar("kakkerlak", "k")); //Returns 4//

// // //
